export class Controller {
    constructor(view, store) {
        this.view = view
        this.store = store
    }

    // start(){
    //     this.store.loadAll()
    //     this.view.render(this.store.getAll())
    //
    //     this.view.registerOnAdItemHandler((newItem) => {
    //         if(newItem.description === ""){
    //             return {
    //                 message: "ACHTUNG du Depp das Feld ist leer"
    //             }
    //         }else{
    //             this.store.add(newItem)
    //             this.view.addItemToList(newItem)
    //             return {
    //                 message: ""
    //             }
    //         }
    //     })
    //
    // }

    async start(){
        await this.store.loadAll()
        this.view.render(this.store.getAll())

        this.view.registerOnAdItemHandler((newItem) => {
            if(newItem.description === ""){
                return {
                    message: "ACHTUNG du Depp das Feld ist leer"
                }
            }else{
                this.store.add(newItem)
                this.view.addItemToList(newItem)
                return {
                    message: ""
                }
            }
        })

    }
}
