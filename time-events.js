// ------------- TIME EVENTS --------------//

// 2 TYPES : TIME OUT ET INTERVAL

// le delai est specifie en millisecondes.
function everySecond () {
  console.log('interval occured');
}

var myInterval = window.setInterval(everySecond, 1000);

function afterDelay () {
  clearInterval(myInterval);
  console.log('timeout est passé');
}

window.setTimeout(afterDelay, 10000);

// Fonction recursive
function callingMyself () {
  // increment
  window.setTimeout(callingMyself, 1000);
}

callingMyself();

// ------------- OBJET DATE --------------//
// Date est l'objet de date disponible en javascript

var date = Date.now();

var today = new Date();
var seconds = today.toISOString();
console.log(seconds);