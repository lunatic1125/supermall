<template>
  <div class="tabbar-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-img">图片</slot>
    </div>
    <!-- 选中模式 -->
    <div v-else>
      <slot name="item-active-img">图片</slot>
    </div>
    <div :style="ActiveStyle">
      <slot name="item-text">首页</slot>
    </div>
    <!-- <div :class="{ active: isActive }">
      <slot name="item-text">首页</slot>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  // 动态决定
  props: {
    path: String,
    isActiveColor: {
      type: String,
      default: "#30c5f1",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      // 当前活跃的地址中是否包含当前的地址,eg /home
      ///home -> /home  true
      ///home -> /sale  false
      ///home -> /shop  false
      ///home -> /profile  false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    ActiveStyle() {
      return this.isActive ? { color: this.isActiveColor } : {};
    },
  },
  methods: {
    btnClick() {
      // console.log(this.path);
      // 跳转到指定的路由
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  height: 48px;
  margin-top: 2px;

  font-size: 12px;
  text-align: center;
}
.tabbar-item img {
  width: 28px;
  height: 28px;
  vertical-align: top;
  margin-bottom: 1px;
}
/* .active {
  color: #30c5f1;
} */
</style>