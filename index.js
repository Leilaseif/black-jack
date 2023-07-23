let firstCard = 11;
let secondCard= 1;
let sum = firstCard+secondCard;
let isAlive= true;
let hasBlachJack= false;
let message=""


let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
function start(){
    sumEl.innerHTML="sum:"+ sum
    if (sum<=20){
        message= "do you need more card?"
       
    } else if (sum===21){
        message="you got it!blackjack" 
        hasBlachJack=false
    }
    else {
        message="oops, you loose!!"
        isAlive=false;
    }
    messageEl.innerHTML=message
}
