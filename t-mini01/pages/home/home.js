// pages/home/home.js
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";
import {SpuPaging} from "../../model/spu";

Page({

  data: {
    themeA:null,
      themeE:null,
      themeESpu:[],
      bannerB:null,
      grid:[],
      activityD:null,
      spuPaging:null
  },

  async onLoad(options) {
      this.initAllData()
      this.initBottomSpuList()
  },

    async initBottomSpuList(){
        const paging = await SpuPaging.getLatestPaing()
        this.data.spuPaging = paging
        const data = await paging.getMoreData()
        if(!data){
            return
        }
        wx.lin.renderWaterFlow(data.items, false)
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
       const themeF = await theme.getHomeLocationF()

       // const themeESpuList = await Theme.getHomeLocationESpu()
       //
       // const themeF = await theme.getHomeLocationF()
       // const themeH = await theme.getHomeLocationH()

       const bannerB = await Banner.getHomeLocationB()
       const grid = await Category.getHomeLocationC()
       const activityD = await Activity.getHomeLoacationD()
       const bannerG = await Banner.getHomeLocationG()
       const themeH = await theme.getHomeLocationH()
       this.setData({
           themeA:themeA,
           themeE:themeE,
           themeESpu:themeESpu,
           themeF:themeF,
           bannerB:bannerB,
           bannerG:bannerG,
           grid:grid,
           activityD:activityD,
           themeH:themeH
       })
   },

  onPullDownRefresh: function () {

  },

  onReachBottom: async function () {
      console.log("0909009099090url"+this.data.spuPaging.url)
      console.log("0909009099090start"+this.data.spuPaging.start)
      console.log("0909009099090count"+this.data.spuPaging.count)
      const data = await this.data.spuPaging.getMoreData()

      if(!data){
          return
      }
      wx.lin.renderWaterFlow(data.items)
  },

  onShareAppMessage: function () {

  }
})