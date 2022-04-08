<template>
    <section class="container-fluid">
        <div class="row pe-5 container-footer align-items-center">
            <div class="col-2">
                <img :src="require('@/assets/img/author-logo-round-small.png')" alt="">
            </div>
            <div class="col-3">
                <h5>About me </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique voluptatibus nostrum maxime distinctio veritatis quis.</p>
            </div>
            <div class="col-3">
                <h5>Usefil Links</h5>
                <ul>
                    <li v-for="(link,index) in usefulLinks" :key="index + 'usefullinks'">
                        <a :href="link.url">{{link.text}}</a>
                    </li>
                </ul>
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
                    url:'#',
                    text:'Latest Books'
                },
                {
                    url:'#',
                    text:'Upcoming Events'
                },
                {
                    url:'#',
                    text:'Recent Articles'
                },
                {
                    url:'#',
                    text:'Business Enquires'
                },
                {
                    url:'#',
                    text:'Visit my foundation'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container-footer{
    padding-top: 7rem;

    a{
        text-decoration: none;
        color: white;
    }

    p{
        color: rgb(172, 168, 168);
    }

    img{
        width:100% ;
    }

    ul{
        list-style: none;
        padding:0;
    }
}
</style>