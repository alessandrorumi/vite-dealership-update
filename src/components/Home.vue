<script>
export default {
  name: 'Home',
  components: { AppHeader, Overview }
}
import AppHeader from './AppHeader.vue';
import Overview from './Overview.vue';
</script>

<template>
  <AppHeader />
  <Overview />
</template>

<style lang="scss" scoped></style>
