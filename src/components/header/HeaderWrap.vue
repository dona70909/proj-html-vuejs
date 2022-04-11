<template>
    <header>
        <section class="container-fluid">
            <HeaderNav/>
            <HeaderJumbo/>
        </section>
        <section class="linear"></section>
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
.container-fluid{
    background-image: url('@/assets/img/hero-07-2x.jpg');
    height:100%;
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;

    /*   background:linear-gradient(radial gradient,rgba(54, 79, 222, 0.52), rgba(117, 19, 93, 0.73)),
    url('@/assets/img/hero-07-2x.jpg'); */

    background-image: linear-gradient(180deg,rgba(11, 11, 11, 0.62),rgba(8, 8, 8, 0.63) ), url('@/assets/img/hero-07-2x.jpg');
    
}


</style>