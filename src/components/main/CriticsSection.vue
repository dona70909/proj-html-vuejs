<template>
    <section class="container-fluid">
        <div class="row px-5 py-5">

            <div class="col-6">
                <div class="title-container">
                    <h3 class="title">What Critics Say</h3>
                    <h4 class="subtitle">Testimonial from around the world</h4>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex justify-content-end mb-2">
                    <button >Read All Testimonials</button>
                </div>
            </div>
        </div>

        <div class="row px-5 pb-5 container-articles">
            <div class="col-8">
                <div class="card-container d-flex flex-column justify-content-center align-content-center text-white">
                    <h5>{{mainArticle.title}}</h5>
                    <hr>
                    <h6>{{mainArticle.subtitle}}</h6>
                    <p>{{mainArticle.paragraph}}</p>
                    <p>{{mainArticle.paragrphTwo}}</p>
                    <div class="link-article w-75 text-white">
                        <a class="text-decoration-none text-white" :href="mainArticle.link"><img class="me-3" :src="mainArticle.logo" alt="nytimes">{{mainArticle.author}}<span class="newspaper-name m-2">{{mainArticle.logoName}}</span></a>
                    </div>
                </div>
            </div>
            <div class="col-4">  
                <div class="box-article-container" v-for="(article,index) in  articles" :key=" index + 'article' ">
                    <div class="box">
                        <h4>{{article.title}}</h4>
                        <p>{{article.paragraph}}</p>
                    </div>

                    <div class="link-article w-75 text-white mb-2">
                        <a class="text-decoration-none" :href="article.link">
                            <img class="me-3" :src="article.logo" alt="nytimes">{{article.author}}
                            <span class="newspaper-name">
                                {{article.logoName}}
                            </span>
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

@import './src/assets/scss/style.scss';

.title-container {
    font-family: 'PT Serif', serif;

    .title {
        font-size: 2rem;
        font-weight: 600;
    }

    .subtitle {
        font-size: 1rem;
        text-transform: uppercase;
        color:$greenKeppel;
        font-weight: 500;
    }
}

.card-container {

    background-image: url('@/assets/img/testimonial2-2x.jpg');
    padding: 3rem; 
    border-bottom-right-radius: 40px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    
    .link-article {
        background-color: black;
    }

    h5 {
        font-family: 'PT Serif', serif;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    hr {
        margin-bottom: 2rem;
    }

    h6 {
        font-family: 'PT Serif', serif;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: 'PT Serif', serif;
        margin-bottom: 2rem;
    }

    .link-article {
        
        font-weight: 600;

        .newspaper-name {
            color: $greenKeppel;
        }
    }
    
}
/* Right boxes and button */

button {
    border: none;
    color: white;
    background-color: $saffronOrangeGold;
    padding: .3rem 1.5rem;
    border-radius: 5px;
}

.box {
    width: 100%;
    padding:.5rem 1rem;
    background-color: #fef7e9;
    margin-bottom: 1rem;

    h4 {
        font-family: 'PT Serif', serif;
    }

    p {
        font-family: 'PT Serif', serif;
    }

}

a {
    color: $osloGray;

    span {
        color:$black;
    }

    &:hover{
        pointer-events: none;
    }
}

</style>