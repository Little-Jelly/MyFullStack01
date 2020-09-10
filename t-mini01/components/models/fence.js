

        class Fence{
            valueTitles = []
            specs
            constructor(specs) {
                this.specs = specs
            }

            init(){
                this.specs.forEach(s=>{
                    this.pushValueTtile(s.value)
                })
            }

            pushValueTtile(title){
                this.valueTitles.push(title)
            }
        }

        export {
            Fence
        }