<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HomeHeader",
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style lang="scss" scoped>
    @import '~styles/varibles';
    .header{
        line-height:.86rem;
        display: flex;
        background: $bgColor;
        color:#fff;
        .header-left{
            width:.64rem;
            .back-icon{
                text-align:center;
                font-size:.4rem;
            }
        }
        .header-input{
            flex:1;
            text-align:left;
            height:.64rem;
            line-height:.64rem;
            margin-top:.12rem;
            margin-left:.2rem;
            background: #fff;
            border-radius:.1rem;
            color:#ccc;
            padding-left:.2rem;
        }
        .header-right{
            width:1.24rem;
            text-align: center;
            color:#fff;
            .arrow-icon{
                /*margin-left:-.4rem;*/
                font-size:.24rem;
            }
        }
    }
</style>
