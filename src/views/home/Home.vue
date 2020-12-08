<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>首页</template>
    </nav-bar>
    <swiper></swiper>
    <recomend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" />
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import RecomendView from "./childComps/recomendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import TabControl from "components/content/tabcontrol/TabControl.vue";
import { getHomeMultidata } from "networks/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    RecomendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  // 生命周期函数创建之前获取数据
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      // console.log(res.data.data);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    // 上边请求数据是异步操作，会先打印
    // console.log(this.result);
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tink);
  color: #fff;
  /* 固定在头部 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>