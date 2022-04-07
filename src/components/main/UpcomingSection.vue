<template>
    <section class="container-fluid bg-color">
        <div class="row container-cards justify-content-center">
            <div class="col-12">
                <div class="title text-center mb-4">
                    <h2>Upcoming Events</h2>
                    <h3>Meet the authors in person</h3>
                </div>
            </div>
            <div class="col-4 px-4">
                <div class="card">
                    <img class="card-img-top" :src="require('@/assets/img/event-05-400x240.jpg')" alt="Card image cap">
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-4 px-4">
                <div class="card">
                    <img class="card-img-top" :src="require('@/assets/img/event-04-400x240.jpg')" alt="Card image cap">
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-4 px-4">
                <div class="card">
                    <img class="card-img-top img-fluid" :src="require('@/assets/img/event-07-400x240.jpg')" alt="Card image cap">
                    <div class="card-body text-center">
                        <h5 class="card-title">Card title</h5>
                        <hr>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"UpcomingSection",
}
</script>

<style lang="scss" scoped>
.bg-color{
    background-color:#fef7e9;
}
.container-cards{
    padding: 3rem 7rem;
}
</style>>

