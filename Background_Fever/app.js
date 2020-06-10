const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color = document.querySelector(".color");
var LastNumber=-1;
btn.addEventListener("click",function(){
    var randomNumber=getRandomNumber();
    if(LastNumber==randomNumber)
    {
      randomNumber=randomNumber+1 %3;
      document.body.style.backgroundColor=colors[randomNumber];
      color.textContent=colors[randomNumber];
      LastNumber=randomNumber;
    } else {
      document.body.style.backgroundColor=colors[randomNumber];
      color.textContent=colors[randomNumber];
      LastNumber=randomNumber;
    }
});

function getRandomNumber (){
  return Math.floor(Math.random()*colors.length);
}