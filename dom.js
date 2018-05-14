// ------------ LES SELECTORS -------------//

console.dir(document);

console.log('//---------- USING QUERY SELECTOR ----------//')
var elementRedByQuery = document.querySelector('.red');
var elementFirstDivByQuery = document.querySelector('#first-div');

console.dir(elementRedByQuery);
console.dir(elementFirstDivByQuery);

var elementNoteByQuery = document.querySelector('.note');

console.dir(elementNoteByQuery);

console.log('//---------- USING GET ELEMENT(S) ----------//')

console.log('//---- CLASS ----//');
var classRed = document.getElementsByClassName('red');
console.dir(classRed);

var classNote = document.getElementsByClassName('note');
console.dir(classNote[2]);

// classNote.forEach( function (div) {
//   console.log(div);
// });

for (i=0; i < classNote.length; i++) {
  console.log(classNote[i]);
}

console.log('//---- ID ----//');

var idFirstDiv = document.getElementById('first-div');
console.dir(idFirstDiv);

console.log('//---- TAG ----//');

var tagDiv = document.getElementsByTagName('div');
console.dir(tagDiv);

console.log('//-------------- EVENTS -------------//');

console.log('//------ MOUSE ------//');

idFirstDiv.onmouseenter = function () {
  console.log('hello');
}

idFirstDiv.onmouseout = function () {
  console.log('goodbye');
}

console.log('//------ FOCUS/CHANGE/BLUR ------//');
var input = document.querySelector('input');

input.onfocus = function () {
  console.log('clicked on input');
}

input.onchange = function () {
  console.log('value changed');
}

input.onblur = function () {
  console.log('left input');
}

input.onkeydown = function (event) {
  console.log(event);
}


document.body.onkeydown = function (event) {
  console.log(event);
}




