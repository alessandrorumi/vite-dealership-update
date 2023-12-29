<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'Location',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
  <div id="location">
    <div class="titles">
      <div class="left">
        <h2>Space</h2>
        <h2>Una nuova visione di store automobilistico</h2>
      </div>
      <div class="right">
        <h2>Esplora i nostri ultimi modelli. Tocca con mano i nostri materiali innovativi. Scopri i meccanismi interni
          delle vetture Polestar. I Polestar specialist sono a tua disposizione per consigli o eventuali informazioni.
        </h2>
      </div>
    </div>
    <div class="car-image">
      <img src="../assets/location.png" alt="">
      <div class="where-to-go">
        <div class="title">
          <h2>Trova uno Space</h2>
        </div>
        <div class="text">
          <div class="milan">
            <h3>Milano</h3>
            <div class="city-time">
              <div class="city">
                <span>Via, Milano</span>
                <br>
                <span>Italia</span>
                <div class="time">
                  <span>Aperto oggi: 10.00 - 19.00</span>
                </div>
              </div>

            </div>
          </div>
          <div class="rome">
            <h3>Roma</h3>
            <div class="city-time">
              <div class="city">
                <span>Via, Roma</span>
                <br>
                <span>Italia</span>
              </div>
              <div class="time">
                <span>Aperto oggi: 10.00 - 18.30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#location {
  @include background-over-100;
  padding-bottom: 0;

  .titles {
    display: flex;
    justify-content: space-around;

    .left {
      width: 20%;
    }

    .right {
      width: 50%;
    }
  }

  .car-image {
    width: 100%;
    margin: 5rem auto 0;
    padding: 5rem;
    background-color: $beige;
    display: flex;
    flex-wrap: wrap;

    .where-to-go {
      width: 100%;
      @include space-bet;

      .text {
        width: 40%;
        padding: 0 2rem;

        &>div {
          @include space-bet;
          padding-bottom: 1rem;
          margin: 1rem 0;
          border-bottom: 1px solid $grey;
        }
      }
    }

    img {
      margin-bottom: 3rem;
    }

    .card {
      width: calc((100% / 3) - 2rem);
      margin: 1rem;
    }
  }
}
</style>