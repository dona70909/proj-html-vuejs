<template>
    <section class="container-fluid">
        <div class="row px-5 justify-content-center text-center align-content-center info-container">
            <div class="col-12 d-flex flex-column align-content-center">
                <h2>More About Damon Vaughn</h2>
                <p class="text-center">Damon Vaughn is a professore of psychology at the University of Toronto, a clinical psychologist and the author of the multi-milion copy bestseller "The story of my life</p>
                <div class="d-flex justify-content-center">
                    <button class="px-3">Meet The Author</button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center logo-container px-5 py-4">
            <div class="col-10 d-flex justify-content-around logo-wrap-col">
                <img class="logo-img mx-2" :src="require('@/assets/img/ebay-logotan-2x-200x66.png')" alt="logo-audible">
                <img class="logo-img  mx-2" :src="require('@/assets/img/audible-logotan-2x-200x66.png')" alt="">
                <img class="logo-img  mx-2" :src="require('@/assets/img/bb-logotan-2x-200x66.png')" alt="">
                <img class="logo-img  mx-2" :src="require('@/assets/img/kindlefire-logotan-2x-200x66.png')" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"MoreInfo"
}
</script>

<style lang="scss" scoped>
.info-container{
    height: 300px;
}
.logo-container{
    background-color:#fef7e9;
    .logo-wrap-col{
        /* padding: 0 8rem; */
        img{
            width:calc(100% / 4);
        }
    }
}
</style>