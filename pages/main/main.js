const screenWidth = window.screen.width
const urlJson = '../json/cards.json'
const slider = document.querySelector('.slider-slides')
let visibleSlidesName = []
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
        if(screenWidth >= 1131){
        createCards(random3(data))
        return data
        }
        if(screenWidth <= 425){
            createCards(random1(data))
            return data
        }
        if(screenWidth <= 1130){
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
    // console.log(visibleSlides)
    if(visibleSlidesName.length === 0){
 
        array.slice(0,3).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,3);
        
    } else{
    
        for(let i = 0; resultArr.length < 3; i++){

            if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            }
        }
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        // console.log(visibleSlides)
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
    // console.log(visibleSlides)
    if(visibleSlidesName.length === 0){
 
        array.slice(0,2).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,2);
        
    } else{
    
        for(let i = 0; resultArr.length < 2; i++){

            if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            }
        }
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        // console.log(visibleSlides)
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
    // console.log(visibleSlides)
    if(visibleSlidesName.length === 0){
 
        array.slice(0,1).map(x => visibleSlidesName.push(x.name))
        return array.slice(0,1);
        
    } else{
    
        for(let i = 0; resultArr.length < 1; i++){

            if(!(visibleSlidesName.includes(array[i].name))){
     
                resultArr.push(array[i])
            }
        }
        visibleSlidesName = []
        resultArr.map(x => visibleSlidesName.push(x.name)) 
        // console.log(visibleSlides)
        return resultArr
        
    }
    
}


let move = 0;


if(screenWidth >= 1131){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 1080;
        slider.style.right = move + 'px'
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
    
        move = move - 1080;
        if(move < 0){
            move = 1080
        }
        slider.style.right = move + 'px'
    })
}

if(screenWidth <= 401){
    document.querySelector('.rright2').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 1080;
        slider.style.right = move + 'px'
    })
    
    document.querySelector('.lleft2').addEventListener('click', event => {
        
        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random1(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move - 360;
        if(move < 0){
            move = 360
        }
        slider.style.right = move + 'px'
    })

}

if(screenWidth <= 767){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random3(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 1080;
        slider.style.right = move + 'px'
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
    
        move = move - 360;
        if(move < 0){
            move = 360
        }
        slider.style.right = move + 'px'
    })

}


if(screenWidth <= 1130){
    document.querySelector('.rright').addEventListener('click', event => {

        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random2(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move + 720;
        slider.style.right = move + 'px'
    })
    
    document.querySelector('.lleft').addEventListener('click', event => {
        
        new Promise((resolve, reject) => {
            resolve(fetch(urlJson))
        }).then((data) => data.json())
        .then((data) => {
            createCards(random2(data))
            return data
        })
        .then((data) => createPopup(data))
    
        move = move - 720;
        if(move < 0){
            move = 720
        }
        slider.style.right = move + 'px'
    })


}