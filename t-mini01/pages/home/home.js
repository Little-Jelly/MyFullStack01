// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";

Page({

  data: {
    themeA:null,
    bannerB:null,
      grid:[]
  },

  async onLoad(options) {
      this.initAllData()
  },

    // 用于初始化页面的信息
   async initAllData() {
       const themeA = await Theme.getHomeLocationA()
       const bannerB = await Banner.getHomeLocationB()
       const grid = await Category.getGridCategory()
       this.setData({
           themeA:themeA[0],
           bannerB:bannerB,
           grid:grid
       })
   },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})