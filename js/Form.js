class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Authorize yourself")
    this.playButton = createButton("INITIATE")
    
    this.greeting = createElement("h1")
    
  }
setElementsPosition()
{
  
  this.input.position(width-width+20,height/height+49)
  this.playButton.position(width-width+20,height/height+99)
  this.greeting.position(width/2-600,height-height+50)
}
display()
{
  this.setElementsPosition()
  this.handleMousePressed()
}
hide() {
  this.greeting.hide();
  this.playButton.hide();
  this.input.hide();
}
handleMousePressed()
{
  this.playButton.mousePressed(()=>{
    this.input.hide()
    this.playButton.hide()
    var message = `
      Hello Agent ${this.input.value()}
      </br>wait for another agent to join...`;
      this.greeting.html(message);
      playerCount+=1
      player.name = this.input.value()
      player.index = playerCount;
      player.updateCount(playerCount)
      player.addPlayer();
  });
  
}
}
