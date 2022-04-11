<template>
    <section class="container-fluid">
        <div class="row pe-lg-5 pe-0  container-footer justify-content-lg-evenly align-items-start">
            <div class="col-lg-2 col-5 d-flex justify-content-start">
                <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo">
            </div>
            <div class="col-lg-3 col-12 mb-lg-0 mb-3 px-0 px-5">
                <h5 class="mb-3">About me</h5>
                <p class="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique voluptatibus nostrum maxime distinctio veritatis quis.</p>
            </div>
            <div class="col-lg-3 col-12 mb-lg-0 mb-3 px-0 px-5">
                <h5 class="mb-3">Useful Links</h5>
                <ul>
                    <li class="mb-1" v-for="(link,index) in usefulLinks" :key="index + 'usefullinks'">
                        <a class="d-flex align-items-center" :href="link.url"> 
                            <font-awesome-icon class="font-icon me-2" icon="fa-solid fa-chevron-right" />
                            {{link.text}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-12 mb-lg-0 mb-3 px-0 px-5">
                <h5 class="mb-3">Contact info</h5>
                <p class="text-gray">63 E.Studebaker Street Bollingbrook, II 60440</p>
                <p class="text-gray">Phone: (800)000-000</p>
                <p class="text-gray">Mobile: (800)000-000</p>
                <p class="text-gray">Email: info@yourcompany.com</p>
                <div class="d-flex justify-content-around justify-content-lg-between w-50 text-gray">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:"FooterNav",

    data(){
        return{
            usefulLinks:[
                {
                    url:'#/',
                    text:'Latest Books'
                },
                {
                    url:'#/',
                    text:'Upcoming Events'
                },
                {
                    url:'#/',
                    text:'Recent Articles'
                },
                {
                    url:'#/',
                    text:'Business Enquires'
                },
                {
                    url:'#/',
                    text:'Visit my foundation'
                }
            ],

            contactInfo:{
                address:"63 E.Studebaker Street Bollingbrook, II 60440",
                phone:"(800)000-000",
                mobile:"(800)000-000",
                email:"info@yourcompany.com"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/style.scss';

.container-footer{
    padding-top: 7rem;
    color: white;

    h5 {
        font-weight: 700;
        text-transform: uppercase;
    }
    
    a {
        text-decoration: none;
        color: white;
    }

    img {
        width:70%;
    }

    .font-icon {
        font-weight: 900;
        font-size: 1.5rem;
        transform: scale(.5);
    }

    .text-gray {
        color:$osloGray;
    }
}

</style>