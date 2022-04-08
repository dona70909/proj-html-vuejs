<template>
    <section class="container-fluid bg-img">
        <div class="row container-row-padding justify-content-center align-items-center container-article">
            <div class="col-6 text-center">
                <h2 class="text-white title-article">Subscribe to My Newsletter</h2>
                <h6 class="text-uppercase subtitle-article">Be Notified about book signing tour dates</h6>
                <div class="d-flex justify-content-center align-items-center">
                    <input class="email-input me-3" type="text" placeholder="insert your mail...*">
                    <button class="d-flex justify-content-center align-items-center">
                        <a href="#/">Subscribe now!</a>
                    </button>
                </div>
                <p class="paragraph-article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea sit ullam neque praesentium.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"SubscribeNews",
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

.bg-img {
    background-image: url('@/assets/img/banner-2.jpg');
    /*  height: 300px; */

    .container-row-padding {
        padding: 6rem 0;
    }
}

.container-article {

    font-family: 'PT Serif', serif;

    .title-article {
        color:white;
    }

    .subtitle-article {
        color:$saffronOrangeGold;
    }

    .paragraph-article {
        color:$osloGray;
    }

    input {
    padding: .7rem 1.3rem;
    }

    ::placeholder {
        font-family: 'PT Serif', serif;
        font-size: .8rem;
        border-radius: 10px;
        font-weight: 600;
    }

    button {
        padding: .7rem 1.7rem;
        background-color: $greenKeppel;
        border:none;
        border-radius: 10px;
        a {
            pointer-events: none;
            color:white;
            text-decoration: none;
            font-weight: 700;
            font-size: .7rem;
        }
    }

}

</style>