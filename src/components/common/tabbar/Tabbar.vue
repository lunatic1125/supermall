<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  components: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  background-color: #f8f8f8;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.08);
}
</style>