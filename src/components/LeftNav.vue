<template>
  <el-menu :default-active="$route.path" :mode="screenWidth < 768 ? 'horizontal' : 'vertical'" :router="true">
    <el-menu-item index="/confFile">配置文件下载</el-menu-item>
    <el-menu-item index="/otp">OTP 验证器下载</el-menu-item>
    <el-submenu index="">
      <template slot="title">客户端程序下载</template>
      <el-menu-item index="/client#linux">Linux</el-menu-item>
      <el-menu-item index="/client#windows">Windows</el-menu-item>
      <el-menu-item index="/client#macos">MacOS</el-menu-item>
      <el-menu-item index="/client#android">Android</el-menu-item>
      <el-menu-item index="/client#ios">IOS</el-menu-item>
    </el-submenu>
    <el-menu-item index="/attention">用户连接注意事项</el-menu-item>
  </el-menu>
</template>

<script>
  /* global document, window */
  export default {
    name: 'LeftNav',
    data() {
      return {
        screenWidth: document.body.clientWidth,
      };
    },
    mounted() {
      const that = this;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    },
    watch: {
      screenWidth(val) {
        if (!this.timer) {
          this.screenWidth = val;
          this.timer = true;
          const that = this;
          setTimeout(() => {
            that.timer = false;
          }, 400);
        }
      },
    },
  };
</script>

<style lang="scss">
  .el-menu {
    a {
      text-decoration: none;
      color: #58B7FF;

      &.router-link-active,
      &:hover {
        color: #58B7FF;
      }
    }
  }
</style>
