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
        @click="signup()"
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
        phone: '',
        password: '',
        repeatPassword:'',
        email:''
      },
    };
  },
  methods:{
    async signup(){
      if (this.form.phone === "" || this.form.password === "" || this.form.repeatPassword === '' || this.form.email === '') {
        console.log("Заполните все поля");
        return this.$emit("emptyfield");
      }else if(this.form.password != this.form.repeatPassword){
        console.log('Пароли не совпадают')
      } 
      else {
        await this.$store.dispatch("signup", this.form);
        this.$emit("signup");
        this.form.login =''
         this.form.password = ''
      }
    }
  },
  components: { logoNetCloudVue, descriptionHelper },
};
</script>
  