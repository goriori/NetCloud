<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
  
  <script>
import { defineComponent, ref } from "vue";
</script>

  <style lang="scss">
.q-page-container {
  margin: 0 auto;
  padding-top: 5rem;
  padding-left: 20rem;
  padding-right: 20rem;
}
</style>

// Сет Маки микс 700
// Сет Ялта 800