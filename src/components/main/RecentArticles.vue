<template>
    <section class="container-fluid bg-color">
        <div class="row px-5 py-5 justify-content-between px-5">
            <div class="col-6 px-5">
                <h2 class="text-capitalize">Recent articles</h2>
                <h6 class="text-uppercase">Read the latest entries</h6>
            </div>
            <div class="col-6 px-5 d-flex justify-content-end align-items-center">
                <button class="px-3">All Articles</button>
            </div>
        </div>
        <div class="row px-5 wrapper-articles  justify-content-center">
            <div class="col-6">
                <div class="big-box">
                    <img :src="mainArticle.img" :alt="mainArticle.title">
                    <div class="text-big-box">
                        <h5>{{mainArticle.title}}</h5>
                        <h6 class="mb-4">{{mainArticle.subtitle}}</h6>
                        <p>{{mainArticle.paragraph}}</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div v-for="(article,index) in recentArticles" :key="index + 'recent' " class="pt-5 small-box d-flex flex-column justify-content-center">
                    <h4 class="pb-2">{{article.title}}</h4>
                    <img :src="article.img" alt="">
                    <p class="pb-5 m-0">{{article.paragraph}}</p>
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
                    img:require('@/assets/img/thumb-13-2x-320x202.jpg'),
                    paragraph:"October 24th, 2019 | 0 Comments"
                },
                {
                    title:"Istanbul travel guide",
                    img:require('@/assets/img/thumb-08-2x-320x202.jpg'),
                    paragraph:"October 24th, 2019 | 0 Comments"
                }
            ],

            mainArticle:{
                title:"C20 Creativity Tips",
                subtitle:"By admin| October 24th 2019| Categories: Event,Tips and Tricks",
                img:require('@/assets/img/20-Tips-400x235.jpg'),
                paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia non sit error! Praesentium, magnam. Velit quod esse, similique laboriosam."
            }
        }
    }
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
.wrapper-articles {
    padding-bottom: 6rem;

    .big-box {
        background-color:white;
        padding: 2rem;
        height: 100%;

        img {
            width:100%;
            margin-bottom: 2rem;
        }
    }

    .small-box {
        background-color:white;
        padding-left:2rem;
        padding-right: 2rem;
        height: 50%;
        
        img {
            width:100%;
            margin-bottom: 2rem;
        }

    }
}
/*reset margin p(s) */
p{
    margin: 0;
}


</style>