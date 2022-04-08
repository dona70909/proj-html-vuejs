<template>
    <section class="container-fluid">
        <div class="row px-5 py-5">
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
                    <div class="link-article w-75 text-white">
                        <a class="text-decoration-none text-white" href="#"><img class="me-2" :src="require('@/assets/img/nytimes-logo-white-xsmall.png')" alt="nytimes">Justine Killpatrick, <em class="text-danger">The New York Times</em></a>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="d-flex justify-content-end mb-2">
                    <button >Read All Testimonials</button>
                </div>
                
                <div class="box-article-container" v-for="(article,index) in  articles" :key=" index + 'article' ">
                    <div class="box">
                        <h4>{{article.title}}</h4>
                        <p>{{article.paragraph}}</p>
                    </div>

                    <div class="link-article w-75 text-white mb-2">
                        <a class="text-decoration-none text-dark" :href="article.link">
                            <img class="me-3" :src="article.logo" alt="nytimes">{{article.author}}<em class="text-danger">{{article.logoName}}</em>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"CriticsSection",

    data(){
        return{
            articles:[
                {
                    title:'A true Masterpiece, Bravo!',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores nostrum labore nemo sint dolorem tenetur quidem culpa, ducimus id, voluptas voluptatum praesentium adipisci tempora iure molestias veniam quasi. Quo!',
                    logo:require('@/assets/img/theguardian-xsmall.png'),
                    author:'Gerald Handley',
                    logoName:'The Guardian',
                    link:'#/'
                },
                {
                    title:'A Unique View on the world!',
                    paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores nostrum labore nemo sint dolorem tenetur quidem culpa, ducimus id, voluptas voluptatum praesentium adipisci tempora iure molestias veniam quasi. Quo!',
                    logo:require('@/assets/img/theguardian-xsmall.png'),
                    author:'Gerald Handley',
                    logoName:'The Guardian',
                    link:'#/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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
    width: 70%;
    padding:.5rem 1rem;
    background-color: #fef7e9;
    margin-bottom: 1rem;
}

</style>