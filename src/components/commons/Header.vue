<template>
  <div class="header">
    <div class="container">
      <MenuMobile/>
      <LeftHeader/>
      <User/>
      <Notification/>
      <Message/>
      <Hotline/>
    </div>
  </div>
</template>

<script>
import MenuMobile from '@/components/commons/MenuMobile'
import LeftHeader from '@/components/commons/LeftHeader'
import User from '@/components/commons/User'
import Notification from '@/components/commons/Notification'
import Message from '@/components/commons/Message'
import Hotline from '@/components/commons/Hotline'

export default {
  name: 'Header',

  components: {
    MenuMobile, LeftHeader, User, Notification, Message, Hotline
  }
}
</script>

<style scoped>

</style>
