<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="top">
      <div class="left">
        <h2>Non perderti le ultime novità di AR-XY</h2>
        <a href="">
          <div class="subscribe">
            <span>Iscriviti<i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>
      </div>
      <div class="right">
        <div class="column">
          <ul>
            <li><b>Home</b></li>
            <li><a href="">Model-1</a></li>
            <li><a href="">Model-2</a></li>
            <li><a href="">Prenota un Test Drive</a></li>
            <li><a href="">AR-XY Disponibili</a></li>
            <li><a href="">Polestar Location</a></li>
            <li><a href="">Extras</a></li>
            <li><a href="">Additionals</a></li>
            <li><a href="">Centri di assistenza</a></li>
            <li><a href="">Support</a></li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li><b>Support</b></li>
            <li><a href="">Come acquistare</a></li>
            <li><a href="">Metodi di finanziamento</a></li>
            <li><a href="">Ownership</a></li>
            <li><a href="">Guida elettrica</a></li>
            <li><a href="">Scarica App</a></li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li><b>Scopri</b></li>
            <li><a href="">Eventi</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Sostenibilità</a></li>
            <li><a href="">Scopri AR-XY</a></li>
            <li><a href="">Lavora con noi</a></li>
            <li><a href="">Media</a></li>
            <li><a href="">Investitori</a></li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li><b>Social</b></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Youtube</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">X (Twitter)</a></li>
            <li><a href="">Tik Tok</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="copyright">

      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

footer {

  @include background-over-100;

  .top {
    display: flex;
    margin: 4rem 0;

    .left {
      width: 25%;

      .subscribe {
        @include mybutton;
      }
    }

    .right {
      width: 75%;
      display: flex;
      margin-left: 8rem;
      justify-content: center;

      .column {
        width: 25%;
      }
    }
  }

  .bottom {
    padding-top: 2rem;
    border-top: 2px solid $grey;

    .copyright {}
  }
}
</style>