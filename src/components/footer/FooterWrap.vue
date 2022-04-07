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
    
</style>