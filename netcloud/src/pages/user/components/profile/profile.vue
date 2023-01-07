<template>
  <div class="container ">
    <UserAvatar class="avatar"/>
    <NavigateProfile class="q-mt-md navigation" />
  </div>
</template>

<script>
import UserAvatar from './elements/avatar.vue'
import NavigateProfile from './elements/nav-profile.vue'
export default {
    name:'UserProfile',
    components:{UserAvatar,NavigateProfile}
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 540px;
  margin:0 auto;
}
.navigation{
  margin-left: 280px;
}

</style>