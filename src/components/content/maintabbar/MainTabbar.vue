<template>
  <tabbar>
    <!-- 首页 -->
    <tabbar-item path="/home" isActiveColor="#30c5f1">
      <template v-slot:item-img>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:item-active-img>
        <img src="~assets/img/tabbar/home-active.svg" alt="" />
      </template>
      <template v-slot:item-text>首页</template>
    </tabbar-item>
    <!-- 分类 -->
    <tabbar-item path="/sale" isActiveColor="#30c5f1">
      <template v-slot:item-img>
        <img src="~assets/img/tabbar/sale.svg" alt="" />
      </template>
      <template v-slot:item-active-img>
        <img src="~assets/img/tabbar/sale-active.svg" alt="" />
      </template>
      <template v-slot:item-text>分类</template>
    </tabbar-item>
    <!-- 购物车 -->
    <tabbar-item path="/shop" isActiveColor="#30c5f1">
      <template v-slot:item-img>
        <img src="~assets/img/tabbar/shop.svg" alt="" />
      </template>
      <template v-slot:item-active-img>
        <img src="~assets/img/tabbar/shop-active.svg" alt="" />
      </template>
      <template v-slot:item-text>购物车</template>
    </tabbar-item>
    <!-- 我的 -->
    <tabbar-item path="/profile" isActiveColor="#30c5f1">
      <template v-slot:item-img>
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:item-active-img>
        <img src="~assets/img/tabbar/profile-active.svg" alt="" />
      </template>
      <template v-slot:item-text>我的</template>
    </tabbar-item>
  </tabbar>
</template>
<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from "components/common/tabbar/TabbarItem.vue";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>