<template>
  <q-popup-proxy :offset="[10, 10]" class="shadow-up-24" context-menu>
    <q-banner class="bg-light-blue-9">
      <q-icon name="edit" size="20px" class="q-ml-md q-mr-md cursor-pointer"></q-icon>
      <q-icon name="delete" size="20px" class="q-ml-md q-mr-md cursor-pointer"></q-icon>
    </q-banner>
  </q-popup-proxy>
</template>


<script>
export default {
  name: "EditPopup",
  props: {
   
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.q-icon:hover{

    transition: 0.5s;
    opacity: 0.5;
}
</style>