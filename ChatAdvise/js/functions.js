;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.button').on('click', function(){
			$('body').addClass('opened');
		});
		$('.popup .close, .popup .overlay').on('click', function(){
			$('body').removeClass('opened');
		});
	});

})(jQuery, window, document);
