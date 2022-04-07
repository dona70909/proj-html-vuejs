<template>
    <main>
        <MoreInfo/>
        <AudibleAd/>
    </main>
</template>

<script>
import MoreInfo from './MoreInfo.vue'
import AudibleAd from './AudibleAd.vue'
export default {
    name:"MainWrap",
    components:{
        MoreInfo,
        AudibleAd,
    }
}
</script>

<style lang="scss" scoped>

</style>