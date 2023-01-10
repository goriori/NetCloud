<template>
  <div class="container flex   ">
    <q-img
      src="../../assets/LogoMain.png"
      spinner-color="white"
      class=""
    />
    <p class="logoName flex  justify-center ">NetCloud</p>
  </div>
</template>

<script>
export default {
  name: "LogoNetCloudMain",
};
</script>

<style lang="scss" scoped>
.container {
    max-width:352px;

}
.q-img {
    max-width: 190px;
    max-height: 77px;
    margin-right: 50px;
}

.logoName {
  margin:0px;
  font-size: 30px;
    align-content: center;
   
}
</style>