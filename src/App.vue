<template>
  <div id="app">
    <head-bar></head-bar>
    <div class="doc">
      <div class="left-nav"><left-nav></left-nav></div>
      <div class="content-block"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
  import HeadBar from './components/HeadBar';
  import LeftNav from './components/LeftNav';

  export default {
    name: 'app',
    components: {
      LeftNav,
      HeadBar,
    },
  };
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #34495e;
    line-height: 2em;
    .doc {
      padding: 5em 2em 2em;
    }
    a {
      color: #58B7FF;
    }
    ul.list-blue-disc {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        &::before {
          content: "• ";
          color: #58B7FF;
        }
      }
    }
    .left-nav {
      position: fixed;
      top: 110px;
      width: 260px;
    }
    .content-block {
      margin-left: 300px;
    }
  }
  @media (max-width: 768px) {
    #app {
      .doc {
        padding: 0;
      }
      .left-nav {
        width: 100%;
        top: 60px;
        z-index: 1;
      }
      .content-block {
        margin: 0;
        padding: 110px 2em 0;
      }
    }
  }
</style>
