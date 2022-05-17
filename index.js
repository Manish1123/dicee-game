
var randomNumber1=Math.floor((Math.random()*6))+1;
var ii1="dice"+randomNumber1+".png";
var jj1="images/" + ii1;
document.querySelectorAll("img")[0].setAttribute("src",jj1);
var randomNumber2=Math.floor((Math.random()*6))+1;
var ii2="dice"+randomNumber2+".png";
var jj2="images/" + ii2;
document.querySelectorAll("img")[1].setAttribute("src",jj2);

if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🎖️Player 2 wins!";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🎖️Player 1 wins!";
}
else 
{
    document.querySelector("h1").innerHTML="🦍Draw!"
}