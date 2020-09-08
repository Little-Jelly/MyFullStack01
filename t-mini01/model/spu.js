import {Paging} from "../utils/paging";

class SpuPaging{
    static async getLatestPaing(){
        return new Paging({
            url:`spu/latest`
        }, 3, 0)
    }
}
export {
    SpuPaging
}