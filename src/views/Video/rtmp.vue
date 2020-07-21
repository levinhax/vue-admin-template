<template>
  <div class="video-wrapper">
    <h3 class="title">Rtmp流 (video.js)</h3>
    <div class="video-list">
      <RtmpVideo />
    </div>
    <div class="info">
      <h4>RTMP 视频流</h4>
      <p>
        RTMP（Real Time Message Protocol）由 Adobe
        公司提出流媒体协议，并且是私有协议，未完全公开，用来解决多媒体数据传输流的多路复用（Multiplexing）和分包（packetizing）的问题，
        RTMP协议一般传输的是flv，f4v格式流。一般在TCP(1个)通道上传输命令和数据。
      </p>
      <h5>优势：</h5>
      <p>低延迟，稳定性高，支持所有摄像头格式</p>
      <p>专为流媒体开发的协议，对底层的优化比其它协议更加优秀</p>
      <h5>劣势：</h5>
      <p>浏览器需要加载 flash插件才能播放</p>
      <p>RTMP 为 Adobe 私有协议，很多设备无法播放，特别是在 iOS 端，需要使用第三方解码器才能播放</p>
      <p>基于 TCP 传输，非公共端口，可能会被防火墙阻拦</p>
    </div>
  </div>
</template>

<script>
import RtmpVideo from './components/RtmpVideo'

export default {
  name: 'Rtmp',
  components: {
    RtmpVideo
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './video.scss';
</style>
