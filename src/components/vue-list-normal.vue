<template lang="html">
  <div class="vue-list" @scroll="handleScroll">
    <ul>
      <li class="line-top" :style="{height: lineTopHeight +'px'}"></li>
      <li v-for="item in previewList">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>{{item.title}}</span>
      </li>
      <li class="line-bottom" :style="{height: lineBottomHeight +'px'}"></li>
    </ul>
    <div class="load-more-gif">loading...</div>
  </div>
</template>

<script>

export default {
  name: 'vue-list',
  props: {
    list: {
      type: Array,
      required: true,
      default: [],
      twoWays: true
    },
    height: {
      type: Number,
      default: 44
    },
    canScroll: {
      type: Boolean,
      default: true
    },
    dispatchData: {
      type: Function
    }
  },
  data() {
    return {
      lastScrollTop: null,
      distance: 44,
      lineTopHeight: 0,
      lineBottomHeight: 0,
      canLoadmore: true,
      previewList: [],
      displayCount: 0
    }
  },
  mounted () {
    this.initData();
    this.handleScroll();
  },
  methods: {
    initData() {
      // init all data
      this._rowsInWindow = Math.ceil(this.$el.offsetHeight / this.height),
      this._above = this._rowsInWindow * 2,
      this._below = this._rowsInWindow,
      this._max = this._rowsInWindow * this.height;
    },
    handleScroll() {
      let _scrollTop = this.$el.scrollTop,
          _height = this.$el.querySelectorAll('ul')[0].offsetHeight,
          _contentHeight = this.$el.offsetHeight;

      // Counts the number of rows on the current screen
      if (_scrollTop / this.height - Math.floor(_scrollTop / this.height) > 0.5) {
        this.displayCount = Math.ceil(_scrollTop / this.height);
      } else {
        this.displayCount = Math.floor(_scrollTop / this.height);
      }

      // if the maximum height is exceeded, reset the previewList
      if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > this._max) {
          this.lastScrollTop = _scrollTop;
      } else {

          if (_height - _scrollTop <= this._max) {
            this.canScroll && this.loadmore(0, this.previewList.length + this._rowsInWindow * 4);
          }
          return;
      }

      if (!this.previewList.length)
        this.resetPreviewList(0, this.previewList.length + this._rowsInWindow * 4);

    },
    loadmore(from, to) {
      if (!this.canLoadmore) return;
      this.canLoadmore = false;
      // fetch mock
      setTimeout(() => {

        this.resetPreviewList(from, to);
        this.handleScroll();

        this.canLoadmore = true;
      }, 2000)
    },
    resetPreviewList(from, to) {
      // reset previewList
      this.previewList = [];
      for (; from < to; from++) {
          this.previewList.push({
            title: 'item ' + from
          })
      }
    }
  },
  components: {}
}
</script>

<style lang="less">
.vue-list{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::scroll-bar{
    width: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li{
      text-decoration: none;
      height: 44px;
      font-size: 48px;
      line-height: 3;
      text-align: left;
      padding-left: 15px;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      background: #fff;
      &.line-top, &.line-bottom{
        border-bottom: 0;
      }
    }
  }
  .load-more-gif{
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    background: #fff;
    border-top: none;
    color: #48B884;
  }
}
</style>
