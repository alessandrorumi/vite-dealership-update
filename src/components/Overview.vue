<script>
export default {
  name: 'Overview'
}
</script>

<template>
  <div id="overview">
    <div class="titles">
      <h2>Simply AR-XY.</h2>
      <h1>Design & Passion</h1>
      <div class="links">
        <div class="more-infos">
          <a href="">
            <span>Per saperne di pi&ugrave; <i class="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
        <router-link to="/shop">
          <div class="models">
            <a href="">
              <span>Modelli disponibili <i class="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#overview {
  background-image: url(img/modern-car-3.png);
  @include background;


  .titles {
    @include card-background;
    left: 5rem;
    color: $primary;
    background-color: rgba($color: $grey, $alpha: .7);
    padding: 2rem 1.25rem;

    .links {
      @include flex-vert-center;

      .more-infos,
      .models {
        @include mybutton;
        width: 250px;

        &:hover {
          background-color: $lightgrey;
        }

        a {
          padding: 1.5rem .85rem;
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
