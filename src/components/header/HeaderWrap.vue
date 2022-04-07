<template>
    <header>
        <section class="container-fluid">
            <div class="row align-items-center justify-content-between px-5">
                <div class="col-6">
                    <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo header">
                </div>
                <nav class="col-6">
                    <ul class="d-flex justify-content-evenly">
                        <li><a href="#/">About me</a></li>
                        <li><a href="#/">Testimonials</a></li>
                        <li><a href="#/">My Dig</a></li>
                        <li><a href="#/">Meetups</a></li>
                        <li><a href="#/">Shop</a></li>
                        <li><a href="#/">Contact me</a></li>
                        <li>icon</li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
</template>

<script>
export default {
name:"HeaderWrap"
}
</script>

<style lang="scss" scoped>
header{
    background: black;
    color:white;

    ul{
        list-style: none;

        a{
            color:lightgrey;
            text-decoration: none;
        }
    }
}
</style>