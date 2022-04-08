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
                    <address class="author">-<a rel="author" :href="article.sourceLink">{{article.source}}</a></address>
                </div>
            </div>

            <!-- buttons -->
            <div class="scroll-btn-container d-flex">
                <div @click="leftArticle()" class="scroll-btn arrow-left m-2 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-left-short fs-2 text-white"></i>
                </div>
                <div @click="rightArticle()" class="scroll-btn arrow-right m-2 d-flex align-items-center justify-content-center">
                    <i class="bi bi-arrow-right-short fs-2 text-white "></i>
                </div>
                
            </div>

            
        </div>
        <!-- //# container right kindle latest book and icons -->
        <div class="col-6 col-md-4 latest-book-container px-0">
            <!-- //% 2 sqaures -->
            <div class="d-flex flex-column mb-4 text-white px-2">
                <div class="square demos-square align-self-end">
                    <img src="" alt="img">
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
                        <h6>D.Vaughn Autobiography</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos voluptatum eveniet soluta labore mollitia repudiandae recusandae itaque!</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    
                    <button class="px-3"> <a href="#/"><img class="btn-logo" :src="require('@/assets/img/amazon-logo-small.png')" alt="amazon-logo">Buy on amazon</a>  </button>
                    <button class="px-3"><a href="#/"> <img class="btn-logo" :src="require('@/assets/img/apple-logo.png')" alt=""> Buy on app store</a></button>
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
                    active:true,
                    id:0,
                },
                {
                    paragraph:"Best-selling Author and the most influential public intellectualin the western world right now.",
                    source:"The Globe and Mail",
                    sourceLink:"#/",
                    active:false,
                    id:1,
                },
                {
                    paragraph:"Best-selling Author and the most influential public intellectualin the western world right now.",
                    source:"The Independent",
                    sourceLink:"#/",
                    active:false,
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

/* //#  ARTICLE LEFT NEW YORK TIMES */
.article-card-container{
    padding-left:5rem;
    height: 100%; 
    .article-card{
        height: 100%;
        h3{
            color:darkgoldenrod;
            font-size: 3.8rem;
            font-family:'italic';
        }
        
        a{
            color:white;
            text-decoration: none;
        }

        p{
            font-size: 2.5rem;
            color:white;
        }

        .author{
            color:white;
            font-family: 'italic';
            a{
                color:white;
            }
        }

        .scroll-btn{
            width: 2.5rem;
            height: 2.5rem;
            background-color: red;
            cursor: pointer;

            i{
                cursor: pointer;
            }
        }

    }
}

/* //#  ARTICLE Right kindle */
.latest-book-container{
    height: 100%;


    .latest-book-card{
    background-color: white;
    color:black;
    padding: 2rem 0rem;
    //height: 80%; 
        .img-kindle-book{
            height: 100%;
            width: 50%;
        }

        .kindle-text{
            width: 50%;
            p{
                font-size: .8rem;
            }
        }
    }
}


.btn-logo{
    height: 1rem;
    margin-right: .2rem;
}

a{
    text-decoration: none;
    color: black;
}

/* //# smal squares  */
.square{
    width:2.5rem;
    height: 2.5rem;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:1.5rem 0rem;
    background-color: white;
    margin-bottom:1rem;

    p{
        font-size: .6rem;
        font-weight: 600;
        margin: 0;
    }

    img{
        font-size: .6rem;
        font-weight: 600;
    }
    .price-tag{
        color: green;
        font-size: 1rem;
    }
}
</style>