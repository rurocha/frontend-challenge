<template>
  <div class="home">
    <div class="home__container u-container">
      <div class="home__content">
        <h1 class="home__title">Games</h1>
        <ul class="home__list">
          <li 
            class="home__list-item" 
            v-for="game in games"
          >
            <GameCard
              :title="game.name"
              :price="game.price"
              :img="game.image"
            />
          </li>
        </ul>
      </div>
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getGames } from './services';
import { Game } from '~~/types'
import GameCard from './components/atoms/GameCard.vue';
import Cart from './components/atoms/Cart.vue';

const games = ref<Game[]>([])

onMounted(async () => {
  games.value = await getGames()
})

</script>

<style lang="scss" scoped>
.home {
  &__container {
    display: grid;
    grid-template-columns: 1fr 262px;
    gap: 29px;
  }
  &__title {
    font: var(--title);
    color: var(--gray-dark);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
    gap: 31px;
  }
}
</style>
