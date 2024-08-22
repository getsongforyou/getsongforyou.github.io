<template>
  <div>
    <div class="item">
        <div class="header">
            <img src="../../../assets/img/avator.jpg" width="50"    height="50" alt="" class="item-avatar">
            <div class="info">
                <span class="name">张三</span>
                <span class="time">2023.1.2</span>
            </div>
        </div>
        <div class="content">
            <p class="text">
                Never give up, Never lose hope. Always have faith, It allows you to cope. Trying times will pass, As they always do. Just have patience, Your dreams will come true. So put on a smile, You'll live through your pain. Know it will pass, And strength you will gain.

            </p>
            <p class="text">
                My love is like the grasses

Hidden in the deep mountains。

Though its abundance increase，

There is none that knows。
            </p>

        </div>
        <div class="footer">
            <span class="share">
                <i class="el-icon-share"></i>
                share
            </span>
            <span class="like">
                like
            </span>
        </div>
    </div>
    <div class="item">
        <div class="header">
            <img src="../../../assets/img/avator.jpg" width="50" height="50" alt="" class="item-avatar">
            <div class="info">
                <span class="name">张三</span>
                <span class="time">2023.1.2</span>
            </div>
        </div>
        <div class="content">
            It's your loving and your caring

And knowing that you're near

That gentle touch you have

Make my troubles disappear
        </div>
        <div class="footer">
            <span class="share">
                <i class="el-icon-share"></i>
                share
            </span>
            <span class="like">
                like
            </span>
        </div>
    </div>
    <div class="item">
        <div class="header">
            <img src="../../../assets/img/avator.jpg" width="50" height="50" alt="" class="item-avatar">
            <div class="info">
                <span class="name">张三</span>
                <span class="time">2023.1.2</span>
            </div>
        </div>
        <div class="content">
            <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" alt="" class="bannerItem">
    </el-carousel-item>
  </el-carousel>
            
        </div>
        <div class="footer">
            <span class="share">
                <i class="el-icon-share"></i>
                share
            </span>
            <span class="like">
                like
            </span>
        </div>
    </div>
  </div>
</template>

<script>
// import p1 from '@/assets/img/1.jpg'
// import p2 from '@/assets/img/7.jpg'
// import p3 from '@/assets/img/9.jpg'
// const arr = []
// arr.push(p1,p2,p3)

export default {
  name: 'QingMengActivity',

  data() {
    return {
    //   imgList: arr
    p1:require('@/assets/img/1.jpg'),
    p2:require('@/assets/img/7.jpg'),
    p3:require('@/assets/img/9.jpg'),
        
      
    };
  },
  computed:{
    imgList:function () {
        const arr= []
        arr.push(this.p1)
        arr.push(this.p2)
        arr.push(this.p3)
return arr
    }
  }
,
  mounted() {
    console.log(this.imgList)
  },

  methods: {
    
  },
};
</script>

<style scoped>
.content{
    color: #999;
}
.time{
    color: #999;
}
.item{
    padding:10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
}
.item:last-of-type{
    border: none;
}
.header{
    display: flex;
    margin-bottom: 20px;
}
.item-avatar{
    margin-right: 10px;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.content{
    margin-bottom: 20px;
}
.footer{
    margin-bottom: 20px;
}
.share{
    margin-right: 20px;
}
.bannerItem{
    width: 100%;
    aspect-ratio: 4/3;
    
}
</style>