<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 pt-5 copyright-container text-white text-center">
                <p class="mb-0 pb-5 pb-2">
                    <font-awesome-icon class="me-2" icon="fa-solid fa-copyright" />
                    Copyright 2012-2020 | Avada Theme by <span class="text-white m-1"> ThemeFusion </span> | All Rights Reserved | Powered by <span class="text-white m-1">Wordpress</span>
                </p>
            </div>

            <div class="col-12 px-5 d-flex justify-content-end">
                <div class="rectangle d-flex align-items-center justify-content-center">
                    <i class="bi bi-chevron-up text-white"></i>
                </div>
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
@import './src/assets/scss/style.scss';

.copyright-container{
    p {
        color:$osloGray;
        font-size: .7rem;
    }
}

.rectangle {
    width: 2rem;
    height: 1.7rem;
    background-color:rgb(47, 47, 47);

    i {
        font-size: .7rem;
    }
}

</style>