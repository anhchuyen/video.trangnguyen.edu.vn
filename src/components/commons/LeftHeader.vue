<template>
  <div class="left-header">
    <ul>
      <li class="logo">
        <router-link to="/" class="active">
          <img src="@/assets/images/logo.png" alt="Logo Trạng Nguyên Tiếng Việt">
        </router-link>
      </li>
      <li class="sponsor">
        <ul>
          <p>Ban tổ chức</p>
          <li><img src="@/assets/images/sponsor2.png" alt="HEID"></li>
          <li><img src="@/assets/images/sponsor3.png" alt="Nhà xuất bản giáo dục"></li>
        </ul>
      </li>
      <li class="sponsor">
        <ul>
          <p>Nhà tài trợ</p>
          <li><a href="https://gioithieu.sachmem.vn/" target="_blank" rel="noopener"><img src="@/assets/images/sponsor.png" alt="sách mềm"></a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftHeader'
}
</script>

<style scoped>

</style>
