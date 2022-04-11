<template>
    <!-- header's child component? -->
    <div class="row align-items-center justify-content-between">
        <div class="col-4 d-none d-lg-block px-5">
            <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo header">
        </div>
        
        <div class="col-6  bg-black d-block d-lg-none bg-black px-5">
            <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo header">
        </div>
        <nav class="col-8 d-none d-lg-block px-5">
            <ul class="d-flex justify-content-around list-inline ">
                <li>
                    <a href="#/">About me</a>
                </li>
                <li>
                    <a href="#/">Testimonials</a>
                </li>
                <li>
                    <a href="#/">My Dig</a>
                </li>
                <li>
                    <a href="#/">Meetups</a>
                </li>
                <li>
                    <a href="#/">Shop</a>
                </li>
                <li>
                    <a href="#/">Contact me</a>
                </li>
                <li>
                    <a href="#/"><i class="bi bi-cart3"></i></a>
                </li>
            </ul>
        </nav>
        <div class="col-6  d-block d-lg-none pe-5 bg-black ">
            <i @click="isClicked()" class="bi bi-list  d-flex align-items-center  justify-content-end fs-1 text-white container-hamburgher"></i>
        </div>
        <div class="col-12 px-0 d-block d-lg-none" :class="{'d-block' :clicked, 'd-none':!clicked}" >
            <ul class="d-flex flex-column justify-content-around list-column">
                <li>
                    <a href="#/">About me</a>
                </li>
                <li>
                    <a href="#/">Testimonials</a>
                </li>
                <li>
                    <a href="#/">My Dig</a>
                </li>
                <li>
                    <a href="#/">Meetups</a>
                </li>
                <li>
                    <a href="#/">Shop</a>
                </li>
                <li>
                    <a href="#/">Contact me</a>
                </li>
                <li>
                    <a href="#/"><i class="bi bi-cart3"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderNav",

    data() {
        return {
            clicked:null,
        }
    },

    methods: {
        isClicked(){
            console.log("yes");
            this.clicked = !this.clicked;
            console.log(this.clicked);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

.list-inline{
    li {
        border-top:4px solid transparent;
    }

    li:hover {
        border-top: 4px solid $saffronOrangeGold;
        height: 194px;
    }
    a{
        color:white;
        font-weight: 600;
        line-height: 194px;

        &:hover {
            color:$saffronOrangeGold;
        }
    }
}

.bi-list {
    cursor: pointer;
}

.list-column {
    background-color:white;
    //padding: 20px 10px;
    //padding: 3rem 0;
    li {
        padding: 5px;
    }

    li:hover {
        background-color:$saffronOrangeGold;
    }
    a{
        color:black;
        padding: 5px;
        text-transform: uppercase;
        padding: 0 5rem;
        font-weight: 600;
        &:hover {
            color:$saffronOrangeGold;
            color:black;
        }
    }
}

.container-hamburgher {
    height:194px;

}
</style>