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
    footer{
        background-image:url('@/assets/img/footer-3.jpg');
        height: 600px;
        object-fit: center;
        background-position-x: 50%;
    }
</style>