<template>
    <!-- header's child component? -->
    <div class="row justify-content-center article-card-container">
        <!-- //# container left article -->
        <div class="col-6 col-md-8 article-card">
            <h3>Damon Vaugh</h3>
            <div v-show="article.id == counter" class="article" v-for="(article) in mainArticles" :key="article.id">
                <div class="main-article">
                    <p>
                        {{article.paragraph}}
                    </p>
                    <address class="author"><a rel="author" :href="article.sourceLink">{{" - " + article.source}}</a></address>
                </div>
            </div>

            <!-- buttons -->
            <div class="scroll-btn-container d-flex">
                <div @click="leftArticle()" class="scroll-btn arrow-left me-1 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-left-short fs-2 text-white"></i>
                </div>
                <div @click="rightArticle()" class="scroll-btn arrow-right d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-right-short fs-2 text-white "></i>
                </div>
                
            </div>

            
        </div>
        <!-- //# container right kindle latest book and icons -->
        <div class="col-6 col-md-4 latest-book-container px-0">
            <!-- //% 2 sqaures -->
            <div class="d-flex flex-column mb-4 text-white px-2">
                <div class="square demos-square align-self-end">
                    <i class="bi bi-book-fill"></i>
                    <p>Demos</p>
                </div>
                <div class="square on-sale-square align-self-end">
                    <!-- <img src="" alt="img"> -->
                    <p class="price-tag">39</p>
                    <p>On Sale</p>
                </div>
            </div>
            <!-- //% latest book container -->
            <div class="latest-book-card px-3">
                <div class="d-flex justify-content-around">
                    <img class="img-fluid img-kindle-book" :src="require('@/assets/img/book-widget.png')" alt="book">
                    <div class="kindle-text">
                        <h5>Latest Book Relese</h5>
                        <h6 class="author-latest">D.Vaughn Autobiography</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos voluptatum eveniet soluta labore mollitia repudiandae recusandae itaque!</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    
                    <button class="btn-amazon"> 
                    <a href="#/">
                        <img class="btn-logo" :src="require('@/assets/img/amazon-logo-small.png')" alt="amazon-logo">
                        Buy on amazon
                    </a> 
                    </button>
                    <button class="btn-apple">
                        <a href="#/">
                        <img class="btn-logo" :src="require('@/assets/img/apple-logo.png')" alt=""> 
                        Buy on app store
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderJumbo",

    data(){
        return{
            mainArticles:[
                {
                    paragraph:"Best-selling Author and the most influential public intellectualin the western world right now.",
                    source:"The New York Times",
                    sourceLink:"#/",
                    id:0,
                },
                {
                    paragraph:"Best-selling Author and the most influential public intellectualin the western world right now.",
                    source:"The Globe and Mail",
                    sourceLink:"#/",
                    id:1,
                },
                {
                    paragraph:"Best-selling Author and the most influential public intellectualin the western world right now.",
                    source:"The Independent",
                    sourceLink:"#/",
                    id:2,
                }
            ],

            counter:0,
        }
    },

    methods:{
        leftArticle(){
            if(this.counter == 0){
                this.counter == this.mainArticles.length - 1;
            } else{
                this.counter--;
            }
        },


        rightArticle(){
            if(this.counter == this.mainArticles.length - 1){
                this.counter == 0;
            } else{
                this.counter++;
            }
        }

    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300;1,400&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import './src/assets/scss/partials/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');

/* //#  ARTICLE LEFT NEW YORK TIMES */
.article-card-container {
    padding-left:5rem;
    height: 100%; 
    .article-card {
        height: 100%;
        h3 {
            color:$saffronOrangeGold;
            font-size: 5rem;
            font-family: 'Caveat', cursive;
        }
        
        a {
            color:#ffffff;
            text-decoration: none;
        }

        p {
            font-size: 2.5rem;
            color:#ffffff;
            font-family: 'PT Serif', serif;
        }

        .author {
            color:$osloGray;
            font-size: 1.5rem;
            font-family: 'Open Sans',sans-serif;
            font-weight: 400;
        }

        .scroll-btn {
            width: 2.5rem;
            height: 2.5rem;
            background-color:$black;
            cursor: pointer;

            i {
                cursor: pointer;
            }
        }

    }
}

/* //#  ARTICLE Right kindle */
.latest-book-container {
    height: 100%;
    font-family: 'EB Garamond', serif;

    .latest-book-card {
    background-color: white;
    color:black;
    padding: 2rem 0rem;
    //height: 80%; 
    
        .img-kindle-book {
            height: 100%;
            width: 50%;
        }

        .kindle-text {
            width: 50%;
            //font-family: 'EB Garamond', serif;
            
            p {
                font-size: 1rem;
            }

            .author-latest {
                color:$saffronOrangeGold;
                text-transform: uppercase;
                font-size: .8rem;
            }
        }
    }

    button {
        /* border: none; */
        padding: .6rem 1.9rem;
        background-color:white;
        border:1px solid $lightBlue;
        
        &:hover{
            background: $skyBlue;
        }

        a:hover{
            color:black
        }
    }

    .btn-amazon {
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .btn-apple {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}


.btn-logo {
    height: 1rem;
    margin-right: .2rem;
}

a {
    text-decoration: none;
    color: black;

}

/* //# small squares on sale and Demos  */
.square {
    width:3rem;
    height: 3rem;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:1.5rem 0rem;
    background-color: white;
    margin-bottom:1rem;

    p {
        font-size: .8rem;
        font-weight: 600;
        margin: 0;
    }

    img {
        font-size: .6rem;
        font-weight: 600;
    }
    .price-tag {
        color: $greenPrice;
        font-size: 1.2rem;
    }
}
</style>