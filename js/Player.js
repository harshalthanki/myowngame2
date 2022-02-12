class Player {
  constructor() {
    this.name = null;
    this.index = null;
    //this.score = 0;
   // this.rank = 0;
  }
  addPlayer(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({
      name: this.name,
      //score: this.score,
     // rank: this.rank
    })
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data) {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name: this.name,
      // score: this.score,
      // rank: this.rank
     });

  }

  static getPlayersInfo(){
    var playerInfoRef= database.ref("players")
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val()
    })
  }
}