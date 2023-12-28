<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

export default {
  name: 'DiscoverModelOne',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
  <div id="discover-model-1">
    <div class="full-image">
      <h1 class="h1-fade-in">AR-XY Model 1 Sport Edition</h1>
    </div>
    <div class="details">
      <div class="text">
        La Model 1 Sport Edition: concepita per chi desidera emozioni forti, unisce performance mozzafiato a uno stile
        audace e distintivo.
      </div>
      <div class="car-image">
        <img src="../assets/model-1/model-1-frontal.png" alt="">
      </div>
      <div class="car-image">
        <img src="../assets/model-1/model-1-semi-frontal.png" alt="">
      </div>
      <div class="text">
        La Model 1 Sport Edition: coffre l'accelerazione più rapida rispetto a qualsiasi altro veicolo in produzione.
        L'architettura aggiornata della batteria per tutti gli allestimenti della Model 1 Sport Edition consente scatti
        fulminei consecutivi senza degrado delle prestazioni.
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#discover-model-1 {
  .full-image {
    background-image: url(img/model-1.png);
    @include background;
    background-position: top;

    /* Definizione dell'animazione */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    /* Applicazione dell'animazione all'elemento h1 */
    .h1-fade-in {
      animation: fadeIn 2s ease-in-out;
    }


    h1 {
      text-align: center;
      padding-top: 8rem;
    }
  }

  .details {
    @include background-over-100;
    padding-bottom: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #000000;

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

      img {
        width: 100%;
      }
    }
  }
}
</style>

