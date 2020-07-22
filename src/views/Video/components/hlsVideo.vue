<template>
  <div class="hls-video-wrapper">
    <div class="video-content">
      <video
        ref="videoPlayer"
        id="myvideo"
        class="video-js vjs-default-skin vjs-big-play-centered"
        preload="auto"
        autoplay
        controls
        style="width: 100%;height: 100%;"
        data-setup='{"html5" : { "nativeTextTracks" : false }}'
      >
        <source :src="videoSrc" type="application/x-mpegURL" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HlsVideo',
  props: {
    videoSrc: {
      type: String,
      default: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
    },
    videoShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      videoPlayer: ''
    }
  },
  watch: {
    videoSrc: function(val, oldVal) {
      this.initVideo()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initVideo()
    })
  },
  beforeDestroy() {
    this.disposeVideo()
  },
  methods: {
    initVideo() {
      this.videoPlayer = this.$video(this.$refs.videoPlayer, {}, function() {
        console.log('videojs播放器初始化成功')
      })
      console.log('videoPlayer: ', this.videoPlayer)
      this.videoPlayer.src({
        src: this.videoSrc,
        type: 'application/x-mpegURL'
      })
      this.videoPlayer.play()
      //   this.videoPlayer.pause()
    },
    disposeVideo() {
      if (this.videoPlayer) {
        this.videoPlayer.dispose()
        console.log('videojs播放器初始化成功')
        console.log('videoPlayer: ', this.videoPlayer)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hls-video-wrapper {
  .video-content {
    width: 400px;
    height: 300px;
  }
}
</style>
