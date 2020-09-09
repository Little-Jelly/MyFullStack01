import {Http} from "../utils/http";


class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    async getThemes(){
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        })
    }

    async getHomeLocationA() {
        return this.themes.find(t => t.name === 't-1')
    }

    async getHomeLocationE(){
        return this.themes.find(t => t.name === 't-2')
    }

    static async getHomeLocationESpu(){
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static async getThemeSpuByName(name){
        return Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }

    async getHomeLocationF(){
        return this.themes.find(t => t.name === 't-3')
    }

    async getHomeLocationH(){
        return this.themes.find(t => t.name === 't-4')
    }




}

export {
    Theme
}