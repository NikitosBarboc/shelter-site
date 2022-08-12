const popup = document.querySelector('.popup')
const popupBg = document.querySelector('.background')
let card = document.createElement('div')
const body = document.querySelector('.body')

function createPopup(pets){
 let petButtons = document.querySelectorAll('.button-pets')
        const newPopup = document.createElement('div')
        newPopup.classList.add('pet')
        for(let button of petButtons){
            
            button.addEventListener('click', event => {
                new Promise((resolve, reject) => {
                    resolve(fetch(urlJson))
                }).then((data) => data.json())
                .then((data) => {
                    for(let pet of data){
                        if(pet.name === button.getAttribute('data-name')){
                            renderPopup(pet)
                            body.classList.add('lock')
                            document.addEventListener('click', event => {
                                if(event.target.classList.contains('background')){
                                    card.remove()
                                    body.classList.remove('lock')
                                }
                            })
                        }                       
                    }
                })
            })  
        }
    }
    

function renderPopup(pet) {
    
    card.innerHTML = `<div class="background">
    <div class="popup-main">
        <div class="columns">
            <div class="column popup-img"> <img class="img-popup" src="${pet.img}" alt=""> </div>
            <div class="column popup-text"> <div class="pet-popup-name">${pet.name}</div>
            <div class="pet-type">${pet.type}-${pet.breed}</div>
            <div class="pet-description">${pet.description}</div>
            <div class="pet-age"><b>Age:</b> ${pet.age}</div>
            <div class="pet-inoculations"><b>Inoculations:</b> ${pet.inoculations}</div>
            <div class="pet-diseases"><b>Diseases:</b> ${pet.diseases}</div>
            <div class="pet-parasites"><b>Parasites:</b> ${pet.parasites}</div> </div>
    </div>
        </div>`
        
        popup.append(card)
        
                
            
        
}





