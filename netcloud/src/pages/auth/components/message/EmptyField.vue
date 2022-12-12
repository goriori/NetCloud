<template>
  <q-banner
    inline-actions
    class="text-white bg-red absolute-top text-center"
    :dabse="true"
    :rounded="true"
  >
    Пожалуйста, заполните все поля...
  </q-banner>
</template>
  
  <script>
export default {
  name: "EmptyField",

  data() {
    return {};
  },
};
</script>