<template>
    <header>
        <section class="container-fluid">
            <HeaderNav/>
            <HeaderJumbo/>
        </section>
    </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import HeaderJumbo from './HeaderJumbo.vue'

export default {
    name:"HeaderWrap",
    components:{
        HeaderNav,
        HeaderJumbo,
    }
}
</script>

<style lang="scss" scoped>
header{
    /* filter: grayscale(50%); */
    background-image: url(' @/assets/img/hero-07-2x.jpg');
    height:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>