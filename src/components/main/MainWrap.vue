<template>
    <main>
        <MoreInfo/>
        <AudibleAd/>
        <CriticsSection/>
        <UpcomingSection/>
        <SubscribeNews/>
        <AboutAuthor/>
        <RecentArticles/>
    </main>
</template>

<script>
import MoreInfo from './MoreInfo.vue'
import AudibleAd from './AudibleAd.vue'
import CriticsSection from './CriticsSection.vue'
import UpcomingSection from './UpcomingSection.vue'
import SubscribeNews from './SubscribeNews.vue'
import AboutAuthor from './AboutAuthor.vue'
import RecentArticles from './RecentArticle.vue'
export default {
    name:"MainWrap",
    components:{
        MoreInfo,
        AudibleAd,
        CriticsSection,
        UpcomingSection,
        SubscribeNews,
        AboutAuthor,
        RecentArticles,
    }
}
</script>

<style lang="scss" scoped>

</style>