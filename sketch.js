var canvas, bg;
var bg1Img, bg2Img;
var database;
var form, player, game;
var playerCount;
var gameState;
var allPlayers;


function preload() {
  bg1Img = loadImage("assets/Bg1.jpg");
  bg2Img = loadImage("assets/Bg2.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(bg1Img);
  //drawSprites();
  if(playerCount == 2)
  {
    game.update(1);
  //  console.log("1");
  }
  if(gameState === 1)
  {
    //console.log("2");
    game.play();
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}