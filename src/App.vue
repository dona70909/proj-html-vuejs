<template>
  <div id="app">
    <HeaderWrap/>
    <MainWrap/>
  </div>
</template>

<script>
import HeaderWrap from './components/header/HeaderWrap.vue'
import MainWrap from './components/main/MainWrap.vue'
export default {
  name: 'App',
  components: {
    HeaderWrap,
    MainWrap,
  }
}
</script>

<style lang="scss">
</style>
