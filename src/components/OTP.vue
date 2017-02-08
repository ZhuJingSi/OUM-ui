<template>
  <div id="otp">
    <div class="tip">
      Android 上只支持 FreeOTP Authenticator, iOS 上推荐 Google Authenticator。
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="4">
        <h3>Android</h3>
      </el-col>
      <el-col :xs="24" :sm="20">
        <ul class="list-blue-disc">
          <li><a href="https://play.google.com/store/apps/details?id=org.fedorahosted.freeotp" target="_blank">FreeOTP Authenticator</a></li>
          <li><a href="http://www.apkmirror.com/apk/red-hat/freeotp-authenticator/" target="_blank">FreeOTP Authenticator (From apkmirror.com)</a></li>
          <li><a href="https://apkpure.com/freeotp-authenticator/org.fedorahosted.freeotp" target="_blank">FreeOTP Authenticator (From apkpure.com)</a></li>
          <li>Google Authenticator <el-tag type="gray">不适配</el-tag></li>
        </ul>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="4">
        <h3>IOS</h3>
      </el-col>
      <el-col :xs="24" :sm="20">
        <ul class="list-blue-disc">
          <li><a href="https://itunes.apple.com/cn/app/google-authenticator/id388497605" target="_blank">Google Authenticator</a> <el-tag type="primary">推荐</el-tag></li>
          <li><a href="https://itunes.apple.com/cn/app/freeotp-authenticator/id872559395" target="_blank">FreeOTP Authenticator</a></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'OTP',
  };
</script>

<style lang="scss">
  #otp {
    margin: 2em 0;
    h3 {
      margin: 0;
    }
    .tip {
      padding: 12px 24px 12px 30px;
      margin-bottom: 2em;
      border-left: 4px solid #f66;
      background-color: #f8f8f8;
      position: relative;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      &::before {
        position: absolute;
        top: 14px;
        left: -12px;
        background-color: #f66;
        color: #fff;
        content: "!";
        width: 20px;
        height: 20px;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
        font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
      }
    }
    .el-row {
      margin-bottom: 2em;
    }
  }
</style>
