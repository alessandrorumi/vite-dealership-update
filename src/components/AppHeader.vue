<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<template>
  <header>
    <!-- Menu Laterale -->
    <div class="lateral-menu">
      <i class="fa-solid fa-bars" style="font-size: 2rem;" @click="isVisible = true"></i>
    </div>
    <!-- Sidebar-->
    <div class="sidebar" v-show="isVisible">
      <ul>
        <li>
          <div class="login-exit">
            <a href="">Accedi</a>
            <i class="fa-solid fa-xmark" style="color: #000; font-size: 2rem" @click="isVisible = false"></i>
          </div>
        </li>
        <li>
          <a href="#model-1">
            <h2>AR-XY Model 1 Sport Edition</h2>
          </a>
        </li>
        <li>
          <a href="#model-2">
            <h2>AR-XY Model 2</h2>
          </a>
        </li>
        <li>
          <a href="#model-suv">
            <h2>AR-XY Model SUV</h2>
          </a>
        </li>
        <li>
          <a href="">
            <h2>Prenota un Test Drive</h2>
          </a>
        </li>
        <li>
          <a href="">
            <h2>Shop</h2>
          </a>
        </li>
        <li>
          <a href="">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li>
          <a href="">
            <router-link to="/ownership">Ownership</router-link>
          </a>
        </li>
        <li>
          <a href="">
            <span>Location</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>Business</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>News</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>Sostenibilità</span>
          </a>
        </li>
        <li>
          <a href="">
            <router-link to="/support">Support</router-link>
          </a>
        </li>
      </ul>
    </div>

  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

header {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 100;
  @include flex-vert-center;
}

.fa-bars {
  color: #b6dae9;
  margin-left: 5rem;

  &:hover {
    cursor: pointer;
  }
}

.sidebar {
  height: 100%;
  width: 500px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: $primary;
  overflow-x: hidden;
  padding: 3.5rem;

  ul {
    display: flex;
    flex-direction: column;

    li {
      margin: .75rem 0;
    }

    .login-exit {
      display: flex;
      justify-content: space-between;
    }
  }

  a {
    color: $grey;
  }

  i:hover {
    cursor: pointer;
  }
}
</style>
