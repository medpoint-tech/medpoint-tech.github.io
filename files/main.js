$( document ).ready(function() {
	$('#send_email_btn').click(function(e){
		var fname = $('#contact_us_name').val();
		var email = $('#contact_us_email').val();
		var msg = $('#contact_us_message').val();

		if(!fname) {
			alert('Please correct fullname');
			e.preventDefault();
		} else if(!email) {
			alert('Please correct email');
			e.preventDefault();
		} else if(!msg) {
			alert('Please correct message');
			e.preventDefault();
		} else {
			alert('Email sent.');
			e.preventDefault();
		}

	});
});