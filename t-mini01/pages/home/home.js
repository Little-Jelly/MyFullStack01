// pages/home/home.js
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {SpuPaging} from "../../models/spu-paging";

Page({

  data: {
    themeA:null,
      themeE:null,
      themeESpu:[],
      bannerB:null,
      grid:[],
      activityD:null,
      spuPaging:null,
      loadingType:'loading'
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
      const data = await this.data.spuPaging.getMoreData()

      if(!data){
          return
      }
      wx.lin.renderWaterFlow(data.items)
      if(!data.moreData){
          this.setData({
              loadingType:'end'
          })
      }
  },

  onShareAppMessage: function () {

  }
})