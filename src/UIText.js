import State from "./State";

export class UIText {

  constructor() {
    this.startButtonInit();
    this.modeSelectorInit();
  }

  startButtonInit() {
    document.getElementById("start-game").addEventListener('click', (el) => {
      this.startButtonClick(el)
    });
  }

  modeSelectorInit() {
    let selector =document.getElementById("change-mode");
    let mode = parseInt(window.localStorage.getItem('mode')?? 0);
    selector.getElementsByTagName('option')[mode].selected = true;

    selector.onchange = (function(el){
      window.localStorage.setItem("mode",selector.value);
      location.reload();
    });

  }

  startButtonClick(el) {
    this.hideTitleScreen();
    State.state = "STARTGAME";
  }

  enable(){
    let UI = document.querySelector("#ui");
    UI.classList.add("active");
  }

  disable(){
    let UI = document.querySelector("#ui");
    UI.classList.remove("active");

  }

  showGameUI() {
    this.enable();
    let UI = document.querySelector("#game-ui");
    UI.classList.add("active");
  }

  hideGameUI() {
    let UI = document.querySelector("#game-ui");
    UI.classList.remove("active");
  }

  showGameOver() {
    this.enable();
    let UI = document.querySelector("#panel-game-over");
    UI.classList.add("active");
  }

  hideGameOver() {
    let UI = document.querySelector("#panel-game-over");
    UI.classList.remove("active");
  }

  showPressAnyKey() {
    let UI = document.querySelector("#panel-press-any-key");
    UI.classList.add("active");
  }

  hidePressAnyKey() {
    let UI = document.querySelector("#panel-press-any-key");
    UI.classList.remove("active");
  }

  showNewHighScore() {
    this.enable();
    let UI = document.querySelector("#panel-new-highscore");
    UI.classList.add("active");
  }

  hideNewHighScore() {
    let UI = document.querySelector("#panel-new-highscore");
    UI.classList.remove("active");
  }

  showTitleScreen() {
    this.enable();
    let UI = document.querySelector("#title-screen");
    UI.classList.add("active");
    let buttons = document.querySelector("#intro");
    buttons.classList.add("active");
  }

  hideTitleScreen() {
    let UI = document.querySelector("#title-screen");
    UI.classList.remove("active");
    let buttons = document.querySelector("#intro");
    buttons.classList.remove("active");
  }

  hideLoadingScreen(){
    let loading = document.querySelector("#loading");
    loading.classList.remove('active');
  }
}
