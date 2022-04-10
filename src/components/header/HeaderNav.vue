<template>
    <!-- header's child component? -->
    <div class="row align-items-center justify-content-between px-5">
        <div class="col-4">
            <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo header">
        </div>
        <nav class="col-8">
            <ul class="d-flex justify-content-around">
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
    </div>
</template>

<script>
export default {
name:"HeaderNav"
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

ul{
    list-style: none;
    li {

        border-top:4px solid transparent;
    }

    li:hover {
        border-top: 4px solid $saffronOrangeGold;
        height: 194px;
    }
    a{
        color:white;
        text-decoration: none;
        line-height: 194px;

        &:hover {
            color:$saffronOrangeGold;
        }
    }
}
</style>