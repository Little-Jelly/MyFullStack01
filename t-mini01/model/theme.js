import {Http} from "../utils/http";


class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static async getHomeLocationA() {
        return  await Http.request({
            url: `theme/by/names`,
            data: {
                names: Theme.locationA
            }
        })
    }

    static async getHomeLocationE(){

    }
}

export {
    Theme
}