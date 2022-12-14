<template>
  <router-view class="tempalte seria bg-black " />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
  a{
    text-decoration: none;
  }
  .tempalte {
    // padding-top: 50px;
    // padding-left: 100px;
    // padding-right: 100px;
  }
</style>