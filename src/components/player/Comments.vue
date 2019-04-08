<template>
  <div class="right-video" id="scrollbar">
    <h1 class="title-video">HỌC CÙNG TRẠNG NGUYÊN CHÀO MỪNG NGÀY 20-11</h1>
    <span class="date-news">18/10/2018</span>
    <span class="view-news"><i class="fas fa-eye"></i>287</span>
    <span class="comt-news"><i class="fas fa-comment-alt"></i>2</span>
    <p class="des-video">Trạng Nguyên chúc mừng thầy cô giáo tri thức, tài đức, sức khỏe để truyền lửa cho hàng ngàn thế hệ học sinh. Hãy cùng Trạng Nguyên giúp các em: "phản biện, giao tiếp, hợp tác, sáng tạo"trong thời đại 4.0</p>
    <div class="comment">
      <div class="title-comment">
        <i class="fas fa-comments"></i> Bình luận
      </div>
      <div class="commentbox">
        <div class="item-comment">
          <span class="ava-comment">
            <img src="@/assets/images/meo.png" alt="" width="60">
          </span>
          <div class="detail-comment">
            <span class="user-comment">Nguyễn Viết Bình Nguyên:</span> Chúc mừng thầy cô
          </div>
          <div class="date-comment">
            Gửi lúc: 09:48 24-08-2018
          </div>
          <div class="activities-comt">
            <a href="#"><i class="fas fa-thumbs-up"></i> 8 Thích</a> |
            <a href="#">Trả lời</a>
          </div>
          <div class="form-comment" v-if="show">
            <textarea rows="3"></textarea>
            <a href="#" class="btn-green">Gửi bình luận</a>
          </div>
        </div>
      </div>
      <!-- end comment box-->
      <div class="commentbox">
        <div class="item-comment">
          <span class="ava-comment">
            <img src="@/assets/images/ava-boy.png" alt="" width="60">
          </span>
          <div class="detail-comment">
            <span class="user-comment">Bình Nguyên:</span> Bé Trạng Nguyên yêu quá
          </div>
          <div class="date-comment">
            Gửi lúc: 09:48 24-08-2018
          </div>
          <div class="activities-comt">
            <a href="#"><i class="fas fa-thumbs-up"></i> 8 Thích</a> |
            <a href="#">Trả lời</a>
          </div>
          <div class="sub-item-comment clearfix">
            <div class="item-comment">
              <span class="ava-comment">
                <img src="@/assets/images/meo.png" alt="" width="60">
              </span>
              <div class="detail-comment">
                <span class="user-comment">Bình Nguyên:</span> Nhắm mắt thấy yêu thương
              </div>
              <div class="date-comment">
                Gửi lúc: 09:48 24-08-2018
              </div>
              <div class="activities-comt">
                <a href="#"><i class="fas fa-thumbs-up"></i> 8 Thích</a> |
                <a href="#">Trả lời</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end comment box-->
      <div class="commentbox">
        <div class="item-comment">
          <span class="ava-comment">
            <img src="@/assets/images/trau.png" alt="" width="60">
          </span>
          <div class="detail-comment">
            <span class="user-comment">Nguyễn Viết Bình Nguyên:</span> Cảm ơn thầy cô, người truyền lửa
          </div>
          <div class="date-comment">
            Gửi lúc: 09:48 24-08-2018
          </div>
          <div class="activities-comt">
            <a href="#"><i class="fas fa-thumbs-up"></i> 8 Thích</a> |
            <a href="#">Trả lời</a>
          </div>
        </div>
      </div>
      <!-- end comment box-->
      <div class="commentbox">
        <div class="item-comment">
          <span class="ava-comment">
            <img src="@/assets/images/bo.png" alt="" width="60">
          </span>
          <div class="detail-comment">
            <span class="user-comment">Nguyễn Viết Bình Nguyên:</span> Thị lực đây mà
          </div>
          <div class="date-comment">
            Gửi lúc: 09:48 24-08-2018
          </div>
          <div class="activities-comt">
            <a href="#"><i class="fas fa-thumbs-up"></i> 8 Thích</a> |
            <a href="#">Trả lời</a>
          </div>
        </div>
      </div>
      <!-- end comment box-->

      <div class="commentbox">
        <div class="item-comment">
          <span class="ava-comment">
            <img src="@/assets/images/bo.png" alt="" width="60">
          </span>
          <div class="form-comment">
            <textarea rows="3"></textarea>
            <a href="#" class="btn-green">Gửi bình luận</a>
          </div>

        </div>
      </div>
      <!-- end comment box-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',

  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>

</style>
