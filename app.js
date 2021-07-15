
var name = prompt("What is your name?")
alert("Hello, welcome to my website " + name)

<<<<<<< HEAD
alert("Do you love cars? if you do, press ok to continue")

var favCar = prompt("Tell us what is your favorite car so we can provide you with great photos of it. You can choose from these cars you see 1)Tesla 2) Mercedes 3)Lamborghini")
=======
var favCar = prompt("Tell us what is your favorite car so we can provide you with great photos of it. You can choose from these cars you see")
>>>>>>> 60257619f3cafc197df2a30689b828dc8686b4f5

if(favCar == "Tesla")
{
  document.write("<div>"+
    "<img src='https://teslaweekly.com/wp-content/uploads/2018/01/roadster.png' alt='Tesla' width='300' height='200' title='Tesla'> "+ "<h4> Tesla </h4>"+
    "<img src='https://businesstech.co.za/news/wp-content/uploads/2021/02/Tesla-Model-X.png' alt='Tesla' width='300' height='200' title='Tesla'> "+ "<h4> Tesla </h4>"+
    "</div>")
}

else if(favCar == "Lamborghini")
{
document.write("<div>"+
    "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-huracan-evo-mmp-1-1600293029.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*' alt='Tesla' width='300' height='200' title='Lamborghini'> "+ "<h4> Lamborghini </h4>"+
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryP3v7Q3N2GhjLRGHMWeamuGZy-oBZWO9PBg5GlybfvGbxx-HKl9-o7nxAQp9p3-m1gg&usqp=CAU' alt='Tesla' width='300' height='200' title='Lamborghini'> "+ "<h4> Lamborghini </h4>" +

    "</div>")
}

else if(favCar == "Mercedes")
{
document.write("<div>"+
    "<img src='https://cdn.vox-cdn.com/thumbor/yZu9QZxpMh_3lIJU0ilrmlCLhz4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19580683/mercedes_vision_avtr_0478.jpg' alt='Mercedes' width='300' height='200' title='Mercedes'> "+ "<h4> Mercedes</h4>"+
    "<img src='https://pbs.twimg.com/media/E6KVHAfXMAAUFXh.jpg' alt='Mercedes' width='300' height='200' title='Mercedes'> "+ "<h4> Mercedes</h4>" +
    "</div>")
}
else
{
  alert("Sorry! We don't have this car ")
}
