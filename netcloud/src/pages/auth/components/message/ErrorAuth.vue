<template>
  <q-banner inline-actions class="text-white bg-red absolute-top text-center" :dabse="true" :rounded="true">
    При авторизации произошла ошибка. Неверный логин или пароль. Попробуйте снова.
    
  </q-banner>
</template>

<script>
export default {
    name:"ErrorAuth",
    data(){
        return {

        }
    }
}
</script>