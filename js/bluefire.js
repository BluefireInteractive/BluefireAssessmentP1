$(function(){
	$('#menu ul > li > a').on('click', function(){
		$('.menuopen').slideUp(250).removeClass('menuopen');	
		$(this).parent().find('.submenu').slideDown(250).addClass('menuopen');	
	});

	$(document).on('click', function(){
		$('.menuopen').slideUp(250).removeClass('menuopen');	
	});
	
	$(window).resize(function (){
		$('.menuopen').hide().removeClass('menuopen');	
		$('#menu').removeClass('mainmenuopen');	
	});
	
	$('#mobileMenuBtn').on('click', function(){
		if($('#menu').hasClass('mainmenuopen')){
			$('#menu').slideUp(250).removeClass('mainmenuopen');
		}else{		
			$('#menu').slideDown(250).addClass('mainmenuopen');	
		}		
	});
	
});