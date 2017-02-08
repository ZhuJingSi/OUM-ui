<template>
  <div id="client">
    <!-- Linux -->
    <el-row :gutter="20" id="linux">
      <el-col :md="4">
        <h3>Linux</h3>
      </el-col>
      <el-col :md="20">
        <el-tag>Ubuntu Desktop</el-tag>
        <pre>apt-get install network-manager-openvpn-gnome # then create new connection by import configuration file</pre>
        <el-tag>Debian/Ubuntu</el-tag>
        <pre>apt-get install openvpn</pre>
        <el-tag>CentOS/Fedora</el-tag>
        <pre>yum install openvpn</pre>
        <el-tag>OpenWrt</el-tag>
        <pre>opkg install openvpn-openssl</pre>
      </el-col>
    </el-row>
    <!-- Windows -->
    <el-row :gutter="20" id="windows">
      <el-col :md="4">
        <h3>Windows</h3>
      </el-col>
      <el-col :md="20">
        <ul class="list-blue-disc">
          <li><a href="https://www.sparklabs.com/viscosity/download/" target="_blank">Viscosity</a> 需要License($9)，使用方便 <el-tag type="primary">推荐</el-tag></li>
          <li><a href="https://sourceforge.net/projects/securepoint/" target="_blank">Securepoint SSL VPN Client</a> 免费，相比较官方版本更好用，但是有个bug，需要手工调整TAP网卡设备的路由Metric静态值为1才能正确的使用VPN下发的DNS</li>
          <li><a href="https://openvpn.net/index.php/download/community-downloads.html" target="_blank">OpenVPN Community</a> 免费，官方版本，图形化能力较弱，使用较麻烦，仅支持将配置文件放置到程序安装目录下的config目录内才可以被识别</li>
        </ul>
      </el-col>
    </el-row>
    <!-- MacOS -->
    <el-row :gutter="20" id="macos">
      <el-col :md="4">
        <h3>MacOS</h3>
      </el-col>
      <el-col :md="20">
        <ul class="list-blue-disc">
          <li><a href="https://www.sparklabs.com/viscosity/download/" target="_blank">Viscosity</a> 需要License($9), 使用方便 <el-tag type="primary">推荐</el-tag></li>
          <li><a href="https://tunnelblick.net/downloads.html" target="_blank">Tunnelblick</a> 免费</li>
        </ul>
      </el-col>
    </el-row>
    <!-- Android -->
    <el-row :gutter="20" id="android">
      <el-col :md="4">
        <h3>Android</h3>
      </el-col>
      <el-col :md="20">
        <ul class="list-blue-disc">
          <li><a href="https://play.google.com/store/apps/details?id=de.blinkt.openvpn" target="_blank">OpenVPN for Android</a> 免费，第三方开源软件，比官方客户端好用很多 <el-tag type="primary">推荐</el-tag></li>
          <li><a href="http://www.apkmirror.com/apk/arne-schwabe/openvpn-for-android/" target="_blank">OpenVPN for Android (From apkmirror.com)</a></li>
          <li><a href="https://apkpure.com/openvpn-for-android/de.blinkt.openvpn" target="_blank">OpenVPN for Android (From apkpure.com)</a></li>
        </ul>
        <br>
        <ul class="list-blue-disc">
          <li><a href="https://play.google.com/store/apps/details?id=net.openvpn.openvpn" target="_blank">OpenVPN Connect</a> 免费，官方客户端</li>
          <li><a href="http://www.apkmirror.com/apk/openvpn/openvpn-connect/" target="_blank">OpenVPN Connect (From apkmirror.com)</a></li>
          <li><a href="https://apkpure.com/openvpn-connect/net.openvpn.openvpn" target="_blank">OpenVPN Connect (From apkpure.com)</a></li>
        </ul>
      </el-col>
    </el-row>
    <!-- iOS -->
    <el-row :gutter="20" id="ios">
      <el-col :md="4">
        <h3>iOS</h3>
      </el-col>
      <el-col :md="20">
        <div>
          <a href="https://itunes.apple.com/us/app/openvpn-connect/id590379981" target="_blank">OpenVPN Connect</a> 免费，官方客户端，也是唯一可用的客户端，不过该软件没有在中国区上架，需要先注册美国区的iTunes帐号，并使用美国区帐号登录app store，切换app store地区为美国后才可以搜索/下载到
        </div>
        <div>
          <h4>美国区Apple帐号注册</h4>
          <p>如果你拥有国际支付手段，注册美国区的iTunes帐号就非常简单，保证app store当前处于美国区的状态下进行帐号注册即可</p>
          <p>
            如果你没有国际支付手段，注册美国区的iTunes帐号就需要取个巧：
            <ol>
              <li>安装iTunes客户端并打开，如果已经登录了iTunes，请先注销帐号</li>
              <li>保证app store当前处于美国区的状态</li>
              <li>点击获取任意一款免费应用，触发账户注册指引</li>
              <li>在上一步的帐号注册指引界面上进行帐号注册即可</li>
            </ol>
          </p>
        </div>
        <div>
          <h4>在iOS上共享配置文件也相对麻烦，如果你有Mac，相信你知道该怎么做，否则可以参考以下步骤</h4>
          <ol>
            <li>下载<a href="https://itunes.apple.com/cn/app/sou-gou-liu-lan-qi-kan-xin/id548608066" target="_blank"></a>搜狗浏览器</li>
            <li>使用搜狗浏览器打开此页面，点击iOS配置的下载链接，自动保存</li>
            <li>在搜狗浏览器的下载功能区内找到上一步下载好的文件，使用其他应用程序打开</li>
            <li>如果你已经安装好了OpenVPN Connect客户端，选择使用该程序打开此配置文件即可</li>
          </ol>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Client',
  };
</script>

<style lang="scss">
  #client {
    margin: 2em 0;
    h3 {
      margin: 0;
    }
    pre {
      background-color: #f8f8f8;
      line-height: 1.6em;
      padding: 8px 10px;
      border-radius: 4px;
      white-space: normal;
    }
    .el-row {
      margin-bottom: 2em;
    }
    #linux,
    #windows,
    #macos,
    #android,
    #ios {
      padding-top: 110px;
      margin-top: -110px;
    }
    @media (max-width: 768px) {
      #linux,
      #windows,
      #macos,
      #android,
      #ios {
        padding-top: 140px;
        margin-top: -140px;
      }
    }
  }
</style>
