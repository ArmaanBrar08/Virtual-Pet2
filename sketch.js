//Create variables here
var dog, happyDog;
var Food, foodStock = 0;
var database;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogimg.png");
  happyDogImage = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400, 350, 10, 10);
  dog.addImage(dogImage);
  dog.scale = 0.5
  database = firebase.database()
  foodStockref = database.ref('Food')
   foodStockref.on("value", readStock ,showError);
   console.log(database)
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here
  stroke("white")
  textSize()
  text(foodStock, 200, 100);
}

function keyPressed(){
   if (keyCode === UP_ARROW){
     foodStock = foodStock - 1;
     writeStock(foodStock)
     dog.addImage(happyDogImage);
   }
}

function readStock(data){
   foodStock = data.val();
   console.log(foodStock);
}

function writeStock(Food){
   foodStockr = database.ref('/');
   foodStockr.update({
     Food : Food
   })
}

function showError(){
  console.log("Error")
}



