
var name = prompt("What is your name?")
alert("Hello, welcome to my website " + name)

function userCar(){

alert("Do you love cars? if you do, press ok to continue")

var favCar = prompt("Tell us what is your favorite car so we can provide you with great photos of it. You can choose from these cars you see 1)Tesla 2) Mercedes 3)Lamborghini")


while(favCar != "Tesla" && favCar != "Mercedes" && favCar != "Lamborghini"){
  favCar = prompt("Sorry you have to pick one of these (Tesla, Mercedes, Lamborghini)")
}

if(favCar == "Tesla")
{
  var numOfCopies = prompt("How many copies do you want to see of Tesla? ")

  for(var i = 0; i < numOfCopies; i++){  

   document.write("<div>"+
    "<img src='https://businesstech.co.za/news/wp-content/uploads/2021/02/Tesla-Model-X.png' alt='Tesla' width='300' height='200' title='Tesla'> "+ "<h4> Tesla </h4>"+
    "</div>")
  }
}

else if(favCar == "Lamborghini")
{
  numOfCopies = prompt("How many copies do you want to see of Lamborghini? ")
  
  for(var i = 0; i < numOfCopies; i++){  
    document.write("<div>"+
    "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*' alt='Tesla' width='300' height='200' title='Lamborghini'> "+ "<h4> Lamborghini </h4>" +

    "</div>")
  }
}

else if(favCar == "Mercedes")
{
  numOfCopies = prompt("How many copies do you want to see of Mercedes? ")
  
  for(var i = 0; i < numOfCopies; i++){  
   document.write("<div>"+ 
    "<img src='https://pbs.twimg.com/media/E6KVHAfXMAAUFXh.jpg' alt='Mercedes' width='300' height='200' title='Mercedes'> "+ "<h4> Mercedes</h4>" +
    "</div>")
  }
}
}

userCar()

function rateUs(){
var rate = prompt("What star rating would you give, 1-5?")
alert("Thanks for you feedback")
}

rateUs()
