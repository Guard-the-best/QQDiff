<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="pic in pics" v-bind:key="pic.order" data-target="#carouselExampleIndicators" :data-slide-to="pic.order" :class="{ active:!pic.order }"></li>
        </ol>

        <div class="carousel-inner">
            <div  v-for="pic in pics" :key="pic.order" :class="pic.order == 0 ? 'carousel-item active' : 'carousel-item'">
                <a>
                    <img class="d-block w-100" :src="pic.imgSrc"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{pic.name}}</h5>
                        <p>{{pic.description}}</p>
                    </div>
                </a>
            </div>

        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </div>


</template>

<script>

export default {
    name: 'carousel',
    data:function() {
        return {
            pics:[
                {
                    name: '🐴',
                    description: 'My name is Tony',
                    route: 'category/',
                    imgSrc: require('../../../public/img/carousel1.jpg'),
                    order: 0
                },
                {
                    name: '🐱',
                    description: 'meow',
                    route: 'category/',
                    imgSrc: require('../../../public/img/carousel2.jpg'),
                    order: 1
                },
                {
                    name: '🐶',
                    description: 'wang',
                    route: 'category/101',
                    imgSrc: require('../../../public/img/carousel3.jpg'),
                    order: 2
                },
                {
                    name: '🐟',
                    description: 'bub',
                    route: 'category/',
                    imgSrc: require('../../../public/img/carousel4.jpg'),
                    order: 3
                }
            ]
        }
    }
}
</script>