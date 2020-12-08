<template>
  <div id="profile">
    <nav-bar>
      <template v-slot:center>我的</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>