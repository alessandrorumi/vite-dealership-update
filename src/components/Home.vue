<script>
export default {
  name: 'Home',
  components: { AppHeader, Overview, ModelOne, ModelTwo, ModelSuv, AppFooter }
}
import AppHeader from './AppHeader.vue';
import Overview from './Overview.vue';
import ModelOne from './ModelOne.vue';
import ModelTwo from './ModelTwo.vue';
import ModelSuv from './ModelSuv.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
  <AppHeader />
  <div class="snap-container">
    <Overview />
    <ModelOne />
    <ModelTwo />
    <ModelSuv />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

.snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
</style>
