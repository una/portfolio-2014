$(".menu-section__toggle").on('click', function() {
	$(this).toggleClass("on");
	$('.menu-section').toggleClass("on");
	$("nav ul").toggleClass('hidden');
});