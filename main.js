let bodyPalette = document.querySelectorAll('.top .color')

bodyPalette.forEach((el) => {
    el.addEventListener('click', () => {
        let color = el.style.backgroundColor
        document.body.style.backgroundColor = color 
    })
})

let blockPalette = document.querySelectorAll('.bottom .color')

blockPalette.forEach((el) => {
    el.addEventListener('click', () => {
        let color = el.style.backgroundColor
        let items = document.querySelectorAll('.grid-item') 

        items.forEach((item) =>{
            item.style.backgroundColor = color
        }) 
    })
})


