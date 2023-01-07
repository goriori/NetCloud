<template>
  <q-banner
    inline-actions
    class="text-white bg-red absolute-top text-center"
    :dabse="true"
    :rounded="true"
  >
  Please fill in all the fields...
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