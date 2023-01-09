<template>
    <q-popup-proxy :offset="[10, 10]">
        <q-banner class="bg-purple text-white">
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
</template>

<script>
export default {
    name:'DescriptionPopup',
    props:{

    },
    data(){
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>