
export class Store {
<<<<<<< HEAD
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
=======
  constructor() {
    this.existingItems = []
  }

  async loadAll(){
    const result = await fetch('http://localhost:4567/todo/items', {
      method: 'GET',
      headers: new Headers({'accept': 'application/json'})
    })
    if(result.status === 200){
      this.existingItems =  await result.json()
    }
  }

  add(item){
    this.existingItems.push(item)
    localStorage.setItem("items", JSON.stringify(this.existingItems))
  }

  getAll(){
    return this.existingItems
  }
>>>>>>> upstream/master
}
