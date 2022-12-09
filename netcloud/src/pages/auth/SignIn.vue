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
      <signinAccountVue v-if="!loading" />
    </transition-group>
  </q-page>
</template>

<script>
import logoNetCloudLoading from "src/components/logo/logoNetCloudLoading.vue";
import signinAccountVue from "./components/signin/signinAccount.vue";
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
  components: { logoNetCloudLoading, signinAccountVue },
};
</script>


<style>
.text-field {
  border-color: red;
}
</style>