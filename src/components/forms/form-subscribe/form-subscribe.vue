<template>
  <v-form @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Подписка на новости</h3>
    </template>
    <template slot='body'>
      <div class="form-subscribe__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.email" name="email" type="email" placeholder="E-mail" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-checkbox v-model="state.checked" name="checked" class="ml-4" :required="true" label="Даю согласие на обработку персональных данных"/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-subscribe__control">
        <atom-button class="form__submit" type="submit" :disabled="disabled" :title="title" block label="Отправить"/>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  export default {
    name: 'FormSubscribe',

    extends: Form,

    components: {
      AtomButton,
      AtomInput,
      AtomCheckbox,
      AtomSelect,
      AtomTextarea,
      'v-form': Form,
    },

    data () {
      return {
        action: '/api/forms/subscribe',
        form: {
          email: '',
          subscribe: true,
        },
        state: {
          checked: false,
          recaptcha: null,
        },
        label: {
          success: 'Подписка оформлена',
          failure: 'Ошибка сервера',
        },
      };
    },

    methods: {
      success () {
        setTimeout(() => {
          this.$emit('success');
        }, 3000);
      },

      failure () {
        setTimeout(() => {
          this.$emit('failure');
        }, 3000);
      },
    },
  };
</script>

<style lang="scss">
  .form-subscribe__group {

  }

  .form-subscribe__control {

  }
</style>
