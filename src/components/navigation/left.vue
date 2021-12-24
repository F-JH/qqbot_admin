<template>
  <a-menu theme="dark" mode="inline" style="font-size: large">
    <a-sub-menu theme="dark">
      <template #icon><message-outlined /></template>
      <template #title>撤回消息</template>
      <a-menu-item @click="test">群组设置</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { MessageOutlined } from '@ant-design/icons-vue';
import axios from "axios";

export default {
  name: "",
  components: {
    MessageOutlined
  },
  methods: {
    test(){
      axios.get('/api/getIndex').then(res=>{
        console.log(res.data);
      });
    }
  }
}
</script>

<style scoped>

</style>