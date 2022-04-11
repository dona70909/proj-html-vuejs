<template>
    <footer>
        <FooterNav/>
        <FooterCopyright/>
    </footer>
</template>

<script>
import FooterNav from './FooterNav.vue'
import FooterCopyright from './FooterCopyright.vue'
export default {
    name:"FooterWrap",
    components:{
        FooterNav,
        FooterCopyright,
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';
    footer{
        background-image:url('@/assets/img/footer-3.jpg');
        //background-position-x: 50%;
        background-position:center top;;
        font-family: 'PT Serif', serif;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>