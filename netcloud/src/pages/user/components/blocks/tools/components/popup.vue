<template>
    <q-popup-proxy :offset="[10, 10]">
        <q-banner :class="bgcolor">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          {{description}}
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
}
</style>