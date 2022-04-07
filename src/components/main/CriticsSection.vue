<template>
    <section class="container-fluid">
        <div class="row px-5 pt-5">
            <div class="col-7 px-5">
                <div class="title-container">
                    <h3>What Critics Say</h3>
                    <h4>Testimonial from around the world</h4>
                </div>
                <div class="card-container d-flex flex-column justify-content-center align-content-center text-white">
                    <h5>Best Author of his Generation</h5>
                    <hr>
                    <h5>This book will change your perspective on life</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta non iure, nemo facere labore impedit. Porro, a? Error quis perspiciatis quod recusandae voluptas quae, provident magni iure ipsa consequatur magnam?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta non iure, nemo facere labore impedit. Porro, a? Error quis perspiciatis quod recusandae voluptas quae, provident magni iure ipsa consequatur magnam?</p>
                    <div class="link-article">
                        <a href="#"><img :src="require('@/assets/img/nytimes-logo-white-xsmall.png')" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="d-flex justify-content-end mb-2">
                    <button >Read All Testimonials</button>
                </div>
                
                <div class="box">

                </div>
                <div class="box">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"CriticsSection",
}
</script>

<style lang="scss">
.card-container{
    background-image: url('@/assets/img/event-04-400x240.jpg');
    background-repeat:no-repeat;
    background-size: cover; 
    padding: 3rem; 
    border-bottom-right-radius: 20px;

    .link-article{
        background-color: black;
    }
}

.box{
    height: 300px;
    background-color: #fef7e9;
    margin-bottom: 2rem;
}

</style>