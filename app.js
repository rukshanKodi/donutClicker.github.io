//Adds a donut to the Donut Count for every button click

//Returns the Donut Count to the display
//Purchases Auto Clickers with donuts
//Checks whether you have enough donuts to purchase an Auto Clicker
//Increases the count of Auto Clickers with each purchase of an Auto Clicker
//Increases Auto Clicker cost with each purchase of an Auto Clicker
//Activates the Auto Clicker by applying clicks every second based on the Auto Clicker count
//Resets the game state. This action should reset the game to zero donuts and zero Auto Clickers

var clicks = 0;
var buyClicks = 0;
var firstBuyClick = true;
var autoPurchased = 100;
var totalPurchased = 0;

function zoomInOut() {
  var myImg = document.getElementById("idDonut");
  var currWidth = myImg.clientWidth;

  if (currWidth >= 300) {
    myImg.style.width = currWidth - 100 + "px";
    const timerF = setInterval(clickCounter, 1000);
    //console.log(timerF);
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
  buyClicks = 0;
  firstBuyClick = true;
  autoPurchased = 100;
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
  if (firstBuyClick == true && clicks > autoPurchased) {
    clicks = Math.abs(clicks - autoPurchased);
    buyClicks += 1;
    firstBuyClick = false;
    totalPurchased = totalPurchased + autoPurchased;

    document.getElementById("idCounter").innerHTML = clicks;
    document.getElementById("idCounter2").innerHTML = autoPurchased;
    document.getElementById("idCounter3").innerHTML = totalPurchased;
  } else if (
    firstBuyClick == false &&
    clicks > Math.trunc(autoPurchased * 1.1) &&
    buyClicks >= 1
  ) {
    autoPurchased = Math.trunc(autoPurchased * 1.1);
    clicks = Math.abs(clicks - autoPurchased);
    buyClicks += 1;
    firstBuyClick = false;
    totalPurchased = totalPurchased + autoPurchased;
    document.getElementById("idCounter").innerHTML = clicks;
    document.getElementById("idCounter2").innerHTML = autoPurchased;
    document.getElementById("idCounter3").innerHTML = totalPurchased;

    console.log("clicks:" + clicks);
    console.log("buyClicks:" + buyClicks);
    console.log("autoPurchased:" + autoPurchased);
    console.log("totalPurchased:" + totalPurchased);
  }
}
