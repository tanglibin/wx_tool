Page({
    data: {
        banner:[
          { id:'01', url:'../../static/images/banner/banner1.jpeg'},
          { id:'02', url:'../../static/images/banner/banner2.jpeg'}],
        list:[
            {name:"Sketch",img:"../../static/images/logo/1.png",sort:'最好用UI设计软件',time:'2022-01-01'},
            {name:"Photoshop 2021",img:"../../static/images/logo/ps.png",sort:'Adobe 系统软件',time:'2022-01-02'},
            {name:"sketchUp（草图大师）",img:"../../static/images/logo/maya.png",sort:'室内外设计',time:'2022-01-03'},
            {name:"达芬奇调色",img:"../../static/images/logo/GyPGsf.png",sort:'好莱坞级专业调色软件',time:'2022-01-04'},
            {name:"photoshop（图片照片处理）",img:"../../static/images/logo/tu.png",sort:'macOS Rss订阅工具',time:'2022-01-05'},
            {name:"Sketch",img:"../../static/images/logo/1.png",sort:'最好用UI设计软件',time:'2022-01-01'},
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500
    },
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    onLoad() {
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    },
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    getUserInfo(e) {
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      console.log(e)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  })
  