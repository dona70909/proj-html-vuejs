<template>
  <div id="app">
    <HeaderWrap/>
    <img class="hero" :src="require('./assets/img/hero-07-2x.jpg')" alt="">
  </div>
</template>

<script>
import HeaderWrap from './components/header/HeaderWrap.vue'
export default {
  name: 'App',
  components: {
    HeaderWrap
  }
}
</script>

<style lang="scss">
.hero{
  width:100%;
  height: 600px;
  object-fit: center;
}
</style>
