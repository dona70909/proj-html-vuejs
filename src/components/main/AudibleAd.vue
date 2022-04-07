<template>
    <section class="container-fluid bg-ad-audible">
        <div class="row px-5 justify-content-center">
            <div class="col-6 py-4">
                <div class="w-50">
                    <img :src="require('@/assets/img/audible-app-2x-400x418.png')" alt="">
                </div>
            </div>
            <div class="col-6 text-warning py-4">
                <h5>New Audiobook</h5>
                <h6>No time to read? No problem. Listen to it.</h6>
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
.bg-ad-audible{
    background-image: url('@/assets/img/banner.jpg');
    
    background-repeat: no-repeat;
    background-position: 50% 30%;
}

img{
    height: 300px;
}
</style>