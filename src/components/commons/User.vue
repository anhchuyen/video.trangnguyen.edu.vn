<template>
  <div class="logout" id="user-info" @mouseover="listinfoacc = true" @mouseleave="listinfoacc = false">
    <div class="boxuser">
      <span class="iduser">ID: #12345678</span>
      <i class="ava-boy"></i> TrangNguyen2018
      <!-- <i class="ava-girl"></i> -->
      <ul class="dropdown-user" v-if="listinfoacc" @click="listinfoacc = false">
        <li><a href="#"><i class="fas fa-users-cog"></i>Trang cá nhân</a></li>
        <li><a href="#"><i class="fas fas fa-money-bill-alt"></i>Đóng học phí</a></li>
        <li><a href="#"><i class="fas fa-key"></i>Thay đổi mật khẩu</a></li>
        <li><a href="#"><i class="fas fa-sign-out-alt"></i>Thoát</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',

  data () {
    return {
      listinfoacc: false
    }
  }
}
</script>

<style scoped>

</style>
