<template>
    <main>
        <MoreInfo/>
        <AudibleAd/>
        <CriticsSection/>
    </main>
</template>

<script>
import MoreInfo from './MoreInfo.vue'
import AudibleAd from './AudibleAd.vue'
import CriticsSection from './CriticsSection.vue'
export default {
    name:"MainWrap",
    components:{
        MoreInfo,
        AudibleAd,
        CriticsSection,
    }
}
</script>

<style lang="scss" scoped>

</style>