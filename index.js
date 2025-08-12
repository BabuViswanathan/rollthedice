function rolldice() {
    document.querySelector("h1").innerHTML = "Hold on !"
var randomNumber1 = 6;
let interval1 = setInterval(() => {
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "./images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage1);
}, 200);

var randomNumber2 = 6;
let interval2 = setInterval(() => {
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);
}, 200);

setTimeout(() => {
    clearInterval(interval1);
    clearInterval(interval2);
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Won !"
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Won !"
}
else
{
    document.querySelector("h1").innerHTML = "Draw !"
}
}, 5000);
};