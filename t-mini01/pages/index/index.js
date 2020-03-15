//index.js
//获取应用实例
const app = getApp()
console.log(app.globalData)

wx.getSystemInfo({
  success: function(res) {
    console.log(res.brand)
  }
})

Page({
  data:{
    timeNow:"this is from index.js",
    timeNow2: app.globalData.userInfo,
    array:[1, 2, 3, 4, 5, 6],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' }
  }
})
