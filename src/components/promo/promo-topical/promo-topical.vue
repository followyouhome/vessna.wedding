<template>
	<div class="promo promo-topical promo--effect-click promo--width-2">
    <div class="promo__wrapper promo-topical__wrapper">
      <atom-link class="promo__image-wrapper promo-topical__image-wrapper" v-bind:to="item.route">
          <image-deferred v-bind:image="item.promo.image" v-bind:aspect="'image-deffered--size-1-2'"></image-deferred>
      </atom-link>
      <div class="promo__content-wrapper promo-topical__content-wrapper">
        <atom-link class="promo-topical__headline" v-bind:to="item.route">
        	<h4 class="promo__text-headline">{{ item.promo.headline }}</h4>
        </atom-link>
      </div>
    </div>
	</div>
</template>

<script>
  import Promo from '../promo';

	export default {
		name: 'PromoTopical',

    extends: Promo,

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo-topical {
		width: 300px;
	}

	.promo-topical__wrapper {
		position: relative;
		border: 1px solid $gray1;
		border-radius: 5px;

		html[amp] & {
			height: 100%;
		}
	}

	.promo-topical__image-wrapper {
		filter: blur(5px);
		transform: translate3d(0,0,0);
		transition: all 0.1s linear;

		.promo-topical__wrapper:hover & {
			filter: none;
		}
	}

	.promo-topical__content-wrapper {
		position: absolute;
		padding: 10px;
		bottom: 0;
		width: 100%;

		background: $glass;
		transition: all 0.1s linear;

		.promo-topical__wrapper:hover & {
			background: $white;
		}
	}

	.promo-topical__headline {
		display: block;

		text-align: center;

		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
