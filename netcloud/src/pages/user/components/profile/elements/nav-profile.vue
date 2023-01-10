<template>
    <div class="container">
        <q-card class="navigation__profile q-pt-md q-pb-md">
            <q-btn flat style="color: #3CA7DB" label="Works" class="q-mt-xs q-mb-xs" />
            <br/>
            <q-btn flat style="color: #3CA7DB" label="About" class="q-mt-xs q-mb-xs" @click="$router.push('/about')"/>
            <br/>
            <q-btn flat style="color: #3CA7DB" label="Exit" class="q-mt-xs q-mb-xs" @click="exit"/>
        </q-card>
    </div>
</template>

<script>
export default {
    name:'NavigateProfile',
    data(){
        return{

        }
    },
    methods:{
        exit(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    max-width:260px;
}
.navigation__profile{
    background-color: rgba(245, 222, 179, 0);
    border-radius: 10px;
    border:1px solid #3CA7DB;
}
.q-btn{
    width: 100%;
    height: 46px;
    max-height: auto;
}
</style>