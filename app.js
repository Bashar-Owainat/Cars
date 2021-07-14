
var name = prompt("What is your name?")
alert("Hello, welcome to my website " + name)

var favCar = prompt("What is your fav car?")

if(favCar == "Tesla")
{
  document.write("<div>"+
    "<img src='https://www.regional-kurier.com/wp-content/uploads/2021/04/Tesla.jpg' alt='Tesla' width='300' height='200' title='Tesla'> "+ "<h4> Tesla </h4>"+
    "</div>")
}

else if(favCar == "Lamborghini")
{
document.write("<div>"+
    "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-urus-mmp-1-1592423712.jpg?crop=0.894xw:1.00xh;0.0561xw,0&resize=640:*' alt='Tesla' width='300' height='200' title='Lamborghini'> "+ "<h4> Lamborghini </h4>"+
    "</div>")
}

else if(favCar == "Mercedes")
{
document.write("<div>"+
    "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-c-class-106-1613767205.jpg?crop=0.889xw:1.00xh;0.0353xw,0&resize=640:*' alt='Mercedes' width='300' height='200' title='Mercedes'> "+ "<h4> Mercedes</h4>"+
    "</div>")
}
else
{
  alert("Sorry! We don't have this car ")
}
