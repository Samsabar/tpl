
//carousel
$('.carousel').carousel({
  interval: 500000
});


//Menu close
$(document).ready(function(){
$('.navbar-toggler-icon').click(function () {
	$(this).toggleClass('close');
	});
});

$('.panel-collapse').on('shown.bs.collapse', function(e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: $panel.offset().top
  }, 700);
});
