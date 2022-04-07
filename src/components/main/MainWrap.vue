<template>
    <main>
        <MoreInfo/>
        <AudibleAd/>
        <CriticsSection/>
        <UpcomingSection/>
    </main>
</template>

<script>
import MoreInfo from './MoreInfo.vue'
import AudibleAd from './AudibleAd.vue'
import CriticsSection from './CriticsSection.vue'
import UpcomingSection from './UpcomingSection.vue'
export default {
    name:"MainWrap",
    components:{
        MoreInfo,
        AudibleAd,
        CriticsSection,
        UpcomingSection,
    }
}
</script>

<style lang="scss" scoped>

</style>