<template>
  <div class="navigation ">
    <router-link
      v-for="link in links"
      :key="link"
      :to="link.href"
      class="text-white flex "
    >
      <q-btn class="q-mt-md items-start">
        <q-icon :name="link.icon" class="q-mr-md" /> {{ link.name }}
      </q-btn>
      <br />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainNavigation",
  data() {
    return {
      links: [
        { name: "My Profile", href: "user/profile", icon: "account_circle" },
        { name: "News", href: "newsfeed", icon: "feed" },
        { name: "About", href: "about", icon: "info" },
        { name: "Communities", href: "сommunities", icon: "groups" },
        { name: "Arts", href: "arts", icon: "image" },
        { name: "video", href: "video", icon: "movie" },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.navigation {
  max-width: 300px;
  max-height: 350px;
  width: 300px;
  border: 1px solid #46b0e4;
  border-radius: 10px;
}

.q-btn  {
    width: 100%;
   
}
</style>