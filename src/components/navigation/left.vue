<template>
  <a-menu theme="dark" mode="inline" class="menu-left">
    <a-sub-menu v-for="submenu in navigation.data" theme="dark">
      <template #icon><Icon :icon="submenu.icon"></Icon></template>
      <template #title>{{submenu.menuname}}</template>
      <a-menu-item v-for="menuitem in submenu.menus">
        <template #icon><Icon :icon="menuitem.icon"/></template>
        <router-link :to="menuitem.url">{{menuitem.menuname}}</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { Icon } from '../../antd/antdvIcons';
import { reactive } from 'vue';
import { message } from 'ant-design-vue';

export default {
  name: "",
  components: {
    Icon
  },
  setup(){
    const iconPath = '@ant-design/icons-vue/';
    const navigation = reactive({
      data: [],
      name: ''
    });
    return { iconPath, navigation }
  },
  methods: {
  },
  created() {
    this.$axios.post('/api/config').then(res=>{
      if(res.data.code == 1002){
        this.navigation.data = res.data.resultData;
      }else{
        if(res.data.message){
          message.error(res.data.message);
        }
      }
    });
  }
}
</script>

<style scoped>
.menu-left{
  /*font-size: large;*/
  border-top: #eaeaea;
  border-top-width: 1px;
}
</style>