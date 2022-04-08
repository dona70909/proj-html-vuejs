<template>
    <section class="container-fluid">
        <div class="row px-5 py-5">
            <div class="col-7 px-5">
                <div class="title-container">
                    <h3>What Critics Say</h3>
                    <h4>Testimonial from around the world</h4>
                </div>
                <div class="card-container d-flex flex-column justify-content-center align-content-center text-white">
                    <h5>{{mainArticle.title}}</h5>
                    <hr>
                    <h5>{{mainArticle.subtitle}}</h5>
                    <p>{{mainArticle.paragraph}}</p>
                    <p>{{mainArticle.paragrphTwo}}</p>
                    <div class="link-article w-75 text-white">
                        <a class="text-decoration-none text-white" :href="mainArticle.link"><img class="me-3" :src="mainArticle.logo" alt="nytimes">{{mainArticle.author}}<em class="text-danger m-2">{{mainArticle.logoName}}</em></a>
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
                    logo:require('@/assets/img/globe-xsmall.png'),
                    author:'Gerald Handley',
                    logoName:'The Globe and Mail',
                    link:'#/'
                }
            ],

            mainArticle:{
                title:"Best Author of his Generation",
                subtitle:"This book will change your perspective on life",
                paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et explicabo tenetur reprehenderit maiores aspernatur mollitia esse commodi asperiores rem laboriosam non illo cumque ea, nisi earum doloremque sunt dolores. Voluptatum.",
                paragrphTwo:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et explicabo tenetur reprehenderit maiores aspernatur mollitia esse commodi asperiores rem laboriosam non illo cumque ea, nisi earum doloremque sunt dolores. Voluptatum.",
                logo:require('@/assets/img/nytimes-logo-white-xsmall.png'),
                author:"Justine Killpatrick",
                logoName:"The New York Times",
                link:"#/"
            }
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