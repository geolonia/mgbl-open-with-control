type Geolonia = {
  registerPlugin: (plugin: Function) => void
}
import { OpenWithControl } from './index'

// @ts-ignore
const geolonia: Geolonia = window.geolonia || window.tilecloud

const script: any = document.querySelector(
  'script[data-scope="@geolonia/mbgl-open-with-control"]'
)

const localDataset = script ? script.dataset : {}

geolonia.registerPlugin((map: mapboxgl.Map, target: HTMLElement) => {
  map.addControl(
    new OpenWithControl({
      ...target.dataset,
      ...localDataset
    })
  )
})
