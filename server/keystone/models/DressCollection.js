const keystone = require('keystone');
const Types = keystone.Field.Types;
const MainPromo = require('../partials/MainPromo');
const Promo = require('../partials/Promo');
const Seo = require('../partials/Seo');
const {
  PAGE_DRESS_COLLECTION_PROM, PAGE_DRESS_COLLECTION_WEDDING,
} = require('../../../config/constants.js');

const Inherit = [
  'Мета-инфо', Seo.schema,
  'Промо', Promo.schema,
  'Большое промо', MainPromo.schema,
];

const DressCollection = new keystone.List('DressCollection', {
  label:'Коллекции',
  plural: 'Коллекции',
  singular: 'Коллекция',
  sortable: true,
  autokey: { path: 'slug', from: 'name', unique: true },
  hidden: false,
});

DressCollection.add(...Inherit, 'Коллекция', {
  name: { label: 'Название', type: String, required: true },
  state: {
    label: 'Статус',
    type: Types.Select,
    default: 'draft',
    options: [{
      label: 'Черновик', value: 'draft',
    }, {
      label: 'Опубликовано', value: 'published',
    }, {
      label: 'Архив', value: 'archived',
    }],
  },
  type: {
    type: Types.Select,
  	label: 'Тип',
  	options: [{
      label: 'Вечерние платья', value: 'prom',
  	}, {
      label: 'Свадебные платья', value: 'wedding',
  	}, {
      label: 'Капсульная коллекция', value: 'capsule',
    }],
  },
  description: {
    type: Types.Html,
  	label: 'Описание',
    wysiwyg: true,
  },
  resources: {
    type: Types.Text,
    label: 'Ресурсы',
  },
}, 'Отзывы о коллекции', {
  feedbacks: {
    headline: { type: Types.Text, label: 'Заголовок' },
    links: { label: 'Отзывы', type: Types.Relationship, ref: 'Feedback', many: true },
  },
});

DressCollection.schema.set('toJSON', {
  transform: function (doc, ret) {
    ret = Seo.methods.toJSON(ret);

    if (ret.type == 'prom') {
      ret.route = PAGE_DRESS_COLLECTION_PROM;
    } else if (ret.type == 'wedding') {
      ret.route = PAGE_DRESS_COLLECTION_WEDDING;
    }

    ret.params = {
      'collection': ret.slug,
    };

    return ret;
  },
});

DressCollection.schema.pre('save', function (next) {
  const cloudinary = /(http|https):\/\/res.cloudinary.com\/vessna\/image\/upload\/.*\//;
  const local = '/images/';

  Promo.methods.save.call(this);
  MainPromo.methods.save.call(this);

  if (this.images && this.images.length) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].url) {
        this.images[i].url = this.images[i].url.replace(cloudinary, local);
      }

      if (this.images[i].secure_url) {
        this.images[i].secure_url = this.images[i].url.replace(cloudinary, local);
      }
    }
  }

  next(this);
});

DressCollection.relationship({ path: 'dresses', ref: 'Dress', refPath: 'collections' });

DressCollection.defaultColumns = 'name|30%, type|30%, state|20%, promo.image|20%';
DressCollection.register();

module.exports = DressCollection;
