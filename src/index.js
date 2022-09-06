// write your code here
const menu = document.querySelector('#ramen-menu')

function display() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(fetchAllRamens)
}

function fetchAllRamens(ramenArr) {
    ramenArr.forEach(getRamen)
}


function getRamen(ramenObj) {
    const image = document.createElement('img')
    image.src = ramenObj.image
    menu.appendChild(image)


    image.addEventListener('click', () => {
        const img = document.querySelector('.detail-image')
        img.src = ramenObj.image


        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramenObj.name
        
        const ramenFood = document.querySelector('.restaurant')
        ramenFood.textContent = ramenObj.restaurant
        
        const rating = document.querySelector('#rating-display')
        rating.innerText = ramenObj.rating

        const comment = document.querySelector('#comment-display')
        comment.innerText = ramenObj.comment
    })
}


function createForm() {
    const newRamenForm = document.querySelector('#new-ramen')

    newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const newRamenObj = {}
    newRamenObj.name = document.querySelector('#new-name').value
    newRamenObj.restaurant = document.querySelector('#new-restaurant').value
    newRamenObj.image = document.querySelector('#new-image').value
    newRamenObj.rating = document.querySelector('#new-rating').value
    newRamenObj.comment = document.querySelector('#new-comment').value


    const newRamen = document.createElement('img')
    newRamen.src = newRamenObj.image
    menu.appendChild(newRamen)
    })
}


display()
createForm()