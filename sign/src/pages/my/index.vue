<template>
  <div class="wrap">
    <div class="massage">
     <dl class="dll">
       <dt><img src="../../../static/images/my.png" alt="" mode="widthFix"></dt>
       <dd>134***1233</dd>
     </dl>
    
     
    </div>
     <ul>
      <li>
        <icon type="waiting" size="18px" />
        <span>
          我的面试
        </span>
        <image src="/static/images/arrow.svg"></image>
      </li>
      
    </ul>
     <!-- <div v-if="showPhoneDialog" class="zhe">
       <p>为了更好的使用我们的服务，我们需要获取你的手机号码</p>
       <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">允许获取手机号</button>
     </div> -->
     <button class="add">切换账号</button>
  </div>
</template>

<script>
import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
     showPhoneDialog:true
    }
  },
  computed: {
    ...mapState({
      info: state=>state.index.info,

    })
  },
  methods: {
     getPhoneNumber(e) {
      console.log('e...',e);
  }, 
   onShow() {
    if (!this.info.phone){
      this.showPhoneDialog = false;
    }
  }
  }
}
</script>

<style lang="scss" scoped>

 
.wrap{
  height: 100%;
  
}
.wrap ul{
   display: flex;
   justify-content: space-around;
}
.wrap ul p span{
  padding-left:20rpx;
}
.massage{
  width: 100%;
  height: 500rpx;
  // background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
.massage dl img{
  width: 200rpx;
  background: #eee;
  color: #fff;
  border-radius: 50%;
}
.massage dl dd{
  line-height: 100rpx;
}
.zhe{
 width: 100%;
 height:100%;
 background: rgba(0, 0, 0, 0.3);
   position: fixed;
   top: 0;
   left: 0;
}
.zhe p{
  margin-top: 450rpx;
  line-height: 60rpx;
  background: #fff;
  display: none；
}
map{
  width: 100%;
  height: 100%;
}
li{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50rpx 40rpx 0 40rpx;
  span:nth-child(2){
    flex: 1;
    margin-left: 40rpx;
    color: #666;
    font-size: 36rpx;
  }
  image{
    width: 40rpx;
    height: 40rpx;
  }
}
.location{
  position: fixed;
  bottom: 100rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}
.my{
  position: fixed;
  background: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  bottom: 100rpx;
  width: 120rpx;
  height: 90rpx;
  right: 0;
  cover-image{
    width: 70rpx;
    height: 70rpx;
    margin-top:10rpx;
    margin-left:20rpx;
    background: #eee;
    border-radius: 50%;
  }
}
.add{
  position: fixed;
  width: 100%;
  height: 100rpx;
  background: #cccc;
  color: #000;
  font-weight: 500;
  bottom: 0;
  left: 0;
  font-size: 40rpx;
}
</style>
