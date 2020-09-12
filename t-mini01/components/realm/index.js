// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      spu:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
        judger:Object
  },

  observers:{
      'spu':function (spu){
          if(!spu){
              return
          }
          const fencesGroup = new FenceGroup(spu)
          fencesGroup.initFences()
          const judger = new Judger(fencesGroup)
          this.data.judger = judger
          judger._initPathDict()
          this.bindInitData(fencesGroup)
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {

        bindInitData(fenceGroup){
            this.setData({
                fences:fenceGroup.fences
            })
        },
        onCellTap(event){
            const cell = event.detail.cell
            const x = event.detail.x
            const y = event.detail.y
            const judger = this.data.judger
            judger.judge(cell, x, y)
            this.setData({
                fences:judger.fenceGroup.fences
            })
        }
  }
})
