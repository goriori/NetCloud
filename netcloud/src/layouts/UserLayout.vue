<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
  
  <script>
import { defineComponent, ref } from "vue";
</script>

<style lang="scss">
  .q-page-container {
    padding-left: 10%;
    padding-right: 10%;
    
   
  }
</style>

