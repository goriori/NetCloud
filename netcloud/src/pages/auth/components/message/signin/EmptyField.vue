<template>
  <q-banner
    inline-actions
    class="text-white bg-red absolute-top text-center"
    :dabse="true"
    :rounded="true"
  >
    Поле логин и пароль обязательные
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