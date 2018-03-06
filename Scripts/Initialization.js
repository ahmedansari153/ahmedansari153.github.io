$('.modal').modal();
$('.parallax').parallax();
$(".button-collapse").sideNav({
  closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: false // Choose whether you can drag to open on touch screens
});
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
$('.scrollspy').scrollSpy({
  scrollOffset: -25
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'Scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
//Used to start animations
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight+100 || document.documentElement.clientHeight+100) &&
    rect.right <= (window.innerWidth+100 || document.documentElement.clientWidth+100)
  );
}

var items = document.querySelectorAll(".timeline li");
var iconItems = document.querySelectorAll("#svgAttributes polygon");
var projects = document.querySelectorAll(".project");
var header = document.getElementById("lineDrawing");
var blink = document.getElementById("mainHead");
// code for the isElementInViewport function


function projectShow() {
  for (var i = 0; i < projects.length; i++) {
    if (isElementInViewport(projects[i]) && !projects[i].classList.contains('visible')) {
      projects[i].classList.add('visible')
      var showProject = anime({
        targets: projects[i],
        opacity: 1,
        translateY: '-100px',
        elasticy: 100,
        easing: 'easeInOutQuad'
      });
    }
  }
}
//Start animations on icons when each item is in viewport 
function iconShow() {
  for (var i = 0; i < iconItems.length; i++) {
    if (isElementInViewport(iconItems[i]) && !iconItems[i].classList.contains('visible')) {
      iconItems[i].classList.add('visible')
      var svgAttributes = anime({
			  targets: iconItems[i],
			  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
			  easing: 'easeInOutExpo',
			  duration: 1000,
			});
    }
  }
}
//Start animation on timeline
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
//Start animation on my name
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
//Animation for the blinker to get moved
function blinkSlide() {
  if (isElementInViewport(blink) && !blink.classList.contains('visible')) {
      blink.classList.remove('hidden')
      blink.classList.add('visible')
      var myAnimation = anime({
        targets: '.blink',
        translateX: '9.7em',
        duration: 3000,
        easing: 'easeInOutQuart'
      });
  }
}

//Add event listeners for the above functions
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

window.addEventListener("load", iconShow);
window.addEventListener("scroll", iconShow);

window.addEventListener("load", headerShow);
window.addEventListener("scroll", headerShow);

window.addEventListener("load", blinkSlide);
window.addEventListener("scroll", blinkSlide);

window.addEventListener("load", projectShow);
window.addEventListener("scroll", projectShow);