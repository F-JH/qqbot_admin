import { createVNode } from "vue";
import * as $Icon from '@ant-design/icons-vue';

// 动态返回Icon组件
export const Icon = (props)=>{
    const { icon } = props;
    return createVNode($Icon[icon]);
};