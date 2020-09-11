import{Cell} from "./cell";

class Fence{
            cells = []
            specs
            title
            id

            constructor(specs) {
                this.specs = specs
                this.title = specs[0].key
                this.id = specs[0].key_id
            }

            init(){
                this.specs.forEach(s=>{
                    // this.pushValueTtile(s.value)
                    const cell = new Cell(s)
                    this.cells.push(cell)
                })
            }

            // pushValueTtile(title){
            //     this.valueTitles.push(title)
            // }
        }

        export {
            Fence
        }