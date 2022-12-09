<template>
  <div class="container text-center" >
    <logoNetCloudVue />
    <div class="form_container" style="width: 300px; margin: 0 auto">
      <div class="q-mb-md col-3">
        <q-input
          rounded
          outlined
          v-model="form.login"
          label="Login"
          color="primary"
          label-color="grey-1"
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
          label="Password"
          color="primary"
          label-color="grey-1"
          input-class="text-white text-center "
          type="password"
          bg-color="primary"
          style="max-width: 300px"
        />
      </div>
      <q-btn
        outline
        rounded
        color="primary"
        label="SignIn"
        class="text-center"
      />
    </div>
    <descriptionHelper />
  </div>
</template>

<script>
import logoNetCloudVue from "src/components/logo/logoNetCloud.vue";
import descriptionHelper from "src/pages/auth/components/signin/elements/descriptionHelper.vue";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        login: null,
        password: null,
      },
    };
  },
  components: { logoNetCloudVue, descriptionHelper },
};
</script>
