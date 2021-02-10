var database;
var canvas;
var gameState=0;
var playerCount;
var form;
var game;
var player;



function setup(){
  database = firebase.database();
  //console.log(database);
  
  canvas = createCanvas(1000,1200);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  
}

