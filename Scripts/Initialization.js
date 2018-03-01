function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");
var iconItems = document.querySelectorAll("#svgAttributes polygon")
var header = document.getElementById("lineDrawing")
// code for the isElementInViewport function
 
function iconShow() {
  for (var i = 0; i < iconItems.length; i++) {

    if (isElementInViewport(iconItems[i])) {
      var svgAttributes = anime({
			  targets: iconItems[i],
			  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
			  easing: 'easeInOutExpo',
			  duration: 1000
			});
    }
  }
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

function headerShow() {
    if (isElementInViewport(header) && !header.classList.contains('visible')) {
		  	header.classList.remove('hidden')
		  	header.classList.add('visible')
	      var lineDrawing = anime({
			  targets: '#lineDrawing .lines path',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  easing: 'easeInOutSine',
			  duration: 1500,
			  delay: function(el, i) { return i * 150 },
			  direction: 'alternate',
			  loop: false
			});
    }
  }
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

window.addEventListener("load", iconShow);
window.addEventListener("scroll", iconShow);

window.addEventListener("load", headerShow);
window.addEventListener("scroll", headerShow);


$(document).ready(function() {	
  // Initialize collapse button
  $(".button-collapse").sideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
  });
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.scrollspy').scrollSpy();
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'Scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var myAnimation = anime({
  targets: '.blink',
  translateX: 315,
  duration: 3000,
  easing: 'easeInOutQuart'
});
