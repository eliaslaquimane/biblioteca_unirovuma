$(function() {

	// Busca form.
	var form = $('#ajax-contact');

	// Busca de menssagem  div.
	var formMessages = $('#form-messages');

	// .
	$(form).submit(function(e) {
		
		e.preventDefault();

		
		var formData = $(form).serialize();

		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');

			
			$(formMessages).text('Menssagem enviada com sucesso!');

			
			$('#name, #email, #message').val('');			
		})
		.fail(function(data) {
			
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');


			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! Ocorreu um erro no envio!.');
			}
		});

	});

});