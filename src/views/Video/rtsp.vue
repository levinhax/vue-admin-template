<template>
  <div class="video-wrapper">
    <h3 class="title">Rtsp流</h3>
    <div class="video-list"></div>
    <div class="info">
      <h4>RTSP 视频流</h4>
      <p>
        RTSP（Real-Time Stream Protocol）由Real Networks
        和Netscape共同提出的流媒体协议，RTSP协议是共有协议，并有专门机构做维护。
        它是TCP/IP协议体系中的一个应用层协议。RTSP协议一般传输的是ts、mp4格式的流，RTSP传输一般需要2-3个通道，命令和数据通道分离。
        基于文本的多媒体播放控制协议. RTSP定义流格式，流数据经由RTP传输；
      </p>
      <h5>优势：</h5>
      <p>RTSP实时效果非常好，适合视频聊天，视频监控等方向</p>
      <h5>劣势：</h5>
      <p>
        浏览器不能直接播放，只能通过插件或者转码(浏览器安装VLC插件进行服务器映射转码，得到video标签能够正常打开的ogg格式视频然后播放)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rtsp',
  components: {},
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
