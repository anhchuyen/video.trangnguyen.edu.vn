<template>
  <div>
    <Header/>
    <Menu/>
    <Navigator/>

    <div class="top-video">
      <div class="container">
        <div class="main-video">
          <!--<videoPlayer class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions"/>-->
          <youtube :video-id="videoId" ref="youtube" @playing="playing" :player-vars="{autoplay: autoplay}"></youtube>
        </div>

        <Comments/>

        <ListOther ref="other1" title="Bài giảng Tiếng Việt" @play="setPlay"/>
        <ListOther ref="other2" title="Bài giảng Toán" @play="setPlay"/>
        <ListOther ref="other3" title="Bài giảng Tiếng Anh" @play="setPlay"/>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import { videoPlayer } from 'vue-video-player'
// import VueYoutube from 'vue-youtube'

import Header from '@/components/commons/Header'
import Menu from '@/components/commons/Menu'
import Navigator from '@/components/commons/Navigator'
import Footer from '@/components/commons/Footer'

import Comments from './Comments'
import ListOther from './ListOther'

import {list as listVideo} from '@/services/videos'
import * as Youtubes from '@/services/youtube'

// import data from '@/assets/list.json'

export default {
  name: 'Player',

  data () {
    return {
      // config for videojs
      url: '',
      playerOptions: {
        autoplay: false,
        controls: true,
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }]
      },

      // config for youtube
      videoId: 'D32Ly8tnBtk',
      autoplay: 0
    }
  },

  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },

  methods: {
    updateTitle () {
      // document.title = ''
    },

    async loadData () {
      try {
        const results = await listVideo()
        // const results = data
        if (results.error === 0) {
          const map = results.list
          if (map && Object.keys(map).length > 0) {
            let list1 = []
            let list2 = []
            let list3 = []
            for (const id in map) {
              const _info = map[id]
              switch (_info.parent_id) {
                case 10:
                  list1.push(_info)
                  break
                case 11:
                  list2.push(_info)
                  break
                case 12:
                  list3.push(_info)
                  break
              }
            }

            this.$refs.other1.setData(list1)
            this.$refs.other2.setData(list2)
            this.$refs.other3.setData(list3)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },

    // handleApply () {
    //   this.playerOptions.sources[0].src = this.url
    // },

    setPlay (info) {
      this.autoplay = 1
      const url = info.url ? info.url.trim() : ''
      if (url) {
        this.playVideo(Youtubes.getId(info.url))
        document.scrollingElement.scrollTop = 0
      } else {
        alert('url video bị lỗi!')
      }
    },

    playVideo (id) {
      this.videoId = id
      this.player.playVideo()
    },

    playing (data) {
      // console.log('we are watching!!!', data)
    }
  },

  beforeMount () {
    this.updateTitle()
  },

  mounted () {
    this.loadData()
  },

  components: {
    Header, Menu, Navigator, Footer, Comments, ListOther
  }
}
</script>

<style scoped>

</style>
