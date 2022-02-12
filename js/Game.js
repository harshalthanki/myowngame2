class Game {
  constructor() {
    this.resetButton = createButton("Reset Game");
  }

  start()
  {
    form = new Form()
    form.display()

    player = new Player()
    player.getCount()
    
  }

  handleElements()
  {
    form.hide();
    this.resetButton.position(width/2 +230, 100);
  }
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  play()
  {
    this.handleElements();
    this.handleResetButton();
    Player.getPlayersInfo();
    // console.log("1.5");
    if(allPlayers!=undefined){
      textSize(50)
      fill("limegreen")
      text("Part 1 of the game",width/2-600,height/2+200)
      text("was till here only!",width/2-600,height/2+250)
      
   }
   
  }
  handleResetButton()
     {
       this.resetButton.mousePressed(()=>{
         database.ref("/").set({
           playerCount: 0,
           gameState: 0,
           players: {}
         })
         window.location.reload()
       })
     }
  
}
