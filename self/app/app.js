import 'regenerator-runtime/runtime'
// import { Store } from './store.js'
import { Store } from './store.remote.js'
import { View } from './view.js'
import {Controller} from "./controller";


const view = new View('#the-app')
const store = new Store()
const controller = new Controller(view, store)

controller.start()
