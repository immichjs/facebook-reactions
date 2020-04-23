const urlImages = [
    'https://image.flaticon.com/icons/svg/2865/2865875.svg', // Campo magnético
    'https://image.flaticon.com/icons/svg/2865/2865892.svg', // Electron
    'https://image.flaticon.com/icons/svg/2865/2865899.svg', // Prism
    'https://image.flaticon.com/icons/svg/2865/2865904.svg', // Temperature
    'https://image.flaticon.com/icons/svg/2865/2865924.svg', // Proton
    'https://image.flaticon.com/icons/svg/2865/2865920.svg' // Mass
]

function create (attr) {
    const createImg = document.createElement('img')
    createImg.setAttribute('src', attr)

    const container = document.getElementById('container')
    container.appendChild(createImg)
}

for (let i of urlImages) {
    create(i)
}