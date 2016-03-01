$(document).ready(function(){
$('.how-it-work > ul > li:nth-child(1)').click(function () {
		if ($('.how-it-work > ul > li:nth-child(1)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(1)').removeClass('mg-step-done');
		}
		if ($('.how-it-work > ul > li:nth-child(2)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(2)').removeClass('mg-step-done');
		}
		if ($('.how-it-work > ul > li:nth-child(3)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(3)').removeClass('mg-step-done');
		}

		if ($('.how-it-work > ul > li:nth-child(4)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(4)').removeClass('mg-step-done');
		}
	});

	$('.how-it-work > ul > li:nth-child(2)').click(function () {
		$('.how-it-work > ul > li:nth-child(1)').addClass('mg-step-done');

		if ($('.how-it-work > ul > li:nth-child(2)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(2)').removeClass('mg-step-done');
		}
		if ($('.how-it-work > ul > li:nth-child(3)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(3)').removeClass('mg-step-done');
		}

		if ($('.how-it-work > ul > li:nth-child(4)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(4)').removeClass('mg-step-done');
		}
	});

	$('.how-it-work > ul > li:nth-child(3)').click(function () {
		$('.how-it-work > ul > li:nth-child(1)').addClass('mg-step-done');
		$('.how-it-work > ul > li:nth-child(2)').addClass('mg-step-done');
		
		if ($('.how-it-work > ul > li:nth-child(3)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(3)').removeClass('mg-step-done');
		}

		if ($('.how-it-work > ul > li:nth-child(4)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(4)').removeClass('mg-step-done');
		}
	});

	$('.how-it-work > ul > li:nth-child(4)').click(function () {
		$('.how-it-work > ul > li:nth-child(1)').addClass('mg-step-done');
		$('.how-it-work > ul > li:nth-child(2)').addClass('mg-step-done');
		$('.how-it-work > ul > li:nth-child(3)').addClass('mg-step-done');
		
		if ($('.how-it-work > ul > li:nth-child(4)').hasClass('mg-step-done')) {
			$('.how-it-work > ul > li:nth-child(4)').removeClass('mg-step-done');
		}
	});
	
	$('.btn-next-tab').click(function (e) {

		e.preventDefault();

		// console.log($($(this).attr('href')));
		$(this).tab('show');

		$('html, body').animate({
			scrollTop: $(".how-it-work").offset().top - 100
		}, 300);

		$('a[href="'+$(this).attr('href')+'"]').parents('li').trigger('click');
		$('.how-it-work > ul > li.active').removeClass('active');
		$('a[href="'+$(this).attr('href')+'"]').parents('li').addClass('active');
	});

	$('.btn-prev-tab').click(function (e) {

		e.preventDefault();

		// console.log($($(this).attr('href')));
		$(this).tab('show');

		$('html, body').animate({
			scrollTop: $(".how-it-work").offset().top - 100
		}, 300);

		$('a[href="'+$(this).attr('href')+'"]').parents('li').trigger('click');
		$('.how-it-work > ul > li.active').removeClass('active');
		$('a[href="'+$(this).attr('href')+'"]').parents('li').addClass('active');
	});

}); 