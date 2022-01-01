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
        <a-breadcrumb style="float: left;margin-left: 20px;">
          <a-breadcrumb-item v-for="item in paths"><a @click="goto(item.path)">{{item.name}}</a></a-breadcrumb-item>
        </a-breadcrumb>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ref, computed, getCurrentInstance } from 'vue';

import left from '../components/Navigation/left';
import top from '../components/Navigation/top.vue';

export default {
  name: "",
  methods:{
    goto(path){
      this.$router.push(path);
    }
  },
  setup(pros, context){
    const collapsed = ref<Boolean>(false);
    const paths = computed(()=>{
      const { ctx } = getCurrentInstance();
      let pathList = ctx.$root.$router.currentRoute.value.fullPath.split('/');
      let result = [];
      for(let i=1;i<pathList.length; i++){
        result.push({name: pathList[i], path: pathList.slice(0, i+1).join('/')});
      }
      return result;
    });
    return { collapsed, paths };
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