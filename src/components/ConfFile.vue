<template>
  <div id="conf-file">
    <el-row :gutter="20">
      <el-col :sm="6">
        <h4>选择协议</h4>
      </el-col>
      <el-col :sm="18">
        <el-radio-group v-model="confFile" size="large">
          <el-radio class="radio" v-for="c in confFiles" :label="c.value"
            style="display: block; margin: 5px 0;">{{c.label}}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="6">
        <h4>选择系统类型</h4>
      </el-col>
      <el-col :sm="18">
        <el-radio-group v-model="system" size="large">
          <el-radio class="radio" v-for="s in systems" :label="s.value">{{s.label}}</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <div style="margin-top: 40px;">
      <a :href="downloadLink"><el-button type="primary" size="large">下载</el-button></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ConfFile',
    data() {
      return {
        confFiles: [{
          value: 'udp',
          label: 'udp-dorm.cjey.me - 性能体验好，主流ISP网络下推荐使用',
        }, {
          value: 'tcp',
          label: 'tcp-dorm.cjey.me - 兼容性好，非主流ISP网络下推荐使用',
        }],
        confFile: 'udp',
        systems: [{
          value: 'linux',
          label: 'Linux',
        }, {
          value: 'windows',
          label: 'Windows',
        }, {
          value: 'macos',
          label: 'MacOS',
        }, {
          value: 'android',
          label: 'Android',
        }, {
          value: 'ios',
          label: 'IOS',
        }],
        system: 'linux',
      };
    },
    computed: {
      downloadLink() {
        return `https://dorm.cjey.me:1195/download/config?attach=true&os=${this.system}&dev=oum.${this.confFile}&name=${this.confFile}-dorm.cjey.me`;
      },
    },
  };
</script>

<style lang="scss">
  #conf-file {
    margin: 2em 0;
    h4 {
      margin: 0;
    }
    .el-row {
      margin-bottom: 2em;
    }
  }
</style>
