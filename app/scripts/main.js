$(document).ready(function(){


    $('#fullpage').fullpage({
        
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
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
        afterLoad: function(anchorLink, index){
            // document.getElementById('bg-video').play(); 
        },
        afterRender: function(){
            $('#nav').addClass('no-show');
            $('.fp-controlArrow').addClass('no-show');
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            $('.person').removeClass('active');
            $('.slide').removeClass('current');
            $('.badge').removeClass('active');
            $('.fp-controlArrow').removeClass('no-show');
             $('#nav').removeClass('no-show');
            switch ( slideIndex ){
                case 0: 
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(0)').addClass('active');
                    // document.getElementById('bg-video').play();
                    $('#nav').addClass('no-show');
                    $('.fp-controlArrow').addClass('no-show');
                    break;
                case 1:
                    // page 2
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(1)').addClass('active');
                    break;
                case 2:
                    // page 3
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(1)').addClass('active');
                    $('.third-page').addClass('current');
                    break;
                case 3:
                    // page 4
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(2)').addClass('active');
                    break;
                case 4: 
                    // page 5
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(2)').addClass('active');
                    $('.fifth-page').addClass('current');
                    break;
                case 5:
                    // page 6
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(3)').addClass('active');
                    // $('.faces-container').addClass('active');
                    $('.person').addClass('active');
                    break;
                case 6:
                    // page 7    ##new page##
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(3)').addClass('active');
                    $('.tenth-page').addClass('current');
                    break;
                case 7:
                    // page 8
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(4)').addClass('active');
                    break;
                case 8:
                    // page 9
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(5)').addClass('active');
                    $('.badge').addClass('active');
                    break;
                case 9:
                    // page10
                    $('#menu li').removeClass('active');
                    $('#menu li:eq(5)').addClass('active');
                    $('.ninth-page').addClass('current');
                    break;
            
            }

        }
        // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

   });
});
           

(function () {
    //product page/ carousel navigation
    var overlay = document.getElementById('overlay');
    var carousel = document.getElementById('slide-container');

    var na = document.getElementById('non-agency');
    var jumbo = document.getElementById('jumbo');
    var fha = document.getElementById('fha');
    var conv = document.getElementById('conv');
    var usda = document.getElementById('usda');
    var va = document.getElementById('va');

    var naModal = document.getElementById('non-agency-modal');
    var jumboModal = document.getElementById('jumbo-modal');
    var fhaModal = document.getElementById('fha-modal');
    var convModal = document.getElementById('conv-modal');
    var usdaModal = document.getElementById('usda-modal');
    var vaModal = document.getElementById('va-modal');


    var closen = document.getElementById('close-na');
    var closej = document.getElementById('close-jumbo');
    var closef = document.getElementById('close-fha');
    var closec = document.getElementById('close-conv');
    var closea = document.getElementById('close-usda');
    var closev = document.getElementById('close-va');


    var items = carousel.querySelectorAll('.content li');
    // var current = items[0];

    na.addEventListener('click', displayModalNA);
    jumbo.addEventListener('click', displayModalJumbo);
    fha.addEventListener('click', displayModalFHA);
    conv.addEventListener('click', displayModalConv);
    usda.addEventListener('click', displayModalUSDA);
    va.addEventListener('click', displayModalVA);

    overlay.addEventListener('click', closeModal);
    closen.addEventListener('click', closeModal);
    closej.addEventListener('click', closeModal);
    closef.addEventListener('click', closeModal);
    closec.addEventListener('click', closeModal);
    closea.addEventListener('click', closeModal);
    closev.addEventListener('click', closeModal);
 
    function displayModalNA(){
        carousel.classList.add('active');
        // carousel.classList.remove('closed');
        naModal.classList.add('current');
        navigate(0);
    }

    function displayModalJumbo(){
        carousel.classList.add('active');
        jumboModal.classList.add('current');
        navigate(1);
    }

    function displayModalFHA(){
        carousel.classList.add('active');
        fhaModal.classList.add('current');
        navigate(2);
    }

    function displayModalConv(){
        carousel.classList.add('active');
        convModal.classList.add('current');
        navigate(3);
    }

    function displayModalUSDA(){
        carousel.classList.add('active');
        usdaModal.classList.add('current');
        navigate(4);
    }

    function displayModalVA(){
        carousel.classList.add('active');
        vaModal.classList.add('current');
        navigate(5);
    }

    function closeModal(){
        carousel.classList.remove('active');
        // carousel.classList.add('closed');
        counter = 0;
        current.classList.remove('current');
        
    }


    // carousel naviagtion
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




// $(document).ready(function() {
//     document.getElementById('bg-video').play(); 
// });


// (function () {
//     var homeSlide = document.getElementById('home-slide');
//     var vid = document.getElementById('bg-video');
//     var pauseButton = document.getElementById('pause');
//     var playButton = document.getElementById('play');
//     function vidFade() {
//         vid.classList.add('stopfade');
//     }

//     vid.addEventListener('ended', function(){
//         // only functional if "loop" is removed 
//         vid.pause();
//         // to capture IE10
//         vidFade();
//     }); 


//     pauseButton.addEventListener('click', function() {
//         vid.classList.toggle('stopfade');
//         if (vid.paused) {
//             vid.play();
//             $(playButton).addClass('active');
//             $(pauseButton).removeClass('active');
//             // pauseButton.innerHTML = "Pause";
//         } else {
//             vid.pause();
//             $(pauseButton).addClass('active');
//             $(playButton).removeClass('active');
//             // pauseButton.innerHTML = "Paused";
//         }
//     });
//     playButton.addEventListener('click', function() {
//         vid.classList.toggle('stopfade');
//         if (vid.paused) {
//             vid.play();
//             $(playButton).addClass('active');
//             $(pauseButton).removeClass('active');
//             // pauseButton.innerHTML = "Pause";
//         } else {
//             vid.pause();
//             $(pauseButton).addClass('active');
//             $(playButton).removeClass('active');
//             // pauseButton.innerHTML = "Paused";
//         }
//     });
  
// })();
