$(document).ready(function() {
	$('.colorbox').live('click', function() {
		var c_href = $(this).attr('href');
		$.colorbox({
			href: c_href,
			opacity: 0.7,
			initialWidth: 30,
			initialHeight: 30,
			fixed: true,
			close: '',
			onComplete: function() {
				$.colorbox.resize();
			}
		});
		return false;
	});

	$('.theme-field').live('focus', function() {
		if(this.value == this.title) {
			this.value = '';
		}
	}).live('blur', function() {
		if(this.value == '') {
			this.value = this.title;
		}
	});

	$('.theme-colorbox').colorbox({
		opacity: 0.7,
		onComplete: function() {
			$.colorbox.resize();
		}
	});

	if($('.theme-radio').length) 
	{
		custom_radio();
	}

	if($('.theme-checkbox').length) 
	{
		custom_check();
	}	
	
	// Setup tool tips.
	if($('.trigger-tooltip').length) 
	{
		$('body').append('<div id="sky-tooltip" />').find('#sky-tooltip').append('<span class="arrow" /> <div class="entry" />');

		$('.trigger-tooltip').on('mouseenter', function() {
			var tooltip_entry = $(this).find('.tooltip-entry').html();
			var pos_top = $(this).offset().top - 16;
			var pos_left = $(this).offset().left + $(this).outerWidth() + 14;

			show_tooltip(tooltip_entry, pos_top, pos_left);
		}).on('mouseleave', function() {
			tooltip_timeout = setTimeout(function() {
				hide_tooltip();
			}, 500);
		});

		$('#sky-tooltip').on('mouseenter', function() {
			clearTimeout(tooltip_timeout);
			$(this).show();
		}).on('mouseleave', function() {
			hide_tooltip();
		});
	}
	
	// Add a new label to a label checkbox list.
	$('.theme-add-label-click').live('click', function () {
		var name = prompt('Please enter your new label.', '');
		
		if((name != null) && (name != ''))
		{
			var left = $('.theme-left-label-col .checkbox').length;
			var right = $('.theme-right-label-col .checkbox').length;
			var html = '<input type="checkbox" class="checkbox left" name="Labels[]" value="' + name + '" checked=checked />';
			html += '<label>' + name + '</label><div class="cl">&nbsp;</div>';
			
			if(left > right)
			{
				$('.theme-right-label-col').append(html);
			} else
			{
				$('.theme-left-label-col').append(html);			
			}
		}
		
		return false;
	});
});

//
// Show tool tip
//
var tooltip_timeout;
function show_tooltip(tooltip_entry, pos_top, pos_left) 
{
	if(tooltip_timeout != undefined) {
		clearTimeout(tooltip_timeout);
	}
	$('#sky-tooltip').css({
		top: pos_top,
		left: pos_left
	}).find('.entry').html(tooltip_entry).parent().show();
}

//
// Hide tool tip
//
function hide_tooltip() 
{
	clearTimeout(tooltip_timeout)
	$('#sky-tooltip').removeAttr('style').find('.entry').html('');
}

//
// Actions on Custom radio button.
//
function custom_radio() 
{
	$('.theme-radio').each(function() {
		$(this).wrap('<span class="theme-custom-radio" />').parent().append('<span />');
		if($(this).is(':checked')) 
		{
			$(this).parent().addClass('theme-checked');
		}
	});

	$('.theme-radio').live('change', function() {
		if($(this).is(':checked')) 
		{
			var rname = $(this).attr('name');
			$('input[name="' + rname + '"]').parent().removeClass('theme-checked');
			$(this).parent().addClass('theme-checked');
		}
	});
}

//
// Actions on custom checkboxes
//
function custom_check() 
{
	$('.theme-checkbox').each(function() {
		$(this).wrap('<span class="theme-custom-check" />').parent().append('<span />');
		if($(this).is(':checked')) 
		{
			$(this).parent().addClass('theme-checked');
		}
	});

	$('.theme-checkbox').live('change', function() {
		if($(this).is(':checked')) 
		{
			$(this).parent().addClass('theme-checked');
		} else 
		{
			$(this).parent().removeClass('theme-checked');
		}
	});
}