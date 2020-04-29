const cards = document.querySelectorAll('.card')

var showHide = true

const show = "Mostrar"
const hide = "Esconder"

// ingredients
const closeHidenIngredients = document.querySelector('.more-infoIngredients')
const recipeIngredients = document.querySelector('.recipe-ingredients')

//prepare
const closeHidenPreparations = document.querySelector('.more-infoPreparation')
const recipePreparation = document.querySelector('.recipe-preparation')

// ingredients
const closeHidenInformation = document.querySelector('.more-infoInformation')
const recipeInformation = document.querySelector('.recipe-information')


// calling click listener
closeHidenIngredients.addEventListener('click',function(){
    showMoreInformation(closeHidenIngredients, recipeIngredients)
})

closeHidenPreparations.addEventListener('click',function(){
    showMoreInformation(closeHidenPreparations, recipePreparation)
})

closeHidenInformation.addEventListener('click',function(){
    showMoreInformation(closeHidenInformation, recipeInformation)
})
// entering into recipes
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
        
        window.location.href = `/recipes/${i}`
    })
    
}

// function to show and hide more information

function showMoreInformation(classButton, classInfo){
    if(showHide){
        classInfo.classList.add('hidden')
        classButton.querySelector('p').innerHTML = show
        showHide = false
    }else{
        classInfo.classList.remove('hidden') 
        classButton.querySelector('p').innerHTML = hide
        showHide = true
    }

}