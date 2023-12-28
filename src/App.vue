<script setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>


<style lang="scss"></style>
