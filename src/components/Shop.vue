<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'Shop',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
  <div id="shop">
    <div class="filter">
      <h2>I Nostri Modelli</h2>
    </div>
    <div class="cars">
      <div class="model-1-image">
        <img src="../assets/shop/model-1-shop.png" alt="">
        <div class="text">
          <h3>Model 1 Sport Edition</h3>
          <span>75.000€</span>
        </div>
      </div>
      <div class="model-2-image">
        <img src="../assets/shop/model-2-shop.png" alt="">
        <div class="text">
          <h3>Model 2</h3>
          <span>40.000€</span>
        </div>
      </div>
      <div class="model-suv-image">
        <img src="../assets/shop/model-suv-shop.png" alt="">
        <div class="text">
          <h3>Model SUV</h3>
          <span>55.000€</span>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#shop {
  display: flex;
  text-align: center;
  padding: 5rem;
  background-color: gainsboro;

  .filter {
    width: 25%;
    justify-content: center;
    padding-top: 10rem;
  }

  .cars {
    width: 75%;
    // display: flex;
    margin-top: -2rem;

    // .model-2-image {
    //   margin: 0 -8rem;
    // }

    .text {
      margin-top: -6rem;
    }
  }

}
</style>