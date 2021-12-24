<template>
  <a-layout class="index-con">
    <a-layout-header style="padding: 0 50px 0 0;">
<!--        这里放顶部导航栏-->
      <top></top>
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" width="250">
<!--        这里放侧边栏-->
        <left></left>
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref } from 'vue';

import left from '../components/Navigation/left';
import top from '../components/Navigation/top.vue';

export default {
  name: "",
  data(){
    return {
      collapsed: ref<Boolean>(false),
    }
  },
  components: {
    left,
    top
  }
}
</script>

<style scoped>
.index-con{
  height: 100%;
  width: 100%;
}
</style>