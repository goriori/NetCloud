<template>
    <div class="text-white">
        user
        <UserProfile/>
    </div>
</template>


<script>
import UserProfile from './components/profile/profile.vue'
export default {
    name:'UserPage',
    components:{UserProfile}
}
</script>


<style lang="scss" scoped>

</style>