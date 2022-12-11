<template>
  <div class="container text-center">
    <logoNetCloudVue />
    <div class="form_container" style="width: 300px; margin: 0 auto">
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.phone"
          placeholder="you`r phone"
          color="green"
          input-class="text-white text-center  "
          bg-color="primary"
          input-style=""
          type="phone"
          style="max-width: 300px"
        />
      </div>
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.password"
          placeholder="you`r password"
          color="green"
          input-class="text-white text-center "
          type="password"
          bg-color="primary"
          style="max-width: 300px"
        />
      </div>
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.repeatPassword"
          placeholder="repeat you`r password"
          color="green"
          input-class="text-white text-center "
          type="password"
          bg-color="primary"
          style="max-width: 300px"
        />
      </div>
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.email"
          placeholder="you`r email"
          color="green"
          input-class="text-white text-center "
          type="email"
          bg-color="primary"
          style="max-width: 300px"
        />
      </div>
      <q-btn
        outline
        rounded
        color="primary"
        label="Sign Up"
        class="text-center"
        :loading="false"
      />
    </div>
    <descriptionHelper />
  </div>
</template>
  
  <script>
import logoNetCloudVue from "src/components/logo/logoNetCloud.vue";
import descriptionHelper from "src/pages/auth/components/signup/elements/descriptionHelper.vue";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        phone: null,
        password: null,
        repeatPassword:null,
        email:null
      },
    };
  },
  components: { logoNetCloudVue, descriptionHelper },
};
</script>
  