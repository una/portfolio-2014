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
	if (e.keyCode == 76) { 
		$('.slidesjs-previous').trigger('click');
	}
	if (e.keyCode == 82) { 
		$('.slidesjs-next').trigger('click');
	}

	if (e.keyCode == 37) { 
		location.href = $('.pagination .left a').attr('href');
	}
	if (e.keyCode == 39) { 
		location.href = $('.pagination .right a').attr('href');
	}
	
	/* arrow keys:
	37 - left
	38 - up
	39 - right
	40 - down
	76 - L
	82 - R
	*/
});