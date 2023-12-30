<script>
export default {
  name: 'ModelTwo'
}
</script>

<template>
  <div id="model-2">
    <div class="card">
      <h2>AR-XY Model 2:</h2>
      <br>
      <h2>Eleganza, innovazione e comfort si fondono in un'esperienza di guida
        raffinata e dinamica, perfetta per la città e oltre.</h2>
      <a href="">
        <router-link to="/discover-model-2">
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

#model-2 {
  background-image: url(img/model-2.png);
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

