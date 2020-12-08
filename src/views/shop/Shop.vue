<template>
  <div id="shop">
    <nav-bar>
      <template v-slot:center>购物车</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Shop",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>