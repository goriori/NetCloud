<template>
    <div class="text-white container q-pa-md">
        <p> Search</p>
        <Search class="" />
        <News />
    </div>
</template>


<script>
import Search from './components/search/search.vue'
import News from './components/news/news.vue'
export default {
    name:"NewsFeed",
    components:{Search, News},
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    width: 1000px;
    

}
</style>