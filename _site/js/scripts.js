$(".menu-section__toggle").on('click', function () {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

//slider
$('.slide').each(function () {
  $('#slide-controls').append('<li></li>');
});

$('#slide-controls li').each(function (index, item) {
  $(item).on('click', function ()
  {
    $('.slidesjs-pagination li a').eq(index).trigger('click');
  });
});

//KEYBOARD PRESSES
$(document).keydown(function(e) {
  if ($(".menu-section__toggle").hasClass('on')) {
    switch(e.keyCode) {
      case 49: //1
        location.href = $('.menu-section ul li:nth-child(1) a').attr('href');
        break;

      case 50: //2
        location.href = $('.menu-section ul li:nth-child(2) a').attr('href');
        break;

      case 51: //3
        location.href = $('.menu-section ul li:nth-child(3) a').attr('href');
        break;

      case 52: //4
        location.href = $('.menu-section ul li:nth-child(4) a').attr('href');
        break;

      case 53: //5
        location.href = $('.menu-section ul li:nth-child(5) a').attr('href');
        break;

      default: return; // exit this handler for other keys
      }
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
}, { offset: '50%' });

// Lazy Load 
$("img.lazy").lazyload({
  effect : "fadeIn",
  threshold : 200,
  skip_invisible : false
});

//MAGNIFY
$(document).ready(function(){
  var native_width = 0;
  var native_height = 0;
  $(".magnify").mousemove(function(e){
    if(!native_width && !native_height)
    {

      var image_object = new Image();
      image_object.src = $(".small").attr("src");
      
      native_width = image_object.width;
      native_height = image_object.height;
    }
    else
    {
      var magnify_offset = $(this).offset();
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;    
      if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
      {$(".large").fadeIn(100);}
      else
      {$(".large").fadeOut(100);}
      if($(".large").is(":visible"))
      {
        var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
        var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
        var bgp = rx + "px " + ry + "px";
        var px = mx - $(".large").width()/2;
        var py = my - $(".large").height()/2;
        $(".large").css({left: px, top: py, backgroundPosition: bgp});
      }
    }
  })
});