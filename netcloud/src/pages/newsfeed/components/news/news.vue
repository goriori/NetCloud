<template>
  <div class="news q-mt-md q-pt-md q-pl-md">
    <p>NEWS</p>
    
      <div class="q-pa-md row">
        <q-card
          class="my-card col-12 bg-primary q-mt-md"
          v-for="item in 30"
          :key="item"
        >
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            :height="150"
          />
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>
   
  </div>
</template>

<script>
export default {
  name: "NewsBlock",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.news {
  border: 1px solid #46b0e4;
  border-radius: 10px;
}

.q-card  {
  max-width: 1000px;
}
</style>