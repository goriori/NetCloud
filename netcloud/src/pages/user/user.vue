<template>
  <div class="text-white  flex  container">
    <div>
      <LogoNetCloudMain class="q-mb-xl q-mt-xl"/>
      <div class="blocks flex row">
        <BlockInformations/>
        <BlockTools/>
      </div>
    </div>
    <UserProfile />
  </div>
</template>


<script>
import UserProfile from "./components/profile/profile.vue";
import BlockInformations from './components/blocks/Informations/informations.vue'
import BlockTools from './components/blocks/tools/tools.vue'
import LogoNetCloudMain from "src/components/logo/LogoNetCloudMain.vue";
export default {
  name: "UserPage",
  components: { UserProfile,BlockInformations ,BlockTools,LogoNetCloudMain},
};
</script>


<style lang="scss" scoped>

.blocks {
    div {
        margin-right: 30px;
    }
  
}
</style>