import {SkuCode} from "./sku-code";


class Judger{
        fenceGroup
        pathDict = []

        constructor(fenceGroup) {
            this.fenceGroup = fenceGroup
        }

        initPathDict(){
            this.fenceGroup.spu.sku_list.forEach(s=>{
                const skuCode = new SkuCode(s.code)
            })
        }
    }
    export {
        Judger
    }