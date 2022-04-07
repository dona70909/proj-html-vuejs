<template>
    <!-- header's child component? -->
    <div class="row justify-content-center article-card-container">
        <!-- //# container left article -->
        <div class="col-6 col-md-8 article-card">
            <h3>Damon Vaugh</h3>
            <p>
                Best-selling Author and the most influential public intellectualin the western world right now.
            </p>
            <address class="author">-<a rel="author" href="#/">The New York Times</a></address>
        </div>
        <!-- //# container right kindle latest book and icons -->
        <div class="col-6 col-md-4  latest-book-container px-0">
            <div class="d-flex flex-column mb-4 text-white px-2">
                <div class="square demos-square align-self-end">icon</div>
                <div class="square on-sale-square align-self-end">icon</div>
            </div>
            <div class="latest-book-card px-3">
                <div class="d-flex justify-content-around">
                    <img class="img-fluid img-kindle-book" :src="require('@/assets/img/book-widget.png')" alt="book">
                    <div class="kindle-text">
                        <h5>Latest Book Relese</h5>
                        <h6>D.Vaughn Autobiography</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos voluptatum eveniet soluta labore mollitia repudiandae recusandae itaque!</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    
                    <button class="px-3"> <a href="#/"><img class="btn-logo" :src="require('@/assets/img/amazon-logo-small.png')" alt="amazon-logo">Buy on amazon</a>  </button>
                    <button class="px-3"><a href="#/"> <img class="btn-logo" :src="require('@/assets/img/apple-logo.png')" alt=""> Buy on app store</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderJumbo"
}
</script>

<style lang="scss" scoped>

/* //#  ARTICLE LEFT NEW YORK TIMES */
.article-card-container{
    padding-left:5rem;
   /*  height: 100%; */
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
            font-family: 'italic';
            a{
                color:white;
            }
        }

    }
}

/* //#  ARTICLE RughT kindle */
.latest-book-card{
    background-color: white;
    color:black;
    padding: 2rem 0rem;
    height: 100%;
    .img-kindle-book{
        height: 100%;
        width: 50%;
    }

    .kindle-text{
        width: 50%;
        p{
            font-size: .8rem;
        }
    }
}

.btn-logo{
    height: 1rem;
    margin-right: .2rem;
}

a{
    text-decoration: none;
    color: black;
}

.square{
    width:2rem;
    height: 2rem;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1.5rem;
    background-color: white;
    margin-bottom:1rem;
}
</style>