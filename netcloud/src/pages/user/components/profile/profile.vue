<template>
  <div>Profile

    <UserAvatar/>
  </div>
</template>

<script>
import UserAvatar from './elemetns/avatar.vue'
export default {
    name:'UserProfile',
    components:{UserAvatar}
};
</script>

<style lang="scss" scoped>
</style>