<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data (){
            return{
                swiperOption:{
                    pagination:'.swiper-pagination',
                    loop:true
                },
                swiperList:[
                    {
                        id:'0001',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'
                    },
                    {
                        id:'0002',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/48/5713e2a2ba72f902.jpg_750x200_2b382dac.jpg'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper /deep/ .swiper-pagination-bullet-active{
        background: #fff!important;
    }
    .wrapper{
        width:100%;
        height:0;
        overflow: hidden;
        padding-bottom: 26.66%;
        /*高度会根据宽度自动撑开31。25%，这样就是宽高比始终是31。25%。这就是宽高比自适应的方法了。*/
        background: #eee;
        .swiper-slide img{
            display: block;
            width:100%
        }
    }
</style>
