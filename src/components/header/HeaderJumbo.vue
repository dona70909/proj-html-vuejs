<template>
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
</template>

<script>
export default {
    name:"HeaderJumbo"
}
</script>

<style lang="scss" scoped>
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