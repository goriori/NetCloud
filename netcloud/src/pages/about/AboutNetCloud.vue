<template>
  <div class="text-white">
    <div class="logg flex text-center ">
      <logoNetCloudVue />
      <p class="text-h4 text-center q-mt-md q-ml-md">NetCloud</p>
    </div>
    <div class="info flex wrap">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
    <div class="sliders">
      <SliderPaint />
    </div>
  </div>
</template>

<script>
import SliderPaint from "../about/components/SliderPaint.vue";
import logoNetCloudVue from "src/components/logo/logoNetCloud.vue";
export default {
  name: "AboutNetCloud",
  data() {
    return {};
  },
  components: { SliderPaint, logoNetCloudVue },
};
</script>

<style lang="scss" scoped>
.info{
    width: auto;
}
</style>