<template>
    <section class="container-fluid bg-color">
        <div class="row justify-content-between px-5">
            <div class="col-6">
                <h2 class="text-capitalize">Recent articles</h2>
                <h6 class="text-uppercase">Read the latest entries</h6>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <button class="px-3">All Articles</button>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="big-box">
                    <img :src="require('@/assets/img/20-Tips-400x235.jpg')" alt="">
                    <div class="text-big-box">
                        <h5>C20 Creativity Tips</h5>
                        <h6 class="mb-4">By admin| October 24th 2019| Categories: Event,Tips and Tricks</h6>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia non sit error! Praesentium, magnam. Velit quod esse, similique laboriosam.</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="pt-5 small-box d-flex flex-column justify-content-center">
                    <img :src="require('@/assets/img/thumb-13-2x-320x202.jpg')" alt="">
                    <p>October 24th, 2019 | 0 Comments</p>
                </div>
                <div class="small-box d-flex flex-column justify-content-center pb-5">
                    <img :src="require('@/assets/img/thumb-08-2x-320x202.jpg')" alt="">
                    <p>October 24th, 2019 | 0 Comments</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"RecentArticles"
}
</script>

<style lang="scss" scoped>

.bg-color{
    background-color: #fef7e9;
}

button{
    background-color: #f4b429;
    color: white;
    border:none;
}
.big-box{
    background-color:white;
    padding: 2rem;
    img{
        width:100%;
        margin-bottom: 2rem;
    }
}

.small-box{
    background-color:white;
    padding-left:2rem;
    padding-right: 2rem;
    img{
        width:100%;
        margin-bottom: 2rem;
    }

}
/* reset margin p(s) */
p{
    margin: 0;
}


</style>