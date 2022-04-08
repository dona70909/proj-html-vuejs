<template>
    <section class="container-fluid">
        <div class="row px-5 pb-2 pt-3 justify-content-center align-items-center container-section">
            <div class="col-12">
                <div class="title text-center mb-5">
                    <h2 class="title-section">Dig a little deeper into damon vaugh</h2>
                    <h6 class="subtitle-section">Find out more about the author</h6>
                </div>
            </div>
        </div>

        <div class="row px-5 pb-5 pt-2 justify-content-center container-section">
            <div v-for="(card) in cards" :key="card.title" class="col-4 card-item d-flex justify-content-center position-relative">
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
.container-section {
    font-family: 'PT Serif', serif;
    .title-section {
        text-transform: capitalize;
    }

    .subtitle-section {
        text-transform: uppercase;
        color:$saffronOrangeGold;
    }


    .card-item {
        height: 450px;
        width:calc(100% / 3 - 4rem);
        margin: 0 2rem;

        img {
            border-bottom-right-radius: 50px;
            width:100%;
            filter:brightness(50%);
            filter:drop-shadow(50%);
            
        }
        .text-card {
            /* align-self: flex-end; */
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