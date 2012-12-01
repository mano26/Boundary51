// $(function() {
// 	$.easing.def = "easeInOutQuint";

// 	$('.field').focus(function() {
//         if(this.title==this.value) {
//             this.value = '';
//         }
//     }).blur(function(){
//         if(this.value=='') {
//             this.value = this.title;
//         }
//     });

//     if($('#footer-push').length) {
//         var footer_height = '-' + $('footer').outerHeight() + 'px';

//         $('#footer-push').css({ height: $('footer').outerHeight() });

//         $('#wrap').css({ marginBottom: footer_height })
//     }

//     if($('.has-shadow').length) {
//         add_shadows();
//     }

//     $(window).load(function() {
//         if($('.three-cols .shadow-container').length) {
//             $('.three-cols .shadow-container').each(function() {
//                 var bg_src = 'url(' + $(this).find('img').attr('src') + ')';
//                 var box_height = $(this).find('img').height();
//                 $(this).css({
//                     'background': bg_src,
//                     height: box_height
//                 }).find('img').hide();
//             });
//         }
//     	if($('#home').length) {
//             if($.browser.msie && $.browser.version <= 7) {
//                 $('#wrap').prepend('<div style="height: 615px;" />');
//             }

//             determine_positions();
//             $(window).scroll(function() {
//                 determine_location();
//             });

//             $('a[href*="#"]').on('click', function() {
//                var page_id = $(this).attr('href');
//                scroll_to_page(page_id);
//                return false; 
//             });

//     		$('#tour .slider-container').flexslider({
//     			animation: 'slide',
//     			animationDuration: 900,
//     			controlNav: false,
//     			keyboardNav: false,
//     			prevText: '',
//     			nextText: '',
//     			start: function(slider) {
//     				slider.directionNav.appendTo('#tour .macbook-air');
    				
//     				var slide_title = slider.find('li').eq(slider.currentSlide + 1).find('img').attr('alt');
//     				var slide_text = slider.find('li').eq(slider.currentSlide + 1).find('.notext').html();

//     				$('#tour .slide-info h3').text(slide_title);
//     				$('#tour .slide-info p').html(slide_text);
//     				$('#tour .slide-info').fadeIn(500);
//     			},
//     			before: function(slider) {
//     				$('#tour .slide-info').fadeOut(500);
//     			},
//     			after: function(slider) {
//     				var slide_title = slider.find('li').eq(slider.currentSlide + 1).find('img').attr('alt');
//     				var slide_text = slider.find('li').eq(slider.currentSlide + 1).find('.notext').html();

//     				$('#tour .slide-info h3').text(slide_title);
//     				$('#tour .slide-info p').html(slide_text);
//     				$('#tour .slide-info').fadeIn(500);
//     			}
//     		});
//     	}
//     });
// });

// var pages = [];
// var top_positions = [];

// function determine_positions() {
//     pages.push('home');
//     top_positions.push(0);

// 	var i = 1;
// 	$('#wrap > .fake-page').each(function() {
// 		var section_id = $(this).attr('id');
// 		var section_top = Math.round($(this).offset().top);

// 		pages.push(section_id);
// 		top_positions.push(section_top);
// 	});

//     if($.browser.msie && $.browser.version <= 7) {
//         top_positions[1] = 635;
//     }

// 	determine_location();
// }

// function determine_location() {
// 	var win_top = $(window).scrollTop();

// 	for(i=0;i<top_positions.length;i++) {
// 		if(win_top >= top_positions[i] && win_top < top_positions[i+1]) {
// 			if($('header nav .current').length) {
//                 $('header .current').removeClass('current');         
//             }
// 			$('header nav a').each(function() {
// 				if($(this).attr('href').indexOf(pages[i]) != -1) {
// 					$(this).addClass('current');
// 				}
// 			});
// 		}
// 		if(win_top + $(window).height() >= $('#wrap').height()-80) {
// 			$('header .current').removeClass('current');
// 			$('header nav a:last').addClass('current');
// 		}
// 	}
// }

// function scroll_to_page(page_id) {
//     page_id = page_id.replace('#', '');
//     var page_top;
//     for(i=0;i<=pages.length;i++) {
//         if(page_id == pages[i]) {
//             page_top = top_positions[i];
//         }
//     }

//     var current_top = $(window).scrollTop();
//     var diff = Math.abs(current_top - page_top)*.75;

//     $('html, body').stop().animate({
//         scrollTop: page_top
//     }, {
//         easing: 'swing',
//         duration: diff
//     });
// }

// function find_login_demo() {
//     $('.sky-login .grey-button, .sky-login p.small').remove();
//     $('.sky-login .theme-field').after('<span class="theme-small-spinner" />');
//     $.colorbox.resize();

//     setTimeout(function() {
//        $.colorbox({
//            href: 'ajax/login-error.html'
//        });
//     }, 3000);
// }

// function find_login_success_demo() {
//     $('.sky-login .grey-button, .sky-login p.small').remove();
//     $('.sky-login .theme-field').after('<span class="theme-small-spinner" />');
//     $.colorbox.resize();

//     setTimeout(function() {
//        $.colorbox({
//            href: 'ajax/login-success.html'
//        });
//     }, 3000);
// }

// function add_shadows() {
//     $('.has-shadow').each(function() {
//         $(this).removeClass('has-shadow').wrap('<div class="shadow-container" />').parent().append('<span class="overlay" />'); 
//     });
// }