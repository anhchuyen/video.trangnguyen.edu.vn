<template>
  <div class="msggroup">
    <div class="box-msg-top" v-on:click="show = !show" v-on-clickaway="clickaway">
      <i class="fas fa-envelope"></i><span class="msg">5</span>
    </div>
    <div class="short-noti-top" v-if="show">
      <div class="title-noti-top">
        Tin nhắn
      </div>
      <div class="list-notification" id="scrollbar">
        <ul>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/cho.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/cho.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/meo.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/ga.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Hoàng Văn Bình</span>
                <span class="shortcontent-chatbox">Vâng anh lạnh quá anh ah</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/khi.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/khi.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/khi.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
            </div>
          </li>
          <li>
            <div class="user-chatbox">
              <div class="ava-chatbox">
                <img src="@/assets/images/khi.png" alt="" width="50">
              </div>
              <div class="content-chatbox">
                <span class="name-chatbox">Tung nguyen viet</span>
                <span class="shortcontent-chatbox">Vâng anh</span>
              </div>
              <div class="time-chatbox">
                <span>06:10</span>
              </div>
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
  name: 'Message',

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
