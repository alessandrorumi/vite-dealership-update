<script>
export default {
  name: 'ModelOne'
}
</script>

<template>
  <div id="model-1">
    <div class="card">
      <h2>AR-XY Model 1:</h2>
      <br>
      <h2>Sportività, Lusso, Sostenibilità e Comfort, tutto in un unico, straordinario veicolo.</h2>
      <a href="#model-1-setups">
        <div class="discover">
          <span>Scopri di più<i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#model-1 {
  background-image: url(img/model-1.png);
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
      padding: 1.5rem 2rem;
      width: 185px;

      &:hover {
        background-color: rgba($color: $lightgrey, $alpha: .08);
      }
    }

    a {

      &:hover {
        .fa-arrow-right {
          color: $grey;
          transition: color 1s ease;
        }
      }

      .fa-arrow-right {
        color: $primary;
        margin-left: .65rem;
      }
    }

  }
}
</style>

