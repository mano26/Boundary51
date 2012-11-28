var SHOW_LENGTH = 4500;
var FADE_LENGTH = 1500;
var LOOP_LENGTH = (SHOW_LENGTH + FADE_LENGTH) * 3;
var FIXED_SIGNUP_THRESHOLD = 200;
var SCROLLER_HIDE_THRESHOLD = 2000;

function introSlides () {
  var image2 = $('.intro-img-2');
  var image3 = $('.intro-img-3');
  
  image2.fadeOut(0);
  image3.fadeOut(0);
  
  image2.delay(SHOW_LENGTH).fadeIn(FADE_LENGTH);
  image2.delay(SHOW_LENGTH + FADE_LENGTH).fadeOut(0);
  image3.delay(SHOW_LENGTH * 2 + FADE_LENGTH).fadeIn(FADE_LENGTH);
  image3.delay(SHOW_LENGTH).fadeOut(FADE_LENGTH);
}

function onMove (e) {
  // X dimension variables
  var touchX = e.originalEvent.touches && e.originalEvent.touches[0] && e.originalEvent.touches[0].pageX;
  var offsetX = $(this).offset().left;
  var mouseX = (touchX || e.pageX) - offsetX;
  var overlayLeftX = mouseX + 'px';

  // Y dimension variables
  var touchY = e.originalEvent.touches && e.originalEvent.touches[0] && e.originalEvent.touches[0].pageY;
  var offsetY = $(this).offset().top;
  var mouseY = (touchY || e.pageY) - offsetY;
  var overlayLeftY = mouseY + 'px';

  e.preventDefault();
  $('.tryer-onswipe').css('left', overlayLeftX);
  $('.tryer-grab').css('top', overlayLeftY);
}

function onOut (e) {
  // X dimension variables
  var distanceX = $(this).width();
  var middleX = distanceX / 2;
  
  // Y dimension variables
  var distanceY = $(this).height();
  var middleY = distanceY / 2;
  
  // For relative position of interaction when leaving the tryer
  // var cur = parseInt($('.tryer-onswipe').css('left'), 10);
  $('.tryer-onswipe').delay(150).animate({
    'left': middleX
  }, 300);
  
  $('.tryer-grab').delay(150).animate({
    'top': middleY
  }, 300);
}

function customizeOpen () {
  $('.customize').addClass('open');
}

function customizeClose () {
  $('.customize').removeClass('open');
}

$(document).ready(function () {
  introSlides();
  setInterval(function () {
    introSlides();
  }, LOOP_LENGTH);
  
  $('.tryer').on('mousemove touchmove touchstart', onMove);
  $('.tryer').on('mouseout touchend', onOut);

  // recenter the grabber after window resize
  $(window).resize(function() {
    $('.tryer-onswipe').css('left', '50%');
    $('.tryer-grab').css('top', '50%');
  });

	$('#customize-learn-more').on('click', customizeOpen);
  $('#customize-learn-back').on('click', customizeClose);
});

window.onscroll = function() {
  var fixedSignupEnabled = document.documentElement.scrollTop > FIXED_SIGNUP_THRESHOLD || self.pageYOffset > FIXED_SIGNUP_THRESHOLD;
  var scrollerHideEnabled = document.documentElement.scrollTop > SCROLLER_HIDE_THRESHOLD || self.pageYOffset > SCROLLER_HIDE_THRESHOLD;
  
	if (fixedSignupEnabled) {
		$('.nav-fixed').addClass('show');
		$('.rel-signup').addClass('gone');
	} else {
		$('.nav-fixed').removeClass('show');
		$('.rel-signup').removeClass('gone');
	};

	if (scrollerHideEnabled) {
		$('.scroller').addClass('gone');
	} else {
		$('.scroller').removeClass('gone');
	}
}
