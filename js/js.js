// only loads once the window completely loads
window.onload = function() {
  console.log('all is good :-)');

  //hide loading mask
  document.getElementById("loading").style.display = "none";
  document.getElementById("main-container").style.opacity = "1";

  // moving scroll
  $('#viewport').autoscroll();
}

// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
   random.appendChild(random.children[Math.random() * i | 0]);
}

// ADVANCE SLIDES
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
 showDivs(slideIndex += n);
}

function showDivs(n) {
 var i;
 var x = document.getElementsByClassName("slide");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length} ;
 for (i = 0; i < x.length; i++) {
   x[i].style.opacity = "0";
   x[i].style.zIndex = "0";
 }
 x[slideIndex-1].style.opacity = "1";
 x[slideIndex-1].style.zIndex = "999";
}

var map = document.querySelector('.map');

function toggleMap() {
  map.classList.toggle("map-open");
}
