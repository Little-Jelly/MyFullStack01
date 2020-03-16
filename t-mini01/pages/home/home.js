// pages/home/home.js
import {config} from "../../config/config";
import {Theme} from "../../model/theme";

Page({

  data: {
    themeName:null
  },

  onLoad: async function (options) {
      const data = await Theme.getHomeLocationA()
      this.setData({
          themeName:data[0]
        })
  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})