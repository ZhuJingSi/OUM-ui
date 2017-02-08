<template>
  <div id="head-bar">
    Welcome to OUM(OpenVPN User Management)!
    <div class="github">
      <a href="https://github.com/CJey/oum" target="_blank">
        <svg>
          <use xlink:href="#icon_github">
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeadBar',
  };
</script>

<style lang="scss">
  #head-bar {
    position: fixed;
    width: 100%;
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    z-index: 1;
    background-color: #58B7FF;
    .github {
      position: absolute;
      top: 0;
      right: 2em;
      svg {
        display: block;
        margin-top: 18px;
        fill: #fff;
        width: 1em;
        height: 1em;
        cursor: pointer;
        border-radius: 50%;
        transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
        &:hover {
          box-shadow: 0 0 1px 5px rgba(255, 255, 255, 0.4), 0 0 1px 10px rgba(255, 255, 255, 0.1), 0 0 1px 15px rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
</style>
