<template>
  <div id="attention">
    <ol>
      <li>最常用的方式即为“用户名 + otp code”登录，没有高级需求请务必忽略以下说明，避免产生困惑</li>
      <li>username 的表述格式为：<el-tag type="gray">[!]&lt;user&gt;[%&lt;device&gt;]</el-tag>, 感叹号用于告知服务器不要修改本机的默认网关和默认 dns, 百分号用于分隔用户和设备, device 不指定则表示默认设备（设备名 default）</li>
      <li>password 的表述格式为：[&lt;otp code&gt;][%&lt;static password&gt;]，支持三种组合，即“仅 code”, “仅 static”, “code + static”，OUM 默认支持“仅 code”，如果用户启用了 static，使用 static 时必须要在 static 开头加上 %</li>
      <li>同一 user 的同一 device 仅允许同时在线一个连接（即使使用不用的配置）</li>
      <li>用户默认仅有一个设备，即默认设备 default，经管理员许可后，可以创建额外的设备</li>
    </ol>
    <br>
    <h3>Tips:</h3>
    <ol>
      <li>关于 otp code 的有效期：当使用 otp code 成功登录了一个设备后，这次使用的 otp code 并不会立即失效，如果下次登录时继续使用同样的 otp code，那么：如果下次登录时所用IP地址与本次IP地址相同，则默认 15 天内有效，如果下次登录时所用 IP 地址与本次 IP 地址属于同一城市，则默认 7 天内有效，这样可以保证在较高安全性的情况下避免频繁的变更 otp code</li>
      <li>关于用户名前的感叹号用法：有些情况下，你可能仅希望连通 VPN 所在的网络，而不希望 VPN 自动重定向你系统的默认网关和默认 DNS，部分 openvpn 的客户端上可以通过自定义配置达成这个目的，但并不是所有的客户端都支持这个功能，并且有些客户端看似支持这么做，但实际上却做的不好，在这种情况下，你可以尝试在你登录的 username 最开头添加一个感叹号 ! 来让服务器帮你做掉这件事情，不过这也不是 100% 会成功的（大多数情况下可以成功），取决于你所使用的客户端</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Attention',
  };
</script>

<style lang="scss">
  #attention {
    margin: 2em 0;
  }
</style>
