<template>
    <section class="container-fluid bg-ad-audible">
        <div class="row px-5 pt-4 justify-content-center">
            <div class="col-lg-6 mb-lg-0 mb-4 col-12 px-0 d-flex justify-content-lg-end justify-content-center">
                <img class="audible-screen" :src="require('@/assets/img/audible-app-2x-600x628.png')" alt="">
            </div>
            <div class="col-lg-6 col-12 px-0 container-article text-white text-center mb-lg-0 mb-4">
                <div class="text-article">
                    <h5 class="title-article">New Audiobook</h5>
                    <h6 class="subtitle-article">No time to read? No problem. Listen to it.</h6>
                    <p class="paragraph-article text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo, praesentium eaque sint in consequatur!</p>
                </div>
                <div class="container-logos d-flex justify-content-between">
                    <img class="mx-2 img-fluid" :src="require('@/assets/img/audible-logo.png')" alt="logo audible">
                    <img class="mx-2 img-fluid"   :src="require('@/assets/img/bn-logo-tall.png')" alt="barnes">
                    <img  class="mx-2 img-fluid"  :src="require('@/assets/img/kindle-logo-tall.png')" alt="kindle">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"AudibleAd",

}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/partials/_mediaQueries.scss';
@import './src/assets/scss/style.scss';

.bg-ad-audible {
    background-image: url('@/assets/img/banner.jpg');
    background-repeat: no-repeat;
    background-position: 50% 67%;
}

.audible-screen {
    height: 300px;
}
.container-article {

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .title-article {
    color: white;
    font-family: 'PT Serif', serif;
    font-size: 2.2rem;
    }

    .subtitle-article {
        color:$saffronOrangeGold;
        text-transform: uppercase;
        font-size: .8rem;
    }
    .paragraph-article {
        color:$lightGray;
        font-family: 'PT Serif', serif;
        font-size: .7rem;
    }

    img {
        width: 50%;
    }

}

</style>