<template>
    <section class="container-fluid bg-ad-audible">
        <div class="row px-5">
            <div class="col-6"></div>
            <div class="col-6"></div>
        </div>
    </section>
</template>

<script>
export default {
    name:"AudibleAd",

}
</script>

<style lang="scss" scoped>
.bg-ad-audible{
    background-image: url('@/assets/img/banner.jpg');
    height:300px;
    background-repeat: no-repeat;
    background-position: 50% 30%;
   /*  background: black; */
}
</style>