
export class Store {
    constructor() {
        this.existingItems = []
    }

    async laodAll() {
        const result = await fetch('http://localhost:4567/todo/items', {
            headers: new Headers({'accept': 'application/json'})
        })
        const json = await result.json()
        this.existingItems = json
    }


        add(item) {
        }

        getAll() {
        return this.existingItems
        }
}
