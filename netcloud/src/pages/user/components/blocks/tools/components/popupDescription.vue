<template>
    <q-popup-proxy :offset="[10, 10]" class="shadow-up-24">
        <q-banner :class="bgcolor"> 
         <p class="text-white">{{description}}</p> 
        </q-banner>
      </q-popup-proxy>
</template>

<script>
export default {
    name:'DescriptionPopup',
    props:{
      description:{
        type:String,
        default:'sdsd'
      },
      bgcolor:{
        type:String,
        default:'primary'
      } 
    },
    data(){
        return {

        }
    }
}
</script>


<style lang="scss" scoped>
.q-banner {
  max-width: 400px;
  opacity: 0.9;
}


</style>