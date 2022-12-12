<template>
  <q-page class="bg-black text-white flex flex-center">
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <ErrorAuth v-if="errors.unAuth" />
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <ErrorNetwork v-if="errors.errorNetwork" />
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <SuccessAuth v-if="validForm.success" />
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <EmptyField v-if="validForm.empty" />
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
      <signUpAccountVue v-if="!loading" @signup="signup()" @emptyfield="EmptyField()" />
    </transition-group>
  </q-page>
</template>
  
  <script>
import logoNetCloudLoading from "src/components/logo/logoNetCloudLoading.vue";
import signUpAccountVue from "./components/signup/signUpAccount.vue";
import ErrorAuth from "./components/message/ErrorAuth.vue";
import SuccessAuth from "./components/message/SuccessAuth.vue";
import EmptyField from "./components/message/EmptyField.vue";
import ErrorNetwork from "./components/message/ErrorNetwork.vue";
export default {
  data() {
    return {
      loading: true,
      errors: {
        unAuth: false,
        errorNetwork: false,
      },
      validForm: {
        success: false,
        empty: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  methods: {
    async signup() {
      if ((await this.$store.getters.getStatusAuthorize.err) === true) {
        (this.errors.unAuth = true),
          (this.validForm.empty = false),
          (this.validForm.success = false),
          setTimeout(() => {
            this.errors.unAuth = false;
            this.$store.commit("clearStatusAuthorizeError");
          }, 3000);
      } else if (
        (await this.$store.getters.getStatusAuthorize.success) === true
      ) {
        (this.validForm.success = true),
          setTimeout(() => {
            this.validForm.success = false;
          }, 2000);
      } else if (
        (await this.$store.getters.getStatusAuthorize.errorNetwork) == true
      ) {
        this.errors.errorNetwork = true;
        setTimeout(() => {
          this.errors.errorNetwork = false;
        }, 3000);
      }
    },
    async EmptyField() {
      (this.validForm.empty = true),
        setTimeout(() => {
          this.validForm.empty = false;
        }, 3000);
    },
  },
  components: {
    signUpAccountVue,
    logoNetCloudLoading,
    ErrorAuth,
    SuccessAuth,
    EmptyField,
    ErrorNetwork,
  },
};
</script>
  
  
  <style>
.text-field {
  border-color: red;
}
</style>