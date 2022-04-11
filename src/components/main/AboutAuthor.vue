<template>
    <section class="container-fluid">
        <div class="row px-5 pb-2 pt-5 justify-content-center align-items-center container-section">
            <div class="col-12">
                <div class="title text-center mb-5">
                    <h2 class="title-section">Dig a little deeper into damon vaugh</h2>
                    <h6 class="subtitle-section">Find out more about the author</h6>
                </div>
            </div>
        </div>

        <div class="row px-5 pb-5 pt-2 justify-content-center container-section">
            <div v-for="(card) in cards" :key="card.title" class="col-lg-4 col-12 card-item d-flex mb-4 mb-lg-0 justify-content-center position-relative">
                <img :src="card.image" :alt="card.title">
                <div class="text-card bottom-0 align-self-end text-center pb-4 position-absolute">
                    <h2 class="title-card pb-2">{{card.title}}</h2>
                    <hr class="w-50">
                    <p>{{card.subtitle}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"AboutAuthor",
    data() {
        return {
            cards: [
                {
                    title:"About me",
                    subtitle:"Lorem ipsum dolor, sit amet consectetur!",
                    image:require('@/assets/img/box-1.jpg'),
                    url:"#/"
                },
                {
                    
                    title:"My latest book",
                    subtitle:"Lorem ipsum dolor, sit amet consectetur!",
                    image:require('@/assets/img/box-4.jpg'),
                    url:"#/"
                },
                {
                    
                    title:"Book signing",
                    subtitle:"Lorem ipsum dolor, sit amet consectetur!",
                    image:require('@/assets/img/box-3.jpg'),
                    url:"#/"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';
@import './src/assets/scss/partials/_mediaQueries.scss';

.container-section {
    font-family: 'PT Serif', serif;
    .title-section {
        text-transform: capitalize;
    }

    .subtitle-section {
        text-transform: uppercase;
        color:$greenKeppel;
    }


    .card-item {
        height: 450px;
        margin: 0 2rem;

        img {
            border-bottom-right-radius: 50px;
            width:100%;
            filter:brightness(50%);
            box-shadow: 2px 2px 2px black;
        }

        &:hover img {
            transform: scale(1.03);
            transition: transform .35s;
        }

        .text-card {
            bottom: 0; 
            hr {
                margin: 0 auto;
                height:.3rem;
                color:$osloGray;
                padding: 0 3rem;
            }

            .title-card {
                text-transform: uppercase;
                color:white;
                font-size: 1.3rem;
                font-weight: 600;
            }

            p {
                color: $saffronOrangeGold;
                padding: 0 2rem;
            }

        }
    }

}



</style>