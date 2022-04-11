<template>
    <!-- header's child component? -->
    <div class="row article-card-container">
        <!-- //# container left article -->
        <div class="col-8 article-card py-5">
            <h3 class="author-name">Damon Vaugh</h3>
            <TransitionGroup  name="slide-fade" tag="div" class="d-flex">
                <div v-show="article.id == counter"  class="article" v-for="(article) in mainArticles" :key="article.id">
                    <div class="main-article">
                        <p>
                            {{article.paragraph}}
                        </p>
                        <address class="author"><a rel="author" :href="article.sourceLink">{{" - " + article.source}}</a></address>
                    </div>
                </div>
            </TransitionGroup>
            <!-- //& buttons -->
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
        <div class="col-4 latest-book-container px-0 align-self-end">
            <!-- //% 2 sqaures -->
            <div class="d-flex flex-column mb-4 text-white px-2">
                <div class="square demos-square align-self-end py-1">
                    <i class="bi bi-book-fill"></i>
                    <p>Demos</p>
                </div>
                <div class="square on-sale-square align-self-end py-1">
                    <!-- <img src="" alt="img"> -->
                    <div class="d-flex justify-content-center">
                        <i class="bi bi-currency-dollar align-self-start"></i>
                        <p class="price-tag">39</p>
                    </div>
                    <p>On Sale</p>
                </div>
            </div>
            <!-- //% latest book container -->
            <div class="latest-book-card px-5 py-4">
                <div class="d-flex pt-3">
                    <div class="img-kindle-container">
                        <img class="img-fluid img-kindle-book" :src="require('@/assets/img/book-widget.png')" alt="book">
                    </div>
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
                        Buy on AppStore
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
                    paragraph:"Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget.",
                    source:"The Globe and Mail",
                    sourceLink:"#/",
                    id:1,
                },
                {
                    paragraph:"Donec sollicitudin molestie malesuada. Curabitur arcu erat.",
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
                console.log(this.counter);
                this.counter = this.mainArticles.length - 1;
                console.log(this.counter);
            } else {
                this.counter--;
            }
        },


        rightArticle(){
            if(this.counter == this.mainArticles.length - 1){
                this.counter = 0;
            } else{
                this.counter++;
            }
        },

        timeOutLeft() {
            setTimeout(this.leftArticle,2000);
        },


        timeOutRight() {
            setTimeout(this.rightArticle,2000);
        }

    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

/* //#  ARTICLE LEFT NEW YORK TIMES */
.article-card-container {
    padding-left:5rem;
    height: 100%; 
    .article-card {
        height: 100%;
        .arrow-left {
            transition: 7s ease-in-out;
        }

        .arrow-right {
            transition: 7s ease-in-out ;
        }

        h3.author-name {
            color:$saffronOrangeGold;
            font-size: 5rem;
            font-family: 'Caveat', cursive;
        }
        
        a {
            color:#ffffff;
        }

        p {
            font-size: 2.5rem;
            color:#ffffff;
            font-family: 'PT Serif', serif;
            height: 240px;
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

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}




/* //#  ARTICLE Right kindle */
.latest-book-container {
    height: 100%;
    font-family: 'EB Garamond', serif;

    /* //% small squares on sale and Demos  */
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
        }
        .price-tag {
            color: $greenPrice;
            font-size: 1.2rem;
            font-weight: 700;
        }

        .bi-currency-dollar {
            color: $greenPrice;
            font-size: .7rem;
        }
    }

    /* //% article + kindle image */
    .latest-book-card {
    background-color: white;
    color:black;
    
        .img-kindle-book {
            object-fit: contain;
            height: 100%;
        }

        .kindle-text {
            width: 100%;
            height: 100%;
            p {
                font-size: .8rem;
            }

            .author-latest {
                color:$saffronOrangeGold;
                text-transform: uppercase;
                font-size: .7rem;
            }
        }
    }

    //% buttons amazon and apple buy
    button {
        /* border: none; */
        padding: .5rem 0;
        width:100%;
        background-color:white;
        border:1px solid $lightBlue;
        
        &:hover{
            background: $skyBlue;
        }

        a:hover{
            color:black;
        }

        a {
            font-size: .8rem;
            font-weight: 600;
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

    .btn-logo {
        height: 1rem;
        margin-right: .2rem;
    }

    a {
        text-decoration: none;
        color: black;
        padding: 0 .2rem;

    }
}







</style>