<!--头部菜单-->
<template>
  <div class="logo" @click="toIndex"><qq-circle-filled style="font-size: xxx-large;color: #bfbfbf;margin: 8px 40px 8px 40px;" /></div>
  <a-menu mode="horizontal" v-model:selectedKeys="current" theme="dark" style="display: inherit;">
    <a-sub-menu key="user" class="user-menu" theme="dark">
      <template #icon>
        <user-outlined />
      </template>
      <template #title>{{ nickname }}</template>
      <a-menu-item key="userinfo" @click="userInfo">用户信息</a-menu-item>
      <a-menu-item key="settings" @click="settings">设置</a-menu-item>
      <a-menu-item key="logout" @click="logout">退出</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { ref, reactive } from 'vue';
import { QqCircleFilled, UserOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

export default {
  name: "top",
  data(){
    return {
      current: reactive(['user']),
      nickname: ref(''),
      userMenu: 'user-menu'
    }
  },
  components: {
    QqCircleFilled,
    UserOutlined
  },
  methods: {
    toIndex(){
      console.log("to index");
      this.$router.push({path: '/index'});
    },
    logout(){
      console.log("logout");
      // 请求服务端退出逻辑
      localStorage.removeItem('userInfo');
      this.$router.push({path: '/login'})
    },
    userInfo(){
      console.log("userInfo");
      message.info('还未开发，敬请期待！');
    },
    settings(){
      console.log("settings");
      message.info('还未开发，敬请期待！');
    }
  },
  created() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.nickname = userInfo.nickname;
  }
}
</script>

<style>
.logo {
  float: left;
  width: 250px;
  height: 100%;
  margin: 0 24px 0 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
}
.user-menu{
  float: right;
  /*position:absolute;*/
  /*right:0px;*/
}
</style>