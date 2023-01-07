<template>
  <div class="informations q-pt-md q-pl-lg">
    <p class="header">Informations</p>
    <div class="description flex row">
      <p v-for="desc in descriptions" :key="desc">
        {{ `${desc.name}: ${desc.value}` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockInformations",
  data() {
    return {
      descriptions: [
        { name: "Followers", value: "255M" },
        { name: "Status", value: "Paintner" },
        { name: "Works", value: 25 },
        { name: "Likes", value: "1.5K" },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.informations {
  
  max-width: 370px;
  width: 370px;
  max-height: 156px;
  height: 156px;
  border: 1px solid #46b0e4;
  border-radius: 30px;

  .header {
    font-size: 20px;
  }
  .description {
    p {
      margin-right: 10px;
      font-size: 15px;
    }
  }
}
</style>