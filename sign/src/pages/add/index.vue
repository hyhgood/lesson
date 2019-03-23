<template>
  <div class="warp">
    <div class="massage">
        <ul>
            <li><h3>面试信息</h3></li>
            <li>公司名称<input  type="text" @change="company" placeholder="请输入公司名称"/></li>
            <li>公司电话<input  type="number" @change="phone" placeholder="请输入面试联系人电话"/></li>
            <li>
                面试时间
          <picker
          mode="multiSelector"
          :range="dateRange"
          :value="info.date"
          @change="dateChange"
          @columnchange="columnChange"
        ><view class="date">{{dateShow}}</view>
        </picker>
            </li>
            <li>面试地址<input @tap="goSearch" placeholder="请选择面试地址"/></li>
        </ul>
    </div>
     <div class="beizhu">
       <ul>
           <li><h3>备注信息</h3></li>
           <li><textarea placeholder="备注信息（100个字内）"></textarea></li>
           </ul>
        
     </div>
      <button :class="btnEnable?'': 'disable'" @click="submit">确认</button>
  </div>
</template>

<script>
const moment = require('moment');
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
  data () {
    return {
      companyval:"",
      phoneval:"",
      time:"",
      addressval:"",
      btnEnable:true,
      info:{
          date:[0,0,0]
      }
    }
  },
  created(){
    
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
  },
   computed:{
    dateRange(){
      let dateRange = [...range];
     
      if (!this.info.date[0]){
        dateRange[1] = dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        dateRange[1] = range[1]
      }
      
      dateRange[1] = dateRange[1].map(item=>{
        return item+'点'
      })
     
      dateRange[0] = dateRange[0].map(item=>{
        return moment().add(item, 'days').date()+'号'
      })
      return dateRange;
    },
  
    dateShow(){
      return moment()
      .add(this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
   },
  methods: {
  goSearch(e){
   wx.navigateTo({ url:'/pages/search/main' });
   const add = wx.getStorageSync('address');
   console.log(add);
    },
  company(e){
      let companyval=e.target.value;
      this.companyval=companyval;
  },
  phone(e){
      let phoneval=e.target.value;  
      this.phoneval=phoneval;
  },
   columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
  submit(){
      if (!this.companyval){
        wx.showToast({
          title: '请输入公司名称', 
          icon: 'none', 
        });
       this.btnEnable=false;
      }
      //验证手机号
     if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone) || !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)){
        wx.showToast({
          title: '请输入正确的面试联系人手机或座机', 
          icon: 'none', 
        });
         this.btnEnable=false;
      }
      this.current.start_time = moment(this.dateShow).unix();
      console.log(this.current);
      // let data = await this.submitInterview(this.current);
      // console.log('data...', data);
  }
  }
}
</script>

<style scoped>
.warp{
    height: 100%;
}
.massage ul li{
  width: 100%;
  height:88rpx;
  line-height: 40rpx;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
  font-size: 16px;
   border-bottom: 1px solid #eee;
}
.massage ul li:nth-child(1){
    background: #eee;
    border: 1px solid #eee;
}
.massage ul li input{
    padding-left: 20rpx;
}
.massage ul h3{
     font-weight: 500;
     padding-left: 17rpx;
     font-size: 20px;
}
 .date{
 margin-left:20rpx;

}
.beizhu ul li{
  width: 100%;
  height:88rpx;
  line-height: 40rpx;
  display: flex;
  align-items: center;
  padding-left: 20rpx;
  font-size: 16px;
}
.beizhu ul li:nth-child(1){
    background: #eee;
    border: 1px solid #eee;
}
.beizhu ul h3{
     font-weight: 500;
     padding-left: 17rpx;
     font-size: 20px;
}
.beizhu textarea{
    width: 80%;
    height: 200rpx;
    border: 1px solid #ccc;
    margin-top: 160rpx;
    margin-left: 40rpx;
}
button{
    width: 100%;
    background:  #197DBF;
    color: #fff;
    margin-top: 200rpx;
}
button.disable{
  background: #999;
}

</style>