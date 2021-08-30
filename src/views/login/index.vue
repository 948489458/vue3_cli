<template>
  <div>
    <p>我是登录页</p>
    <p>下面是组件</p>
    <HelloWorld/>
  </div>
</template>
<script>
import HelloWorld from '../../components/HelloWorld.vue'
export default {
    components:{
        HelloWorld
    },
    created() {
        this.$api.first.firstApi("111")
        window.console.log('this.vuex',this.$store)
    },
};
</script>
<style></style>
