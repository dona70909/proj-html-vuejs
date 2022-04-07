<template>
    <main>
        <MoreInfo/>
        <AudibleAd/>
        <CriticsSection/>
        <UpcomingSection/>
        <SubscribeNews/>
    </main>
</template>

<script>
import MoreInfo from './MoreInfo.vue'
import AudibleAd from './AudibleAd.vue'
import CriticsSection from './CriticsSection.vue'
import UpcomingSection from './UpcomingSection.vue'
import SubscribeNews from './SubscribeNews.vue'
export default {
    name:"MainWrap",
    components:{
        MoreInfo,
        AudibleAd,
        CriticsSection,
        UpcomingSection,
        SubscribeNews,
    }
}
</script>

<style lang="scss" scoped>

</style>