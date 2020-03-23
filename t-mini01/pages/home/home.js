// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  data: {
    themeA:null,
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
       const themes = await Theme.getThemes()
       const themeA = themes.find(t=>t.name ==='t-1')
       const themeE = themes.find(t=>t.name === 't-2')
       const themeF = themes.find(t=>t.name === 't-3')
       const themeH = themes.find(t=>t.name === 't-4')

       const bannerB = await Banner.getHomeLocationB()
       const grid = await Category.getHomeLocationC()
       const activityD = await Activity.getHomeLoacationD()
       this.setData({
           themeA:themeA,
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