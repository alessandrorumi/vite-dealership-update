<script>
export default {
  name: 'Home',
  components: { AppHeader, Overview, ModelOne }
}
import AppHeader from './AppHeader.vue';
import Overview from './Overview.vue';
import ModelOne from './ModelOne.vue';
</script>

<template>
  <AppHeader />
  <Overview />
  <ModelOne />
</template>

<style lang="scss" scoped></style>
