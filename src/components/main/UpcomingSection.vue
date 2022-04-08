<template>
    <section class="container-fluid bg-color">
        <div class="row container-cards justify-content-center">
            <div class="col-12">
                <div class="title text-center mb-4">
                    <h2 class="title">Upcoming Events</h2>
                    <h3 class="subtitle">Meet the authors in person</h3>
                </div>
            </div>
            <div class="col-4 px-4" v-for="(article,index) in upcomings" :key="index + 'upcoming' ">
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
                    title:"Card title",
                    paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                    image:require('@/assets/img/event-05-400x240.jpg'),
                },
                {
                    title:"Card title",
                    paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content.",
                    image:require('@/assets/img/event-04-400x240.jpg'), 
                },
                {
                    title:"Card title",
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
    padding: 3rem 7rem;

    .card {
        font-family: 'PT Serif', serif;

        h5 {
            font-weight: 400;
        }

        p {
            color:$osloGray;
        }
    }
}
</style>>

