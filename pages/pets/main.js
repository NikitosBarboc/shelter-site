const screenWidth = window.screen.width
const urlJson = '../json/cards.json'
const slider = document.querySelector('.slider-slides')
const left = document.querySelector('.lleft')
const right = document.querySelector('.rright')
const counter = document.querySelector('.mid')
const pet = document.querySelectorAll('.pet')
let visibleSlidesName = []

console.log(counter)
right.addEventListener('click', event => {
    counter.innerText = +counter.innerText+1
})
left.addEventListener('click', event => {
    if(+counter.innerText === 1){
        counter.innerText = 2
    } else{
    counter.innerText = +counter.innerText-1
    }
})


function createCards(pets){
    for(let pet of pets){
        const newPet = document.createElement('div')
        newPet.classList.add('pet')
        newPet.innerHTML = `<div class="petContainer">
        <div class="images"><img class="img" src="${pet.img}" alt=""></div>
        <div class="pet-name">${pet.name}</div>
        <div class="btn-pets"><button class="button-pets" data-name="${pet.name}">Learn more</button></div>
        </div>` 
        slider.append(newPet)
            
    }
}


new Promise((resolve, reject) => {
    resolve(fetch(urlJson))
}).then((data) => data.json())
.then((data) => {
        if(screenWidth >= 1200){
            createCards(random3(data))
            return data
        }
        if(screenWidth < 580){
            createCards(random1(data))
            return data
        }
        if(screenWidth <= 1199){
            createCards(random2(data))
            return data
        }
    
}).then((data) => createPopup(data))


function random3(array) {
    let resultArr = []
    let currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    if(visibleSlidesName.length === 0){
 
        array.slice(0,8).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,8);
        
    } else{
    
        for(let i = 0; resultArr.length < 8; i++){

            // if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            // }
           
        }
        
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        return resultArr
    }
    
}

function random2(array) {
    let resultArr = []
    let currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    if(visibleSlidesName.length === 0){
 
        array.slice(0,6).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,6);
        
    } else{
    
        for(let i = 0; resultArr.length < 6; i++){

            // if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            // }
        }
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        return resultArr
    }
    
}

function random1(array) {
    let resultArr = []
    let currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    if(visibleSlidesName.length === 0){
 
        array.slice(0,3).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,3);
        
    } else{
    
        for(let i = 0; resultArr.length < 3; i++){

            // if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            // }
        }
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        return resultArr
    }
    
}

let move = 0;


if(screenWidth >= 889){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 479.1;
        slider.style.bottom = move + 'px'
    })
    
    document.querySelector('.lleft').addEventListener('click', event => {
        
        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move - 479.1;
        if(move < 0){
            move = 479.1
        }
        slider.style.bottom = move + 'px'
    })
}

if(screenWidth < 580){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 1437.3;
        slider.style.bottom = move + 'px'
    })
    
    document.querySelector('.lleft').addEventListener('click', event => {
        
        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random1(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move - 1437.3;
        if(move < 0){
            move = 1437.3;
        }
        slider.style.bottom = move + 'px'
    })
}
if(screenWidth < 889){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random2(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 1437.3;
        slider.style.bottom = move + 'px'
    })
    
    document.querySelector('.lleft').addEventListener('click', event => {
        
        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move - 1437.3;
        if(move < 0){
            move = 1437.3;
        }
        slider.style.bottom = move + 'px'
    })
}
