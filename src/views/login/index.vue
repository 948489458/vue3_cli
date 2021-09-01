<template>
  <div class="div">
    <h1>我是标签1</h1>
    <h2>我是标签2</h2>
    <h3>我是标签3</h3>
    <p>我是登录页</p>
    <a href=""></a>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <p>下面是组件</p>
    <p>下面是组件</p>
    <p>下面是组件</p>
    <p>下面是组件</p>
    <HelloWorld />
    <span class="disabled">我是测试选择器继承样式的</span>
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
<style scoped lang="scss">
$rootColor: rgb(240, 14, 14);
$root: 1/1920*100vh;
.div {
  background-color: rgba(228, 109, 228, 0.3);
  height: 1920*$root;
  p {
    color: $rootColor;
  }
  &:hover {
    background-color: #fff;
  }
  h1,
  h2,
  h3 {
    color: yellowgreen;
  }
}
h1 ~ p {
  border-top: 1px solid rgb(40, 8, 223);
}
.disabled {
  color: gray;
  // @extend a;
}
</style>
