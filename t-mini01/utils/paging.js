import {Http} from "../utils/http";

class Paging{

    start
    count
    req
    locker = false
    url
    moreData = true
    accumulator = []

    constructor(req, count=0, start=0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    async getMoreData(){
        if(!this.moreData){
            return
        }
        if(!this._getLocker()){
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }



    async _actualGetData(){
        const req = this._getCurrentReq()
        
        let paging = await Http.request(req)
        if(!paging){
            return null
        }
        if(paging.total === 0){
            return {
                empty: true,
                items:[],
                moreData:false,
                accumulator:[]
            }
        }
        this.moreData = Paging._moreData(paging.total_Page, paging.page)
        if(this.moreData){
            this.start += this.count
        }
        this._accumulate(paging.items)
        return {
            empty: false,
            items:paging.items,
            moreData:this.moreData,
            accumulator:this.accumulator
        }
        // 分析的返回数据结构
        // return {
        //     empty: boolean,
        //     items:[],
        //     moreData:boolean,
        //     accumulator:[]
        // }
    }
    _accumulate(items){
        this.accumulator = this.accumulator.concat(items)
    }

    static _moreData(totalPage, pageNum){
        return pageNum < totalPage-1?true:false
    }

    _getCurrentReq(){
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if(url.includes('?')){
            url += '&' + params
        }
        else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }

    _getLocker(){
        if(this.locker){
            return fasle
        }
        this.locker = true
        return true
    }

    _releaseLocker(){
        this.locker = false
    }

}

export {
    Paging
}