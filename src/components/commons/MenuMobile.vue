<template>
  <div id="menu-mobile">
    <div class="menubar-mobile" id="menubar-mobile">
      <a href="#" v-on:click="show = !show">
        <i class="fas fa-bars"></i>
      </a>
    </div>
    <!-- end menu bar mobile-->

    <transition name="slide-fade">
      <div class="listmenubar-mobile" v-if="show">
        <a href="#" class="closemenu-mobile" v-on:click="show = !show"><i class="fal fa-times"></i></a>
        <div class="info-user-mobile">
          <a href="#">
            <img src="@/assets/images/ava-boy.png" alt="" width="100" class="avatar">
          </a>
          <p class="name-user">Binhnguyen0807</p>
          <p class="date-vip"><i class="fas fa-user"></i>VIP: 235 ngày</p>
          <p><a href="#"> <i class="fas fa-users-cog"></i>Trang cá nhân</a></p>
          <p><a href="#"><i class="fas fa-sign-out-alt"></i>Thoát tài khoản</a>
          </p>

          <a href="#" class="recharge">Nộp học phí</a>

        </div>
        <ul class="menulist">
          <li><a href="#">Trang chủ</a></li>
          <li> <a href="#">Vào thi</a></li>
          <li><a href="#">Bảng vàng</a></li>
          <li><a href="#">Tin tức</a></li>
          <li class="dropdown"><a href="#" v-on:click="display_drop_menu()">Sự kiện</a>
            <ul class="drop_menu">
              <li><a href="#">Tôi yêu Việt Nam</a></li>
              <li><a href="#">1000 điểm tháng 10</a></li>
              <li><a href="#">Hướng dẫn giải bài tập</a></li>
              <li><a href="#">Đáp án sách trạng nguyên</a></li>
              <li><a href="#">Đố vui cuối tuần</a></li>
            </ul>
          </li>
          <li><a href="#">Bài giảng Online</a></li>
          <li><a href="#">Luyện tập</a></li>
          <li><a href="#">Giải bài tập</a></li>
          <li><a href="#">Thế giới game</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MenuMobile',

  data () {
    return {
      show: false
    }
  },

  methods: {
    display_drop_menu () {
      let dropMenu = event.target.parentElement.getElementsByClassName('drop_menu')[0]
      let dropMenus = document.getElementsByClassName('drop_menu')
      dropMenu.forEach((e) => {
        if (e !== dropMenus) {
          e.classList.remove('display')
        }
      })

      let list = document.getElementById('menu').getElementsByTagName('li')
      if (list) {
        list.forEach((e) => {
          e.style.marginTop = '0'
        })
      }

      if (dropMenu.classList.contains('display')) {
        dropMenu.classList.remove('display')
      } else {
        dropMenu.classList.add('display')
      }
      // (!dropMenu.classList.contains('display')) ? dropMenu.classList.add('display') : dropMenu.classList.remove('display')
    }
  }
}
</script>

<style scoped>

</style>
