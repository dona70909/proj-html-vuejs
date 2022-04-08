<template>
    <section class="container-fluid">
        <div class="row px-5 py-3 justify-content-center align-items-center">
            <div class="col-12">
                <div class="title text-center mb-5">
                    <h2 class="text-capitalize">Dig a little deeper into damon vaugh</h2>
                    <h6 class="text-uppercase">Find out more about the author</h6>
                </div>
            </div>


            <div class="col-4 px-5 card-item card-about-me d-flex justify-content-center">
                <div class="text-card text-center pb-4">
                    <h2 class="text-capitalize text-white pb-2">About me</h2>
                    <hr class="w-50">
                    <p class="text-warning">Lorem ipsum dolor, sit amet consectetur!</p>
                </div>
            </div>
            <div class="col-4 card-item card-latest d-flex justify-content-center">
                <div class="text-card text-center pb-4">
                    <h2 class="text-capitalize text-white pb-2">My latest book</h2>
                    <hr class="w-50">
                    <p class="text-warning">Lorem ipsum dolor, sit amet consectetur!</p>
                </div>
            </div>
            <div class="col-4 card-item card-signing d-flex justify-content-center">
                <div class="text-card text-center pb-4">
                    <h2 class="text-capitalize text-white pb-2">Book signing</h2>
                    <hr class="w-50">
                    <p class="text-warning">Lorem ipsum dolor, sit amet consectetur!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"AboutAuthor"
}
</script>

<style lang="scss" scoped>

@import './src/assets/scss/style.scss';

.card-about-me{
    background-image: url('@/assets/img/box-1.jpg');
}
.card-latest{
    background-image: url('@/assets/img/box-3.jpg');
}
.card-signing{
    background-image: url('@/assets/img/box-4.jpg');
}
.card-item{
    height: 500px;
    width:calc(100% /3 - 2rem);
    border-bottom-right-radius: 50px;
    background-repeat:no-repeat;
    background-size: cover; 
    margin: 0 1rem;
    /* filter: brightness(50%); */
    /* filter: grayscale(1%); */
    .text-card{
        align-self: flex-end;

        hr{
            margin: 0 auto;
            height:.3rem;
            color: rgb(208, 21, 21);
        }
    }
}
</style>