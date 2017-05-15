<template>
  <div id="app">

    <div class="content">
      <div class="preview">
        <div class="setting">
          <p>Total items: <span>{{list.length}}</span></p>
          <p>Item height: <span>{{data.height}}px</span></p>
          <p>Above items: <span>{{data._above}}</span></p>
          <p>Below items: <span>{{data._below}}</span></p>
          <p>Rows in window: <span>{{data.displayCount + 1}}-{{(data.displayCount + data._rowsInWindow) > list.length ? list.length: (data.displayCount + data._rowsInWindow)}}</span></p>
          <p><span>{{data._rowsInWindow * 4}}</span> items from <span>{{data.from}}</span> to <span>{{data.to}}</span></p>
          <p>Top height: <span>{{data.lineTopHeight}}px</span></p>
          <p>Bottom Height: <span>{{data.lineBottomHeight}}px</span></p>
          <p>Will load more items: <span>{{!data.canLoadmore}}</span></p>
        </div>
        <div class="preview-content">
          <vue-list :list.sync='list' :dispatchData="setData"></vue-list>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import vueList from 'components/vue-list-normal';

window.COUNT = 1;

export default {
  name: 'app',
  data() {
    return {
      list: [],
      data: {}
    }
  },
  created() {
    for(var i = 0; i < 200; i++) {
      this.list.push({
        title: 'item ' + COUNT++
      });
    }
  },
  methods: {
    setData(data) {
      this.data = data;
    }
  },
  components: {
    vueList
  }
}
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  font-size: 48px;
  .content{
    width: 100%;
    height: 650px;
    &>div{

    }
    .preview{
      .preview-content{
        width: 100%;
        height: 464px;

        background: #fff;
        overflow-y: scroll;
      }
    }
    .setting{
      p {display:inline;}
      span{
        color: #48B884;
      }
    }
  }
}
</style>
