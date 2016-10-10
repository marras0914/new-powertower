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

(function () {
    var vid = document.getElementById("bg-video");
    // var pauseButton = document.querySelector("#pause-button");

    function vidFade() {
    vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function()
    {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
    }); 


    pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
    if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
    } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
    }
    })




})();