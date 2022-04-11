<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 copyright-container text-white text-center">
                <p class="mb-0 pb-5">
                    <font-awesome-icon class="me-2" icon="fa-solid fa-copyright" />
                    Copyright 2012-2020 | Avada Theme by <span class="text-white">ThemeFusion</span> | All Rights Reserved | Powered by <span class="text-white">Wordpress</span>
                </p>
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
    padding-top: 13rem;

    p {
        color:$osloGray;
        font-size: .7rem;
    }
}

</style>