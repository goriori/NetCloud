<template>
  <q-banner class="bg-red absolute-top text-center">
    <q-icon name="signal_wifi_off" color="primary" />
    Server connection error. Try logging in later.
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