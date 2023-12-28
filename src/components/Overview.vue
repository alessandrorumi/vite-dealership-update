<script>
export default {
  name: 'Overview'
}
</script>

<template>
  <div id="home">
    <div class="titles">
      <h2>Simply AR-XY.</h2>
      <h1>Design & Passion</h1>
      <div class="links">
        <div class="more-infos">
          <a href="">
            <span>Per saperne di pi&ugrave; <i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
        <div class="models">
          <a href="">
            <span>Modelli disponibili <i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#home {
  background-image: url(img/modern-car-3.png);
  @include background;

  .titles {
    @include card-background;
    left: 5rem;
    color: $primary;
    background-color: rgba($color: $grey, $alpha: .7);

    .links {
      @include flex-vert-center;

      .more-infos,
      .models {
        @include mybutton;

        &:hover {
          background-color: $lightgrey;
        }

        a {
          padding: 1.5rem 2rem;
          color: $primary;

          &:hover {
            .fa-arrow-right {
              color: $grey;
              transition: color 1s ease;
            }
          }
        }

        .fa-arrow-right {
          color: $primary;
          margin-left: .65rem;
        }
      }
    }
  }
}
</style>
