<template>
  <div class="video-wrapper">
    <h3 class="title">Hls流 (video.js)</h3>
    <div class="radio-box">
      <el-radio-group v-model="checkedVideoSrc">
        <el-radio v-for="item in videoOptions" :key="item.value" :label="item.value">{{
          item.label
        }}</el-radio>
      </el-radio-group>
    </div>
    <div class="video-list">
      <HlsVideo :videoSrc="checkedVideoSrc" />
    </div>
    <div class="info">
      <h4>HLS 视频流</h4>
      <p>
        HLS（Http Live Streaming)
        是一个由苹果公司提出的基于HTTP的流媒体网络传输协议，直接把流媒体切片成一段段，信息保存到m3u列表文件中，
        可以将不同速率的版本切成相应的片；播放器可以直接使用http协议请求流数据。
      </p>
      <h5>优势：</h5>
      <p>可以在不同速率的版本间自由切换，实现无缝播放</p>
      <p>省去使用其他协议的烦恼</p>
      <h5>劣势：</h5>
      <p>延迟大小受切片大小影响，不适合直播，适合视频点播。</p>
      <p>实时性差，延迟高。HLS 的延迟基本在 10s+ 以上</p>
      <p>文件碎片。特性的双刃剑，ts 切片较小，会造成海量小文件，对存储和缓存都有一定的挑战</p>
    </div>
  </div>
</template>

<script>
import HlsVideo from './components/hlsVideo'

export default {
  name: 'HLS',
  components: {
    HlsVideo
  },
  data() {
    return {
      // CCTV1高清
      CCTV1: {
        videoSrc: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
      },
      checkedVideoSrc: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
      videoOptions: [
        {
          label: 'CCTV1',
          value: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
        },
        {
          label: 'CCTV3',
          value: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
        },
        {
          label: 'CCTV5',
          value: 'http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8'
        },
        {
          label: 'CCTV6',
          value: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
        },
        {
          label: '苹果测试1',
          value: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8'
        },
        {
          label: '苹果测试2',
          value: 'http://devimages.apple.com/iphone/samples/bipbop/gear3/prog_index.m3u8'
        }
      ]
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './video.scss';

.radio-box {
  width: 720px;
  margin: 0 auto 16px;
}
</style>
