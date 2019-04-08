<template>
  <div class="notigroup">
    <div class="box-noti-top" v-on:click="show = !show" v-on-clickaway="clickaway">
      <i class="fas fa-bullhorn"></i><span class="msg">5</span>
    </div>
    <div class="short-noti-top" v-if="show">
      <div class="title-noti-top">
        Thông báo
      </div>
      <div class="list-notification" id="scrollbar">
        <ul>
          <li>
            <div class="icon-noti">
              <i class="fas fa-bullhorn"></i>
            </div>
            <div class="content-noti">
              <p class="description-news">Lịch thi Tuần 31</p>
              <p class="date-news">03/04/2017 | 10:29 GMT+7</p>
            </div>
          </li>
          <li>
            <div class="icon-noti">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="content-noti">
              <p class="description-news">Với sứ mạng trở thành một phần mềm hữu ích để giúp trẻ học mầm non và tiểu học phát triển ngôn ngữ...</p>
              <p class="date-news">03/04/2017 | 10:29 GMT+7</p>
            </div>
          </li>
          <li>
            <div class="icon-noti">
              <i class="fas fa-users"></i>
            </div>
            <div class="content-noti">
              <p class="description-news">Với sứ mạng trở thành một phần mềm hữu ích để giúp trẻ học mầm non và tiểu học phát triển ngôn ngữ......</p>
              <p class="date-news">03/04/2017 | 10:29 GMT+7</p>
            </div>
          </li>
          <li>
            <div class="icon-noti">
              <i class="fab fa-hotjar"></i>
            </div>
            <div class="content-noti">
              <p class="description-news">Công bố lịch thi Trạng Nguyên cấp quốc gia...</p>
              <p class="date-news">03/04/2017 | 10:29 GMT+7</p>
            </div>
          </li>
          <li>
            <div class="icon-noti">
              <i class="fas fa-newspaper"></i>
            </div>
            <div class="content-noti">
              <p class="description-news">Với sứ mạng trở thành một phần mềm hữu ích để giúp trẻ học mầm non và tiểu học phát triển ngôn ngữ...</p>
              <p class="date-news">03/04/2017 | 10:29 GMT+7</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="viewmore-noti">
        <a href="#">Xem tất cả</a>
      </div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
  name: 'Messages',

  data () {
    return {
      show: false
    }
  },

  methods: {
    clickaway () {
      this.show = false
    }
  },

  directives: {
    onClickaway: onClickaway
  }
}
</script>

<style scoped>

</style>
