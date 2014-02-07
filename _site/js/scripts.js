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

//KEYBOARD PRESSES
$(document).bind('keydown',function(e){

	//if menu is open, bind up & down keys
	if ($(".menu-section__toggle").hasClass('on')) {
		if (e.keyCode == 49) { 
			location.href = $('.menu-section ul li:nth-child(1) a').attr('href');
		}
		else if (e.keyCode == 50) { 
			location.href = $('.menu-section ul li:nth-child(2) a').attr('href');		}
		else if (e.keyCode == 51) { 
			location.href = $('.menu-section ul li:nth-child(3) a').attr('href');		}
		else if (e.keyCode == 52) { 
			location.href = $('.menu-section ul li:nth-child(4) a').attr('href');		}
		else if (e.keyCode == 53) { 
			window.open($('.menu-section ul li:nth-child(5) a').attr('href'));		}
		else if (e.keyCode == 54) { 
			window.open($('.menu-section ul li:nth-child(6) a').attr('href'));		}
		else if (e.keyCode == 55) { 
			window.open($('.menu-section ul li:nth-child(7) a').attr('href'));		}
		else if (e.keyCode == 56) { 
			window.open($('.menu-section ul li:nth-child(8) a').attr('href'));		}
		else if (e.keyCode == 57) { 
			window.open($('.menu-section ul li:nth-child(9) a').attr('href'));		}
	}
	//open menu
	if (e.keyCode == 77) { 
		$('.menu-section__toggle').trigger('click');
	}

	//slider with + & -
	if (e.keyCode == 189) { 
		$('.slidesjs-previous').trigger('click');
	}
	if (e.keyCode == 187) { 
		$('.slidesjs-next').trigger('click');
	}

	// pagination if you're inside a case-study page
	if ($('.cs-main').length) {
		if (e.keyCode == 37) { 
			location.href = $('.pagination .left a').attr('href');
		}
		else if (e.keyCode == 39) { 
			location.href = $('.pagination .right a').attr('href');
		}
	}

	// ? to tell you commands
	if (e.keyCode == 191) { 
		alert('m: open menu, then press 1-9 to navigate the menu, left arrow: previous project, right arrow: next project, L: prev. slide (slider), R: next slide (slider), +: next page (turn.js), -: previous page, ?: key');
	}
	
	/* arrow keys:
	37 - left
	38 - up
	39 - right
	40 - down
	76 - L
	82 - R
	77 - M
	187 - + =
	189 - - _
	191 - /?
	16 - shift
	1 - 49
	2 - 50
	3 - 51
	4 - 52
	5 - 53
	6 - 54
	7 - 55
	8 - 56
	9 -57
	*/
});

// WAYPOINTS

$('.js-fadeIn').waypoint(function() {
	$(this).css('opacity', '1');
}, { offset: '25%' });

//detect Chrome to fix ampersand bug bc firefox doesn't support unicode-range
if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
	$('html').addClass('chrome');
}

// FANNOTATE 
$('.fannouts').waypoint(function() {
	$(this).css('opacity', '1').addClass('opened');
}, { offset: '25%' });
$('.js-invert').waypoint(function() {
	$(this).addClass('inverted');
}, { offset: '45%' });
