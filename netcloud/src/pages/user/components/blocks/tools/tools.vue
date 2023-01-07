<template>
  <div class="tools q-pt-md q-pl-lg">
    <p class="header">Tools</p>
    <div class="description row">
      <p v-for="desc in descriptions" :key="desc" :class="desc.bgcolor ">
        <span class="q-pl-sm q-pr-sm">{{ `${desc.name}` }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockTools",
  data() {
    return {
      descriptions: [
        { name: "Photoshop", bgcolor:'bg-positive'},
        { name: "Figma" , bgcolor:'bg-purple-14' },
        { name: "Blander" , bgcolor:'bg-light-blue' },
        { name: "Ilustrator", bgcolor:'bg-lime-10'},
        { name: "3DMax", bgcolor:'bg-orange-8'},

      ],
    };
  },
};
</script>


<style lang="scss" scoped>
.tools {
  
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
      border: 1px solid white;
      border-radius: 10px;
    }
  }
}
</style>