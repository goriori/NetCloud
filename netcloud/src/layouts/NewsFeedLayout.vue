<template>
  <q-layout view="lHh Lpr lFf  container ">
    <div class="layout">
      <header class="text-white">
        <div class="logo">
          <LogoNetCloudMain />
        </div>
        <div class="avatar">
            
        </div>
      </header>
    </div>
    <div class="content flex">
      <div class="navigation">
        <router-link
          v-for="link in links"
          :key="link"
          :to="link.href"
          class="text-white flex justify-center"
        >
          <q-btn class=""> {{ link.name }} </q-btn><br />
        </router-link>
      </div>
      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>
    
<script>
import LogoNetCloudMain from "src/components/logo/LogoNetCloudMain.vue";

export default {
  name: "NewsFeedLayout",
  components: { LogoNetCloudMain },
  data() {
    return {
      links: [
        { name: "My Profile", href: "user/profile" },
        { name: "Feed", href: "newsfeed" },
        { name: "About", href: "about" },
      ],
    };
  },
};
</script>
  
  <style lang="scss">
.q-layout {
  padding-top: 50px;
  padding-left: 50px;
}

.layout {
  max-width: auto;
  width: 100%;
}
header {
  width: 100%;
}

.navigation {
  max-width: 300px;
  max-height: 500px;
  width: 300px;
  border: 1px solid #46b0e4;
  border-radius: 10px;
}
</style>
  
  