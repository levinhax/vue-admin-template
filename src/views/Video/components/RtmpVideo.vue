<template>
  <div class="rtmp-video-wrapper">
    <div class="video-content">
      <video
        ref="videoPlayer"
        class="video-js vjs-default-skin vjs-big-play-centered"
        preload="auto"
        autoplay
        controls
        style="width: 100%;height: 100%;"
        data-setup='{"html5" : { "nativeTextTracks" : false }}'
      >
        <source :src="videoSrc" type="rtmp/flv" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RtmpVideo',
  props: {
    videoSrc: {
      type: String,
      default: 'rtmp://58.200.131.2:1935/livetv/hunantv'
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
      this.videoPlayer = this.$video(this.$refs.videoPlayer)
      console.log('videoPlayer: ', this.videoPlayer)
      this.videoPlayer.src({
        src: this.videoSrc,
        type: 'rtmp/flv'
      })
      this.videoPlayer.play()
      //   this.videoPlayer.pause()
    },
    disposeVideo() {
      if (this.videoPlayer) {
        this.videoPlayer.dispose()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rtmp-video-wrapper {
  .video-content {
    width: 400px;
    height: 300px;
  }
}
</style>
