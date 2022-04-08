<template>
    <section class="container-fluid bg-img">
        <div class="row container-row-padding justify-content-center align-items-center container-article">
            <div class="col-4 text-center">
                <h2 class="text-white title-article">Subscribe to My Newsletter</h2>
                <h6 class="text-uppercase text-warning">Be Notified about book signing tour dates</h6>
                <input class="email-input me-3 mb-2" type="text" placeholder="email">
                <button>Subscribe now</button>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea sit ullam neque praesentium.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"SubscribeNews",
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

.bg-img {
    background-image: url('@/assets/img/banner-2.jpg');
    /*  height: 300px; */

    .container-row-padding {
        padding: 6rem 0;
    }
}

.container-article {

    .title-article {
        color:white;
        font-family: 'PT Serif', serif;
    }
}
</style>