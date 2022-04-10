<template>
    <section class="container-fluid bg-ad-audible">
        <div class="row px-5 pt-4 justify-content-center">
            <div class="col-6 d-flex justify-content-end">
                <div class="w-50 float-end d-flex justify-content-end">
                    <img class="audible-screen" :src="require('@/assets/img/audible-app-2x-400x418.png')" alt="">
                </div>
            </div>
            <div class="col-6 d-flex flex-column align-items-center container-article align-self-center">
                <h5 class="title-article">New Audiobook</h5>
                <h6 class="subtitle-article">No time to read? No problem. Listen to it.</h6>
                <p class="paragraph-article text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo, praesentium eaque sint in consequatur!</p>
                <div class="logos-container d-flex justify-content-between">
                    <img class="img-fluid" :src="require('@/assets/img/audible-logo.png')" alt="logo audible">
                    <img class="img-fluid" :src="require('@/assets/img/bn-logo-tall.png')" alt="barnes">
                    <img class="img-fluid" :src="require('@/assets/img/kindle-logo-tall.png')" alt="kindle">
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

@import './src/assets/scss/style.scss';

.bg-ad-audible {
    background-image: url('@/assets/img/banner.jpg');
    background-repeat: no-repeat;
    background-position: 50% 30%;
}

.audible-screen {
    height: 300px;
}
.container-article {

    .title-article {
    color: white;
    font-family: 'PT Serif', serif;
    font-size: 2.2rem;
    }

    .subtitle-article {
        color:$saffronOrangeGold;
        text-transform: uppercase;
    }
    .paragraph-article {
        color:$lightGray;
        font-family: 'PT Serif', serif;
    }

    .container-logos {
        width: 100%;
        img {
            width: calc(100% / 3);
        }
    }
}

</style>