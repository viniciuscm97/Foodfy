const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

const divCardsContent = document.querySelectorAll('.card-content')


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
        const imageId = cards[i].getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `imagens/${imageId}.png`

        var h3Cards = divCardsContent[i].getElementsByTagName("h3");
        var pCards = divCardsContent[i].getElementsByTagName("p");

        modalOverlay.querySelector('h3').innerHTML = h3Cards[0].innerHTML
        modalOverlay.querySelector('p').innerHTML = pCards[0].innerHTML
        
    })
    
}


document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')

})

