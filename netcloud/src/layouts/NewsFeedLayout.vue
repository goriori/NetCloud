<template>
  <q-layout view="lHh Lpr lFf  container ">
    <div class="layout">
      <header class="text-white">
        <div class="logo">
          <LogoNetCloudMain />
        </div>
        <div class="avatar"></div>
      </header>
    </div>
    <div class="content flex q-mt-xl">
      <NavigationMain />
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
import NavigationMain from "src/components/navigation/navigation.vue";
export default {
  name: "NewsFeedLayout",
  components: { LogoNetCloudMain, NavigationMain },
  data() {
    return {};
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


</style>
  
  