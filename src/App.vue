<template>
  <div id="app">
    <HeaderWrap/>
    <MainWrap/>
    <FooterWrap/>
  </div>
</template>

<script>
import HeaderWrap from './components/header/HeaderWrap.vue'
import MainWrap from './components/main/MainWrap.vue'
import FooterWrap from './components/footer/FooterWrap.vue'
export default {
  name: 'App',
  components: {
    HeaderWrap,
    MainWrap,
    FooterWrap,
  }
}
</script>

<style lang="scss">
#app {
  /* min-width:500px; */
}
</style>
