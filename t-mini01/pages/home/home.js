// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  data: {
    themeA:null,
      themeE:null,
      themeESpu:[],
    bannerB:null,
      grid:[],
      activityD:null
  },

  async onLoad(options) {
      this.initAllData()
  },

    // 用于初始化页面的信息
   async initAllData() {
       // const themeA = await Theme.getHomeLocationA()
       const theme = new Theme()
       const themes = await theme.getThemes()
       const themeA = await theme.getHomeLocationA()
       const themeE = await theme.getHomeLocationE()
       let themeESpu = []
       if(themeE.online){
           const data = await Theme.getHomeLocationESpu()
           if(data){
               themeESpu = data.spu_list.slice(0,8)
           }
       }

       // const themeESpuList = await Theme.getHomeLocationESpu()
       //
       // const themeF = await theme.getHomeLocationF()
       // const themeH = await theme.getHomeLocationH()

       const bannerB = await Banner.getHomeLocationB()
       const grid = await Category.getHomeLocationC()
       const activityD = await Activity.getHomeLoacationD()
       this.setData({
           themeA:themeA,
           themeE:themeE,
           themeESpu:themeESpu,
           bannerB:bannerB,
           grid:grid,
           activityD:activityD
       })
   },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})