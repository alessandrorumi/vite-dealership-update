<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

export default {
  name: 'Support',
  components: { AppHeader, AppFooter },
  data() {
    return {
      faqs:
        [
          {
            question: `Perché non ho ricevuto l'ultimo aggiornamento del software?`,
            answer: `Il processo di distribuzione dell'ultimo aggiornamento software può variare, in quanto non tutti gli
              aggiornamenti software vengono rilasciati via etere.Oppure, è possibile che l'auto abbia già ricevuto
              l'ultimo pacchetto software durante un intervento recente in officina o che fosse già dotata dell'ultimo
              software installato alla consegna.Riceverai tutti prossimi aggiornamenti OTA ogni volta che verranno
              rilasciati.`,
            isVisible: false
          },
          {
            question: `Dove posso effettuare l'assistenza della mia AR-XY?`,
            answer: `Collaboriamo con Volvo Car Group per permetterti di scegliere fra centinaia di service point presenti su
              tutto il territorio nazionale e in Europa. Tecnici qualificati eseguono interventi di manutenzione e
              riparazione secondo la filosofia AR-XY: senza compromessi e con grande attenzione ai dettagli. Ti invitiamo
              a contattare il AR-XY support per conoscere quello a te più vicino.`,
            isVisible: false
          },
          {
            question: `Se volessi vedere dal vivo la vettura ed effettuare un test drive, come posso fare?`,
            answer: `A breve sarà possibile prenotare il test drive delle nostre vetture. Per segnalare l’interesse compila il form sul nostro sito e verrai contattato dal nostro AR-XY Support.`,
            isVisible: false
          },
          {
            question: `Quali funzioni sono supportate nell'app?`,
            answer: `Le funzionalità del veicolo incluse nell'app sono: verifica del livello di ricarica della batteria (SOC), stato e programma di ricarica, impostazioni di amperaggio, attivazione del climatizzatore da remoto, timer del climatizzatore, blocco/sblocco da remoto, verifica dello stato delle portiere e posizione di parcheggio. Queste funzioni saranno disponibili nell'app una volta abbinato il tuo dispositivo all'auto durante il procedimento di configurazione iniziale. L'app AR-XY viene continuamente migliorata.`,
            isVisible: false
          },
          {
            question: `Dove ritiro la mia AR-XY?`,
            answer: `Presso uno dei centri autorizzati AR-XY più vicini a te oppure in fase di ordine potrai selezionare il servizio di home delivery, che ti permetterà di ricevere la vettura presso un indirizzo a tua scelta sul territorio nazionale.`,
            isVisible: false
          },
          {
            question: `Quanto dura la garanzia della mia AR-XY?`,
            answer: `AR-XY include una garanzia di 2 anni sulla vettura, con chilometraggio illimitato. Per le batterie, invece, la garanzia è di 8 anni o 160.000km.`,
            isVisible: false
          },
        ]
    }
  },
  methods: {
    toggleAnswer(activeItem) {
      activeItem.isVisible = !activeItem.isVisible;
    }
  }
}
</script>

<template>
  <AppHeader />
  <section id="support">
    <div class="faq-title">
      <div class="left">
        <h2>Polestar support</h2>
        <h2>Assistenza, risposte e consulenza</h2>
      </div>
      <div class="right">
        <h2>Naviga tra gli argomenti sugli EV, esplora le</h2>
        <h2> domande frequenti e ricevi supporto su misura</h2>
        <h2> per qualsiasi problema.</h2>
      </div>
    </div>
    <div class="faq-list">
      <div class="left">
        <h2>Domande più comuni al</h2>
        <h2> momento</h2>
      </div>
      <div class="right">
        <div class="faq-item" v-for="faq in faqs" :key="faq.question" @click="toggleAnswer(faq)">
          <div class="question">
            <div class="text">
              <b>{{ faq.question }}</b>
              <div class="icons">
                <i class="fa-solid fa-plus" v-show="!faq.isVisible"></i>
                <i class="fa-solid fa-minus" v-show="faq.isVisible"></i>
              </div>
            </div>
          </div>
          <div class="answer" v-show="faq.isVisible">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

#support {
  @include background-over-100;

  .faq-title {
    display: flex;
    justify-content: space-around;
  }

  .faq-list {
    background-color: $beige;
    margin-top: 5rem;
    padding: 3rem 1rem 3rem;
    display: flex;
    justify-content: space-evenly;

    .right {
      width: 50%;

      .faq-item {
        padding: 2rem 0 2rem;
        border-bottom: 1px solid black;

        &:hover {
          cursor: pointer;
        }

        .question {
          .text {
            @include flex-vert-center;
            justify-content: space-between;
          }
        }

        .answer {
          margin-top: 1rem;
        }

        &:first-child {
          width: 100%;
        }
      }
    }
  }

  i:hover {
    cursor: pointer;
  }
}
</style>