<template>
  <div class="search row justify-between">
    <q-input
      dark
      dense
      standout
      v-model="text"
      outlined
      input-class="text-left"
      class=" col-11"
      placeholder="Seacrh"
    >
      <q-icon v-if="text === ''" name="search" size="25px" class="q-pt-sm" />
      <q-icon
        v-else
        name="clear"
        class="cursor-pointer text-center q-pt-sm"
        @click="text = ''"
        size="25px"
      />
    </q-input>


    <q-btn color="primary" class="filters">
      <q-icon name="tune"></q-icon>
      <q-menu transition-show="scale" transition-hide="scale">
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Filter 1</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Filter 2</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Filter 3</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    
  </div>
</template>

<script>
export default {
  name: "SearchBlock",
  data() {
    return {
      text: "",
    };
  },
};
</script>


<style lang="scss" scoped>

.search {
    padding: 20px;
    border:1px solid #46b0e4;
    border-radius: 10px;
}

</style>