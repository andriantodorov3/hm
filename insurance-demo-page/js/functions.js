;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.header .menu-btn').on('click', function(event){
			$('.header').toggleClass('open');
			event.preventDefault();
		});
	});

})(jQuery, window, document);
