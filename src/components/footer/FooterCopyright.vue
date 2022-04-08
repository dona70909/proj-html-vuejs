<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-7 copyright-container text-white text-center">
                <p> <img :src="require('@/assets/img/copyright-icon.png')" alt="copyright logo">Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Wordpress</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"FooterCopyright",
}
</script>

<style lang="scss" scoped>
.copyright-container{
    padding-top: 13rem;

    img{
        width:1.2rem;
        color:white;
    } 
}

</style>