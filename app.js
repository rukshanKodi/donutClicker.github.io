//Adds a donut to the Donut Count for every button click

//Returns the Donut Count to the display
//Purchases Auto Clickers with donuts
//Checks whether you have enough donuts to purchase an Auto Clicker
//Increases the count of Auto Clickers with each purchase of an Auto Clicker
//Increases Auto Clicker cost with each purchase of an Auto Clicker
//Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
//Resets the game state. This action should reset the game to zero donuts and zero Auto Clickers

var clicks = 0;
var autoClicks = 0;
var firstAutoClicks = true;
var balance = 0;
var autoTotal = 100;
var totalPurchased = 0;

function zoomInOut() {
  var myImg = document.getElementById("idDonut");
  var currWidth = myImg.clientWidth;

  if (currWidth >= 300) {
    myImg.style.width = currWidth - 100 + "px";
    const timerF = setInterval(clickCounter, 1000);
    console.log(timerF);
  } else {
    myImg.style.width = currWidth + 100 + "px";
  }
}

function clickCounter() {
  clicks += 1;
  document.getElementById("idCounter").innerHTML = clicks;

}

function fProcess() {
  zoomInOut();
  clickCounter();
}

function autoDonuts() {
  const timerF = setInterval(clickCounter, 1000);
  // let element = document.getElementById("idAutoCounter");
  // let disabled = element.getAttribute("disabled");
}

function resetGame() {
  clicks = 0;
  autoClicks = 0;
  firstAutoClicks = true;
  balance = 0;
  autoTotal = 100;
  totalPurchased = 0;
  clearInterval(clickCounter);
  document.getElementById("idCounter").innerHTML = clicks;
  document.getElementById("idCounter2").innerHTML = clicks;
  document.getElementById("idCounter3").innerHTML = clicks;
}

function btnLocker(elementId, status) {
  let element = document.getElementById(elementId);
  let disabled = element.getAttribute(status);
}

function autoBuy() {
  if (firstAutoClicks == true && clicks > 101) {
    clicks = Math.abs(clicks - autoTotal);
    autoClicks += 1;
    firstAutoClicks = false;
    totalPurchased = totalPurchased + autoTotal;
  
    document.getElementById("idCounter").innerHTML = clicks;
    document.getElementById("idCounter2").innerHTML = autoTotal;
    document.getElementById("idCounter3").innerHTML = totalPurchased;
   
  } else if (firstAutoClicks == false && clicks > 101 && autoClicks >= 1) {
    autoTotal = Math.trunc(autoTotal * 1.1);
    clicks = Math.abs(clicks - autoTotal);
    autoClicks += 1;
    firstAutoClicks = false;
    totalPurchased = totalPurchased + autoTotal;
    document.getElementById("idCounter").innerHTML = clicks;
    document.getElementById("idCounter2").innerHTML = autoTotal;
    document.getElementById("idCounter3").innerHTML = totalPurchased;
  }
}


