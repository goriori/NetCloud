<template>
  <div class="container text-center">
    <logoNetCloudVue />
    <div class="form_container" style="width: 300px; margin: 0 auto">
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.phone"
          label="you`r phone"
          color="primary"
          label-color="grey-1"
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
          label="you`r password"
          color="primary"
          label-color="grey-1"
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
          label="repeat you`r password"
          color="primary"
          label-color="grey-1"
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
          label="you`r email"
          color="primary"
          label-color="grey-1"
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
  