<template>
  <div class="menu" id="menu">
    <div class="container">
      <ul>
        <li>
          <router-link to="/" class="active"><i class="fas fa-home"></i></router-link>
        </li>
        <li>
          <a href="#">Vào thi</a>
        </li>
        <li>
          <a href="#">Bảng vàng</a>
        </li>
        <li>
          <a href="#">Tin tức</a>
        </li>
        <li class="dropdown" @mouseover="listOne = true" @mouseleave="listOne = false">
          <a href="#">Sự kiện</a>
          <transition name="fade">
            <ul class="dropdown-menu" v-if="listOne" @click="listOne = false">
              <li><a href="#">Tôi yêu Việt Nam</a></li>
              <li><a href="#">1000 điểm tháng 10</a></li>
              <li><a href="#">Hướng dẫn giải bài tập</a></li>
              <li><a href="#">Đáp án sách trạng nguyên</a></li>
              <li><a href="#">Đố vui cuối tuần</a></li>
            </ul>
          </transition>
        </li>
        <li>
          <a href="#">Bài giảng Online</a>
        </li>
        <li>
          <a href="#">Luyện tập</a>
        </li>
        <li>
          <a href="#">Giải bài tập</a>
        </li>
        <li>
          <a href="#">Thế giới game</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  data () {
    return {
      listOne: false
    }
  }
}
</script>

<style scoped>

</style>
