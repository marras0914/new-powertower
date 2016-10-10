$(document).ready(function() {
    $('#fullpage').fullpage({
    	
    	//Navigation
        // menu: '#menu',
        lockAnchors: false,
       	anchors: ['1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
        // navigation: false,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // showActiveTooltip: false,
        // slidesNavigation: true,
        // slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        // continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: true,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6', 'yellow', 'orange', '#C0C0C0', '#ADD8E6', 'red'],
        // paddingTop: '3em',
        // paddingBottom: '100px',
        fixedElements: '#header, footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

// (function () {
//     var vid = document.getElementById("bg-video");
//     // var pauseButton = document.querySelector("#pause-button");

//     function vidFade() {
//     vid.classList.add("stopfade");
//     }

//     vid.addEventListener('ended', function()
//     {
//     // only functional if "loop" is removed 
//     vid.pause();
//     // to capture IE10
//     vidFade();
//     }); 


//     pauseButton.addEventListener("click", function() {
//     vid.classList.toggle("stopfade");
//     if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//     } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//     }
//     })
// })();

(function () {

    var overlay = document.getElementById('overlay');
    var carousel = document.getElementById('slide-container');

    var na = document.getElementById('non-agency');
    var jumbo = document.getElementById('jumbo');
    var fha = document.getElementById('fha');
    var conv = document.getElementById('conv');
    var usda = document.getElementById('usda');

    var naModal = document.getElementById('non-agency-modal');
    var jumboModal = document.getElementById('jumbo-modal');
    var fhaModal = document.getElementById('fha-modal');
    var convModal = document.getElementById('conv-modal');
    var usdaModal = document.getElementById('usda-modal');


    var close = document.getElementsByClassName('close');


    na.addEventListener('click', displayModalNA);
    jumbo.addEventListener('click', displayModalJumbo);
    fha.addEventListener('click', displayModalFHA);
    conv.addEventListener('click', displayModalConv);
    usda.addEventListener('click', displayModalUSDA);

    // overlay.addEventListener('click', closeModal);
    // close.addEventListener('click', closeModal);


    function displayModalNA(){
        console.log("i was clicked")
        carousel.classList.add('active');
    }

    function displayModalJumbo(){
        carousel.classList.add('active');
    }

    function displayModalFHA(){
        overlay.classList.add('show');
        fhaModal.classList.add('show');
        overlay.classList.remove('close');
    }

    function displayModalConv(){
        overlay.classList.add('show');
        convModal.classList.add('show');
        overlay.classList.remove('close');
    }

    function displayModalUSDA(){
        overlay.classList.add('show');
        usdaModal.classList.add('show');
        overlay.classList.remove('close');
    }


    function closeModal(){
        overlay.classList.add('close');
        setTimeout(function(){
            overlay.classList.remove('show');
        }, 500);
    }

})();




(function(){
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  // box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

