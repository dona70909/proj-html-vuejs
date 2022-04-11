<template>
    <section class="container-fluid">
        <div class="row px-5 justify-content-center text-center align-content-center info-container">
            <div class="col-lg-8 col-12 d-flex flex-column align-content-center">
                <h2 class="author-name">More About Damon Vaughn</h2>
                <p class="text-center text-article">Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-milion copy bestseller "The story of my life</p>
                <div class="d-flex justify-content-center">
                    <button class="green-btns">Meet The Author</button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center logo-container px-5 py-4">
            <div class="col-lg-10 col-12 d-flex justify-content-around logo-wrap-col">
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
@import './src/assets/scss/style.scss';

.info-container {
    height: 300px;

    .author-name {
        color:$saffronOrangeGold;
        font-family: 'Caveat', cursive;
        font-size: 4rem;
    }

    .text-article {
        font-family: 'PT Serif', serif;
    }

    button {
        //border:none;
        //color: white;
        //background-color: $greenDark;
         //border-radius: 7px;
        padding: .5rem 1.7rem;
        
        font-family: 'PT Serif', serif;
        font-weight: 600;
        font-size: .8rem;
    }
}

.logo-container {
    background-color:#fef7e9;

    .logo-wrap-col {
        img {
            width:calc(100% / 4);
        }
    }
}
</style>