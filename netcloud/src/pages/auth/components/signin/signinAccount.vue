<template>
  <div class="container text-center">
    <logoNetCloudVue />
    <div class="form_container" style="width: 300px; margin: 0 auto">
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.login"
          placeholder="login"
          color="green"
          input-class="text-white text-center  "
          bg-color="primary"
          input-style=""
          style="max-width: 300px"
        />
      </div>
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.password"
          placeholder="password"
          color="green"
          input-class="text-white text-center  "
          type="password"
          bg-color="primary"
          style="max-width: 300px"
        />
      </div>
      <q-btn
        outline
        rounded
        color="primary"
        label="Sign In"
        class="text-center"
        :loading="false"
        @click="signIn"
      />
    </div>
    <descriptionHelper />
  </div>
</template>

<script>
import logoNetCloudVue from "src/components/logo/logoNetCloudArrow.vue";
import descriptionHelper from "src/pages/auth/components/signin/elements/descriptionHelper.vue";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    async signIn() {
      if (this.form.login === "" || this.form.password === "") {
        console.log("Поле логин или пароль обязательные");
        return this.$emit("EmptyField");
      } else {
        await this.$store.dispatch("authorization", this.form);
        this.$emit("authorizeStatus");
        this.form.login =''
         this.form.password = ''
      }
    },
  },
  components: { logoNetCloudVue, descriptionHelper },
};
</script>
