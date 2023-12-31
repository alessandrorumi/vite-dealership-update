<script>
import AppHeader from '../AppHeader.vue';
import AppFooter from '../AppFooter.vue';

export default {
  name: 'DiscoverModelTwo',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
  <div id="discover-model-2">
    <div class="full-image">
      <h1 class="h1 fade-in">AR-XY Model 2</h1>
      <div class="info fade-in-delay">
        <div class="km">
          <h2>543km</h2>
          <h4>Autonomia</h4>
        </div>
        <div class="speed">
          <h2>2,6s</h2>
          <h4>0-100 km/h</h4>
        </div>
        <div class="time">
          <h2>9,9s</h2>
          <h4>1 Km</h4>
        </div>
        <div class="hp">
          <h2>1020CV</h2>
          <h4>Potenza del veicolo</h4>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="text">
        La Model 2: concepita per chi desidera emozioni forti, unisce performance mozzafiato a uno stile
        audace e distintivo.
      </div>
      <div class="car-image">
        <img src="../../assets/model-2/model-2-frontal.png" alt="">
      </div>
      <div class="car-image">
        <img src="../../assets/model-2/model-2-outside.png" alt="">
      </div>
      <div class="text">
        La Model 2: offre l'accelerazione più rapida rispetto a qualsiasi altro veicolo in produzione.
        L'architettura aggiornata della batteria per tutti gli allestimenti della Model 2 consente scatti
        fulminei consecutivi senza degrado delle prestazioni.
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

#discover-model-2 {
  .full-image {
    background-image: url(img/model-2.png);
    @include background;
    background-position: top;
    transition: background-position 1s ease;
    @include flex-vert-center;
    flex-direction: column;
    justify-content: space-between;

    &>* {
      padding: 3rem;
    }

    .info {
      display: flex;

      &>div {
        margin: 0 1.5rem;
        @include flex-vert-center;
        flex-direction: column;
      }
    }

    &:hover {
      background-position: center;
    }

    /* Definizione dell'animazione */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    .fade-in {
      animation: fadeIn 2s ease-in-out;
    }

    .fade-in-delay {
      animation: fadeIn 2.5s ease-in-out;
    }
  }

  .details {
    @include background-over-100;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: rgb(42, 51, 53);
    background: linear-gradient(90deg, rgba(42, 51, 53, 0.8475723052893032) 8%, rgba(52, 67, 70, 0.8923902324601716) 38%, rgba(127, 182, 198, 0.8083566190147934) 75%);

    .text {
      width: 50%;
      padding: 5rem;
      @include flex-vert-center;
      line-height: 2.25rem;
      font-weight: bold;
      color: $primary;
    }

    .car-image {
      width: 50%;
    }
  }
}
</style>

