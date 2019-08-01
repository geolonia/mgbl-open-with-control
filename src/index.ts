type Option = { title: string; url: string; text: string }

export class OpenWithControl {
  private option: Option
  private container: HTMLElement

  constructor(option: Option) {
    this.option = option
  }

  onAdd = () => {
    const { title, url, text } = this.option
    this.container = document.createElement('div')
    this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group'
    this.container.innerHTML = `
      <h3>${title}</h3>
      <a href="${url}">${text}</a>
    `
    this.container.setAttribute('style', 'background: white;')
    return this.container
  }
  onRemove = () => this.container.parentNode.removeChild(this.container)
  getDefaultPosition = () => 'top-left'
}

export default OpenWithControl
