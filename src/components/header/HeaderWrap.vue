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
.container-fluid{
    background-image: url('@/assets/img/hero-07-2x.jpg');
    height:100%;
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:linear-gradient(180deg, rgba(97,97,97,.22) 20%, rgba(10, 9, 9, 0.8) 80%),url('@/assets/img/hero-07-2x.jpg');
}


</style>