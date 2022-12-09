<template>
  <q-page class="bg-black text-white flex flex-center">
    <transition
      appear
      enter-active-class="animated pulse"
      leave-active-class="animated fadeOutLeft"
    >
      <logoNetCloudLoading v-if="loading" />
    </transition>
    <transition-group
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <signUpAccountVue v-if="!loading"/>
    </transition-group>
  </q-page>
</template>
  
  <script>
  import logoNetCloudLoading from "src/components/logo/logoNetCloudLoading.vue";
import signUpAccountVue from "./components/signup/signUpAccount.vue";
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: { signUpAccountVue , logoNetCloudLoading},
};
</script>
  
  
  <style>
.text-field {
  border-color: red;
}
</style>