<template>
  <div id="sale">
    <nav-bar>
      <template v-slot:center>分类</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Sale",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>