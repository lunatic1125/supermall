<template>
  <div class="recommend">
    <div :key="item.sort" v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recomendView",
  props: {
    recommends: Array,
    default() {
      return [];
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>