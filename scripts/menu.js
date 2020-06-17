// Template and demo code (c) copyright 2019 Angelica Guemes, all rights reserved
//here it will be the handlers for the level buttons and the sound button
'use strict'; //use the strict debugger compiler
import Map from './map.js'
console.log("JS working menu.js");
export default class Menu{
  constructor(map, sound){
     this.sound = true;
     this.mySound = sound;
     this.map = map;
     this.amountMines=10;
  }

  run(){}

  changeFlagHUD(){
    let flags = this.map.getFlags();
    console.log(flags);
    this.updateMinesHUD(flags);
  }

  handleLevelClick(event){
      if (event.target.className != "levels") { //MAKES SHURE IT CLICKED IN AN ACTIUAL ITEM AND NOT THE BLANCK SPACE IN THE LEVELS DIV
        /*Make the last level selected unclick*/
          document.querySelector(`.click`).className = "levels-item";
          /*Make the current level selected clicked*/
          event.target.className = "levels-item click";
          this.map.resetTime();
        if (event.target.id == "easy") { //w, h, tr, td, mines
            this.amountMines = 10;
            this.map.amountMines=10;
            this.map.renderMineField(400, 400, 8, 8, this.amountMines, 1 );
        } else if (event.target.id == "intermediate") {//w, h, tr, td, mines
            this.amountMines = 30;
            this.map.amountMines=30;
           this.map.renderMineField( 466, 526, 16, 16, this.amountMines, 2);
        } else {                    //w, h, tr, td, mines
            this.amountMines = 40;
            this.map.amountMines=40;
            this.map.renderMineField(700, 466, 16, 30, this.amountMines, 3 );
         }
         this.updateMinesHUD(0);
         this.map.initGridHandlers(); //If I dont add this line it wont detect the clicks when user changes the level
      }
  }

  handleSoundClick(event){
    if (this.sound == true) { //turn off music and change speacker to the ugly one
      this.sound=false;
      document.querySelector('.sound-hud').innerHTML = `<img id="sound" src="media/megaphone2.png" width="38px" height="38px">`;
    }else{ //turn music on and change speaker to the nice one
      this.sound = true;
      document.querySelector('.sound-hud').innerHTML = `<img id="sound" src="media/megaphone.png" width="38px" height="38px">`;
    }
  }

  updateMinesHUD(flags){ //prints the number of mines in the game HUD.
    let minesHUD = this.amountMines-flags;
    if (minesHUD<0) {
      document.querySelector('#numberMines').innerHTML =  minesHUD;
    }else if (minesHUD.toString().length ==1) {
      document.querySelector('#numberMines').innerHTML = '00'+ minesHUD;
    }else{
    document.querySelector('#numberMines').innerHTML = '0'+ minesHUD;
    }
    document.querySelector('#timer').innerHTML = '000';
  }

  initSound(){
    this.mySound.play();
  }

}
const menu= new Menu();
menu.run();