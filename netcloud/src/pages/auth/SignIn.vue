<template>
  <q-page class="bg-black text-white flex flex-center">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <ErrorAuth v-if="errors.unAuth.err" />
    </transition>
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
      <signinAccount v-if="!loading" />
    </transition-group>
  </q-page>
</template>

<script>
import logoNetCloudLoading from "src/components/logo/logoNetCloudLoading.vue";
import signinAccount from "./components/signin/signinAccount.vue";
import ErrorAuth from "./components/message/ErrorAuth.vue";
export default {
  data() {
    return {
      loading: true,
      errors: {
        unAuth: this.$store.getters.getStatusAuthorize
      },
    };
  },
  
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: { logoNetCloudLoading, signinAccount, ErrorAuth },
};
</script>


<style>
.text-field {
  border-color: red;
}
</style>