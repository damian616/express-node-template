
const lazyLoadJquery = async () => {
    await import('./styles/index.scss')
}

const lazyLoad = async () => {
await import('./c.js')
await import('./d.js')
}



lazyLoadJquery()
lazyLoad()