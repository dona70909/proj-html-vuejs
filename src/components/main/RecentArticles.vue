<template>
    <section class="container-fluid container-section">
        <div class="row px-5 py-5 justify-content-between px-5">
            <div class="col-12 justify-content-between d-flex align-items-center title-section">
                <div class="text-left">
                    <h2 class="text-capitalize">Recent articles</h2>
                    <h6 class="text-uppercase">Read the latest entries</h6>
                </div>
                <button class="btn-all-artcles orange-btns"><a href="#/">All articles</a></button>
            </div>
        </div>
        <div class="row px-5 wrapper-articles  justify-content-center">
            <div class="col-lg-8 col-12 mb-lg-0 mb-4">
                <div class="big-box">
                    <img :src="mainArticle.img" :alt="mainArticle.title">
                    <div class="text-big-box">
                        <h5>{{mainArticle.title}}</h5>
                        <!-- <h6 class="mb-4">{{mainArticle.subtitle}}</h6> -->
                        <div class="mb-3">
                            <span class="gray-text">By </span><span>{{mainArticle.author}}</span>
                            <span class="gray-text">{{' | ' + mainArticle.date + ' | '}}</span>
                            <span class="gray-text">Categories: </span><span>{{mainArticle.categories + ' | '}}</span>
                        </div>
                        <p class="gray-text">{{mainArticle.paragraph}}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12">
                <div v-for="(article,index) in recentArticles" :key="index + 'recent' " class="small-box d-flex flex-column justify-content-center">
                    <h4 class="">{{article.title}}</h4>
                    <img :src="article.img" :alt="article.title">
                    <div class="mb-0">
                        <span class="gray-text">{{article.date + ' |'}} </span>
                        <span>{{article.comments + ' |'}}</span>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"RecentArticles",

    data(){
        return{
            recentArticles:[
                {
                    title:"What's on your booklist",
                    comments:"0 comments",
                    author:"admin",
                    date:"October 24th 2019",
                    img:require('@/assets/img/thumb-13-2x-320x202.jpg'),
                    paragraph:"October 24th, 2019 | 0 Comments"
                },
                {
                    title:"Istanbul travel guide",
                    comments:"0 comments",
                    author:"admin",
                    date:"October 24th 2019",
                    img:require('@/assets/img/thumb-08-2x-320x202.jpg'),
                    paragraph:"October 24th, 2019 | 0 Comments"
                }
            ],

            mainArticle:{
                title:"C20 Creativity Tips",
                categories:"Event,Tips & Tricks",
                author:"admin",
                date:"October 24th 2019",
                img:require('@/assets/img/20-Tips-400x235.jpg'),
                paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia non sit error! Praesentium, magnam. Velit quod esse, similique laboriosam."
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

/* //% bg colour section */
.container-section {
    background-color: #fef7e9;
    font-family: 'PT Serif', serif;
}
/*reset margin p(s) */
p {
    margin: 0;
}

// % top titles section
.title-section {

    h2 {
        font-weight: 600;
    }

    h6 {
        color:$greenKeppel;
        font-weight: 600;
    }

    button {
        padding: .5rem 3.6rem;  
        display: flex;
        align-content: center;
        justify-content: center;
        
        a {
            font-size: .7rem;
            font-weight: 600;

            &:hover {
                pointer-events: none;
                color: white;
            }
        }
    }

}

/* //% articles big one to the left and small ones to the right  */
.wrapper-articles {
    padding-bottom: 6rem;

    .gray-text {
        color:$osloGray;
    }

    .big-box {
        background-color:white;
        padding: 2rem;
        height: 100%;

        img {
            width:100%;
            margin-bottom: 2rem;
        }

        span {
            font-size:.9rem;
        }
    }

    .small-box {
        background-color:white;
        height: 50%;
        padding:1.3rem 2rem;
        img {
            width:100%;
            margin-bottom: 1rem;
        }

        p {
            padding-bottom: 1rem;
        }

        span {
            font-size:.9rem;
        }

    }
}



</style>