<template>
  <div class="tabcontrol">
    <div
      class="tab-item"
      :key="item + '1'"
      v-for="(item, index) in titles"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  /* 粘性粘贴 */
  position: sticky;
  top: 44px;
}
.tab-item {
  flex: 1;
}
.tab-item span {
  padding: 5px;
}
.active {
  color: var(--color-hign-text);
}
.active span {
  border-bottom: 3px solid #ff5777;
}
</style>