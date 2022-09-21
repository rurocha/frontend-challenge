<template>
  <div 
    class="card" 
    @click="emit('click')" 
    data-hover="adicionar ao carrinho"
  >
    <picture class="card__picture">
      <img class="card__img" src="~~/assets/img/fifa-18.png" alt="" loading="lazy">
    </picture>
    <h2 class="card__title">{{ title }}</h2>
    <span class="card__price">{{ price }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  img: string;
  price: number;
}
const props = defineProps<Props>()

const emit = defineEmits(['click'])
// const imgPath = require(`~~/assets/img/fifa-18.png`);
</script>

<style lang="scss">
@import '~~/assets/sass/2_tools/positioning';
.card {
  position: relative;
  @include flex-center-column;
  cursor: pointer;
  transition: opacity 1s ease-in-out;

  &__picture {
    background-color: var(--gray-light);
    border-radius: 3px;
    padding: 25px 41px;
    margin-bottom: 12px;
    display: block;
  }
  &__title {
    font: var(--label-md-regular);
    color: var(--gray);
    margin-bottom: 2px;
  }
  &__price {
    font: var(--label-md-bold);
    color: var(--blue);
  }
  &__title, &__price {
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    .card {
      &__title,
      &__price {
        opacity: 0;
      }
    }
    &.card:after {
      opacity: 1;
    }
  }

  &:after {
    content: attr(data-hover);
    opacity: 0;
    display: block;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    bottom: 8px;
    font: var(--label-md-bold);
    color: var(--blue);
  }
}
</style>