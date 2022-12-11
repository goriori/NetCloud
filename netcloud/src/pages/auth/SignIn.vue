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
      <signinAccount
        v-if="!loading"
        @authorizeStatus="authStatus()"
        @EmptyField="EmptyField()"
      />
    </transition-group>
  </q-page>
</template>

<script>
import logoNetCloudLoading from "src/components/logo/logoNetCloudLoading.vue";
import signinAccount from "./components/signin/signinAccount.vue";
import ErrorAuth from "./components/message/signin/ErrorAuth.vue";
import SuccessAuth from "./components/message/signin/SuccessAuth.vue";
import EmptyField from "./components/message/signin/EmptyField.vue";
export default {
  data() {
    return {
      loading: true,
      errors: {
        unAuth: false,
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
    async authStatus() {
      if ((await this.$store.getters.getStatusAuthorize.err) === true) {
        (this.errors.unAuth = true),
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
    logoNetCloudLoading,
    signinAccount,
    ErrorAuth,
    SuccessAuth,
    EmptyField,
  },
};
</script>


<style>
.text-field {
  border-color: red;
}
</style>