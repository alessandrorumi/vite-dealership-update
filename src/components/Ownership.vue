<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'Ownership',
  components: { AppHeader, AppFooter }
}
</script>

<template>
  <AppHeader />
  <div id="ownership">
    <div class="titles">
      <div class="left">
        <h2> Essere proprietari di una AR-XY</h2>
      </div>
      <div class="right">
        <h2>Supporto e servizi sempre disponibili e competenza tecnica rendono il possesso di una AR-XY un'esperienza di
          prima classe che va ben oltre la guida.</h2>
      </div>
    </div>
    <div class="car-image">
      <img src="../assets/ownership-img.webp" alt="">
      <div class="card">
        <h2>Servizio e manutenzione</h2>
        <p>Grazie a una rete globale di service point, puoi sempre contare sull'assistenza, la manutenzione e le
          competenze di cui hai bisogno per mantenere la tua AR-XY come nuova.</p>
      </div>
      <div class="card">
        <h2>Rete di ricarica</h2>
        <p>L'app Plugsurfing – AR-XY edition consente di accedere alla più vasta rete di stazioni di ricarica pubbliche
          in tutta Europa e di usufruire di tariffe scontate attraverso la rete IONITY.</p>
      </div>
      <div class="card">
        <h2>Assistenza AR-XY</h2>
        <p>Se hai bisogno di aiuto, ovunque tu sia puoi richiedere assistenza tramite la nostra app, l'assistenza locale o
          attivando i pulsanti di bordo.</p>
      </div>
      <div class="card">
        <h2>Aggiornamenti over-the-air</h2>
        <p>Gli aggiornamenti del software garantiscono alla tua AR-XY prestazioni sempre ottimali. Riceverai una
          notifica ogni volta che è disponibile un aggiornamento, che dovrai semplicemente scaricare e installare.</p>
      </div>
      <div class="card">
        <h2>Garanzia</h2>
        <p>Ogni AR-XY è coperta da garanzia sulla vettura, sulla verniciatura, sulla corrosione e sulla batteria ad
          alta tensione.</p>
      </div>
      <div class="card">
        <h2>Trattamento dei dati e privacy</h2>
        <p>Raccogliamo e trattiamo i dati personali in modo responsabile. Scopri informazioni dettagliate sulle modalità
          di utilizzo e condivisione dei dati.</p>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#ownership {
  @include background-over-100;

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
    margin: 5rem auto;
    padding: 5rem;
    background-color: $beige;
    display: flex;
    flex-wrap: wrap;

    img {
      width: 100%;
      margin-bottom: 3rem;
    }

    .card {
      width: calc((100% / 3) - 2rem);
      margin: 1rem;
    }
  }
}
</style>