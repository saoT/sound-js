var touches = document.getElementsByClassName('note');

for (var i=0; i<touches.length; i++) {
  touches[i].onclick = function () {
    var sound = event.target.attributes.sound.value;
    var audio = new Audio('./sounds/strings/' + sound + '.mp3');
    audio.play();  
  }
}


var beatbox = document.querySelector('#beatbox');
var pads = [
  {
    color: 'red',
    sound: 'hhd1kck08'
  },
  {
    color: 'yellow',
    sound: 'hhd1snr10'
  },
  {
    color: 'blue',
    sound: 'hi_c_06b'
  },
  {
    color: 'green',
    sound: 'Tamb_31e'
  }
];

pads.forEach( function (pad, i) {
  var htmlPad = document.createElement('div');
  htmlPad.setAttribute('class', 'note ' + pad.color);
  htmlPad.setAttribute('sound', pad.sound);
  beatbox.append(htmlPad);
  htmlPad.onclick = function () {
    var sound = event.target.attributes.sound.value;
    var audio = new Audio('./sounds/drums/' + sound + '.wav');
    audio.play();  
  }
});