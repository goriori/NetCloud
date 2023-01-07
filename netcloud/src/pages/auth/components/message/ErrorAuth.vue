<template>
  <q-banner inline-actions class="text-white bg-red absolute-top text-center" :dabse="true" :rounded="true">
    An error occurred during authorization. Invalid username or password. Try again.
  </q-banner>
</template>

<script>
export default {
    name:"ErrorAuth",
    data(){
        return {

        }
    }
}
</script>