$(".menu-section__toggle").on('click', function() {
	$(this).toggleClass("on");
	$('.menu-section').toggleClass("on");
	$("nav ul").toggleClass('hidden');
});

//slider
$('.slide').each(function()
        {
            $('#slide-controls').append('<li></li>');
        });

$('#slide-controls li').each(function(index , item)
        {
            $(item).on('click' , function()
            {
                $('.slidesjs-pagination li a').eq(index).trigger('click');
            })

        });

$(document).bind('keydown',function(e){
	if (e.keyCode == 37) { 
		$('.slidesjs-previous').trigger('click');
	}
	if (e.keyCode == 39) { 
		$('.slidesjs-next').trigger('click');
	}
	
	/* arrow keys:
	37 - left
	38 - up
	39 - right
	40 - down
	*/
});