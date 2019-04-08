<template>
  <div class="list-all-video">
    <div class="toplist-all-video">
      <div class="more">
        <a href="#">Xem thêm »</a>
      </div>
      <div class="title-cate-video">
        <h2> {{title}} </h2>
      </div>
    </div>
    <div v-show="list && list.length > 0" class="list-item-video">
      <div v-for="(item, index) in list" class="box-video-news" :key="index">
        <a @click="play(item)" href="javascript:void(0);">
          <img :src="item.thumb" :alt="item.name"><i class="fas fa-play-circle"></i>
        </a>
        <h3><a @click="play(item)" href="javascript:void(0);">{{item.name}} </a></h3>
        <span class="date-news">{{item.duration_view}}</span>
        <span class="view-news"><i class="fas fa-eye"></i>123</span>
        <span class="comt-news"><i class="fas fa-comment-alt"></i>5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListOther',
  props: ['title'],

  data () {
    return {
      list: []
    }
  },

  methods: {
    setData (list) {
      this.list = list
    },

    play (info) {
      this.$emit('play', info)
    }
  }
}
</script>

<style scoped>

</style>
