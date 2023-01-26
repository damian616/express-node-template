import('./styles/index.scss')


const lazyLoad = async () => {
await import('./a.js')
await import('./b.js')
}


// lazyLoadJquery()



window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    $('#click').on('click', function(){

        alert('jquery enabled')
        lazyLoad()

    })

});