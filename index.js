
let sum = 0
let cards=[]
let hasBlackJack=false;
let isAlive=false;

let player ={
    Name:"leila",
    cash: 200 
}
let messageEl=document.getElementById("messageel")
let cardEl=document.getElementById("cardel")
let sumEL=document.getElementById("sumel")


function randomGameCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11

    }else if(randomNumber>10){
       return 10

    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard=randomGameCard()
    let secondCard=randomGameCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    renderCard()
}

function renderCard(){
   cardEl.innerHTML="cards: "
    for (let i=0; i<cards.length; i++){
    cardEl.textContent+=  cards[i]+" "}

    sumEL.innerHTML= "sum: "+sum

     if (sum<=20){
        messageEl.innerHTML=" draw another card?"
        
     }else if (sum===21){
     messageEl.innerHTML= "you Win!!!"
     hasBlackJack=true
     }else{
        messageEl.innerHTML= "oops...you loose!!!"
        isAlive=false
     }
    }
    
function newCard(){
    if ( isAlive===true && hasBlackJack===false){
    let newOne=randomGameCard();
    sum +=newOne
   
    cards.push(newOne)
    renderCard()
    
    }
}