<template>
    <header>
        <section class="container-fluid">

            <!-- header's child component? -->
            <div class="row align-items-center justify-content-between px-5">
                <div class="col-6">
                    <img :src="require('@/assets/img/author-logo-round-small.png')" alt="logo header">
                </div>
                <nav class="col-6">
                    <ul class="d-flex justify-content-evenly">
                        <li><a href="#/">About me</a></li>
                        <li><a href="#/">Testimonials</a></li>
                        <li><a href="#/">My Dig</a></li>
                        <li><a href="#/">Meetups</a></li>
                        <li><a href="#/">Shop</a></li>
                        <li><a href="#/">Contact me</a></li>
                        <li>icon</li>
                    </ul>
                </nav>
            </div>

            <!-- header's child component? -->
            <div class="row justify-content-center px-5">
                <div class="col-5 article-card">
                    <h3>Damon Vaugh</h3>
                    <p>
                        Best-selling Author and the most influential public intellectualin the western world right now.
                    </p>
                    <address class="author"> By <a rel="author" href="#/">The New York Times</a></address>
                </div>
                <div class="col-7">
                    end content
                </div>
            </div>
        </section>
    </header>
</template>

<script>
export default {
name:"HeaderWrap"
}
</script>

<style lang="scss" scoped>
header{
    filter: grayscale(50%);
    background-image: url(' @/assets/img/hero-07-2x.jpg');
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ul{
        list-style: none;
        a{
            color:#868586;
            text-decoration: none;
        }
    }
}
.article-card{

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
        a{
            font-family: 'italic';
            color:white;
        }
    }

}

</style>