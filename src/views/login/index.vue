<template>
  <div class="app">
    <p>我是登录页</p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <p>下面是组件</p>
    <HelloWorld />
  </div>
</template>
<script>
import HelloWorld from "../../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  created() {
    this.$api.first.firstApi("111");
  },
};
</script>
<style scoped lang="less">
.app{
  width: 1920*@vw;
  height: 900*@vw;
  background-color: rgba(228, 109, 228, 0.3);
}
</style>
