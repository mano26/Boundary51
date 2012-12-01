var public = {
	price: 0.00,
	response: ''
}

//
// public page Init
//
public.init = function ()
{
	// Bind to form submit
	$('#sign-up').submit(function () {
		$('.public-submit').hide();
		$('#button-loader').show();
		$('#card-error').hide();
		$('.public-submit').attr('disabled', 'disabled');
		$('#number-field').removeClass('theme-error');
		$('#code-field').removeClass('theme-error');
		$('#month-field').parent().removeClass('theme-error');
		$('#year-field').parent().removeClass('theme-error');
	
		// Send card to strip for token
		if(public.price > 0)
		{
			Stripe.createToken({
				number: $('#number-field').val(),
				cvc: $('#code-field').val(),
				exp_month: $('#month-field').val(),
				exp_year: $('#year-field').val()
			}, public.price, stripeResponseHandler);
		} else
		{
			public.create_account();
		}
		
		return false;
	});
}

//
// Send the field data to the server to create the account.
//
public.create_account = function ()
{
	// Send the data to the server for validation.
	var fields = $('#sign-up').serialize();
	$.post(site_url + 'signup', fields, function(html) {
	  if(html != 'success')
	  {
	  	window.scrollTo(0, 0);
	  	$('#ajax-cont').html(html);
	  	$('.public-submit').removeAttr("disabled");
			$('.public-submit').show();
			$('#button-loader').hide();
	  } else
	  {
	  	window.location = site_url + 'signup/success';
	  }
	});
}

//
// Stripe call back after sending token to server.
//
function stripeResponseHandler(status, response) 
{ 
	if(response.error) 
	{
		$('.public-submit').removeAttr("disabled");
		$('.public-submit').show();
		$('#button-loader').hide();
		$('#card-error span').html(response.error.message);
		$('#card-error').show();
		$('#number-field').addClass('theme-error');
		$('#code-field').addClass('theme-error');
		$('#month-field').parent().addClass('theme-error');
		$('#year-field').parent().addClass('theme-error');
	} else 
	{
		$('#token').val(response['id']);
		public.create_account();
	}
}

/*
//
// Setup asking a question form on plans page.
//
public.ask = function ()
{
	$('#ask-form').submit(function () {
		var email = $('[name="email"]').val();
		var msg = $('[name="msg"]').val();
		$('.ask-form').hide();
		$('.loader').show();
		$('.ask-form').find('p.success-msg').hide();	
		$('.ask-form').find('p.error').hide();	

		$.post(site_url + 'pricing/ask', { email: email, msg: msg }, function (html) {
			$('.loader').hide();
			
			if(html == 'fail')
			{
				$('.ask-form').fadeIn().find('p.error').slideDown();			
			} else
			{
				$('.ask-form').fadeIn().find('p.success-msg').slideDown();
				$('[name="email"]').val('');
				$('[name="msg"]').val('');
			}
		});
				
		return false;
	});
}
*/