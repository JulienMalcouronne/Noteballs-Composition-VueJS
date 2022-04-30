
<template>
  <NavBar></NavBar>
  <router-link to="/" class="button">Notes</router-link> |
  <router-link to="/stats" class="button">stats</router-link>
 <router-view ></router-view>
</template>

<script setup>

  import NavBar from './components/layout/NavBar.vue';
</script>


<style>
@import "bulma/css/bulma.min.css";
</style>
