<script>
export default {
  name: 'ModelSuv'
}
</script>

<template>
  <div id="model-suv">
    <div class="card">
      <h2>AR-XY Model SUV:</h2>
      <br>
      <h2>Un'avventura di lusso, potenza ed efficienza, progettata per famiglie, esploratori urbani e amanti della natura.
      </h2>
      <a href="">
        <router-link to="/discover-model-suv">
          <div class="discover">
            <span>Scopri di più<i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </router-link>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

#model-suv {
  background-image: url(img/model-suv.png);
  @include background;
  background-position: top;

  .card {
    @include card-background;
    top: 15%;
    left: 5rem;
    transform: none;
    width: 500px;

    h2 {
      color: $primary;
    }

    .discover {
      @include mybutton;

      &:hover {
        background-color: rgba($color: $lightgrey, $alpha: .08);
      }
    }
  }
}
</style>

