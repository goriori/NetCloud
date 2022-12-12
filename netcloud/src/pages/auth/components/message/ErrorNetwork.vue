<template>
  <q-banner class="bg-red absolute-top text-center">
    <q-icon name="signal_wifi_off" color="primary" />
    Ошибка подключения к серверу. Попробуйте войти позже.
  </q-banner>
</template>

<script>
export default {
  name: "ErrorNetwork",
  data() {
    return {};
  },
};
</script>