<template>
    <section class="container-fluid bg-color container-upcoming">
        <div class="row container-cards p-lg-5 p-3 justify-content-center">
            <div class="col-12">
                <div class="title text-center mb-4">
                    <h2 class="title">Upcoming Events</h2>
                    <h3 class="subtitle">Meet the authors in person</h3>
                </div>
            </div>
            <div class="col-lg-4 col-9 mb-4 mb-lg-0 px-lg-4 px-0" v-for="(article,index) in upcomings" :key="index + 'upcoming' ">
                <div class="card">
                    <img class="card-img-top" :src="article.image" alt="Card image cap">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{article.title}}</h5>
                        <hr>
                        <p class="card-text">{{article.paragraph}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"UpcomingSection",

    data(){
        return{
            upcomings:[
                {
                    title:"Chicago book signing",
                    paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                    image:require('@/assets/img/event-05-400x240.jpg'),
                },
                {
                    title:"Meet & greet with amanda",
                    paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                    image:require('@/assets/img/event-04-400x240.jpg'), 
                },
                {
                    title:"Open book: dialogues",
                    paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                    image:require('@/assets/img/event-07-400x240.jpg'),
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';
@import './src/assets/scss/partials/_mediaQueries.scss';

.bg-color {
    background-color:#fef7e9;
}

.title {
    font-family: 'PT Serif', serif;
}

.subtitle {
    font-family: 'PT Serif', serif;
    text-transform: uppercase;
    color:$saffronOrangeGold;
    font-size:1rem;
}
.container-cards {
    //padding: 3rem 7rem;

    .card {
        font-family: 'PT Serif', serif;
        
        &:hover img {
            filter: opacity(60%);
        }

        h5 {
            font-weight: 400;
            text-transform: capitalize;
        }

        p {
            color:$osloGray;
        }
    }
}
</style>>

