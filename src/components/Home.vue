<script>
export default {
  name: 'Home',
  components: { AppHeader, Overview, ModelOne, AppFooter }
}
import AppHeader from './AppHeader.vue';
import Overview from './Overview.vue';
import ModelOne from './ModelOne.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
  <AppHeader />
  <Overview />
  <ModelOne />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
