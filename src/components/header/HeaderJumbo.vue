<template>
    <!-- header's child component? -->
    <div class="row justify-content-center article-card-container">
        <div class="col-8 article-card">
            <h3>Damon Vaugh</h3>
            <p>
                Best-selling Author and the most influential public intellectualin the western world right now.
            </p>
            <address class="author"> By <a rel="author" href="#/">The New York Times</a></address>
        </div>
        <div class="col-4 latest-book-container px-0">
            <div class="d-flex flex-column mb-4 text-white px-2">
                <div class="demos-square align-self-end">icon</div>
                <div class="on-sale-square align-self-end">icon</div>
            </div>
            <div class="latest-book-card px-3">
                <div class="d-flex justify-content-around">
                    <img src="" alt="book">
                    <p>testo</p>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="px-3">Buy on amazon</button>
                    <button class="px-3">buy on app store</button>
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

.latest-book-card{
    background-color: white;
    color:black;
    padding: 5rem 0rem;
    /* height: 100%; */
}

</style>