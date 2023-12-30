<script>
export default {
  name: 'ModelOne'
}
</script>

<template>
  <div id="model-1">
    <div class="card">
      <h2>AR-XY Model 1 Sport Edition:</h2>
      <br>
      <h2>Sportività, Lusso, Sostenibilità e Comfort, tutto in un unico, straordinario veicolo.</h2>
      <a href="">
        <router-link to="/discover-model-1">
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

#model-1 {
  background-image: url(img/model-1.png);
  @include background;
  background-position: top;
  transition: background-size 0.5s ease, transform 0.5s ease;

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

