var mobileViewport = window.matchMedia("screen and (max-width: 759px)");

$('.scroll-icon').on('click', function() {
	$('body,html').animate({
		scrollTop: $('.about-us').offset().top - 100
	}, 1000)
})

$('.logo').on('click', function() {
	$('body,html').animate({
		scrollTop: $('.s1').offset().top
	}, 1000)
})

$('.logo2').on('click', function() {
	$('body,html').animate({
		scrollTop: $('.s1').offset().top
	}, 1000);

	$('.header').removeClass('opened');
		$('.menu').slideUp(400);
})

for(let i=1; i<=6; i++) {
	$(`.menu-element${i}`).on('click', function() {
		$('body,html').animate({
			scrollTop: $(`.s${i}`).offset().top - 100
		}, 1000)
	})

	if(mobileViewport.matches) {
		$(`.menu-element${i}`).on('click', function() {
			$('.header.opened').removeClass('opened');
			$('.menu').slideUp(400);
		});
	}
}

const nav = $('.header');

$(window).scroll(function() {
	if($(this).scrollTop() > 10) {
		nav.addClass('scrolled');
	} else {
		nav.removeClass('scrolled');
	}
});

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
	$(".header").toggleClass("opened");
	$(".menu").slideToggle(400);
}, false)

$('.view-gallery').on('click', function() {
	$('.view-gallery').toggleClass('clicked');
	$('.medium-img:nth-of-type(3)').slideDown(500);
	$('.medium-img:nth-of-type(4)').slideDown(500);
});

$('.view-gallery.less').on('click', function() {
	$('.medium-img:nth-of-type(3)').slideUp(500);
	$('.medium-img:nth-of-type(4)').slideUp(500);
})

$('.view-blog').on('click', function() {
	$('.view-blog').toggleClass('clicked');
	$('.hidden-articles').slideDown(500);
});

$('.view-blog.less').on('click', function() {
	$('.hidden-articles').slideUp(500);
})


function menuCheck() {
	const s1 = $(`.s1`).height();
	const s2 = $(`.s2`).height();
	const s3 = $(`.s3`).height();
	const s4 = $(`.s4`).height();
	const s5 = $(`.s5`).height();
	const s6 = $(`.s6`).height();
	const subscribe = $(`.subscribe`).height();
	$(window).scroll(function() {
		if($('html').scrollTop() <  s1 - 100) {
			$(`.menu-element1`).addClass('checked');
		} else {
			$(`.menu-element1`).removeClass('checked');
		}
		if($('html').scrollTop() >  s1 - 110 && $('html').scrollTop() <  s1 +  s2 - 100) {
			$(`.menu-element2`).addClass('checked');
		} else {
			$(`.menu-element2`).removeClass('checked');
		}
		if($('html').scrollTop() >  s1 + s2 - 110 && $('html').scrollTop() <  s1 + s2 +  s3 - 100) {
			$(`.menu-element3`).addClass('checked');
		} else {
			$(`.menu-element3`).removeClass('checked');
		}
		if($('html').scrollTop() >  s1 + s2 + s3 - 110 && $('html').scrollTop() <  s1 + s2 +  s3 + s4 - 100) {
			$(`.menu-element4`).addClass('checked');
		} else {
			$(`.menu-element4`).removeClass('checked');
		}
		if($('html').scrollTop() >  s1 + s2 + s3 + s4 + subscribe - 110 && $('html').scrollTop() <  s1 + s2 +  s3 + s4 + subscribe + s5 - 110) {
			$(`.menu-element5`).addClass('checked');
		} else {
			$(`.menu-element5`).removeClass('checked');
		}
		if($('html').scrollTop() >  s1 + s2 + s3 + s4 + subscribe + s5 - 110 && $('html').scrollTop() <  s1 + s2 +  s3 + s4 + subscribe + s5 + s6 - 100) {
			$(`.menu-element6`).addClass('checked');
		} else {
			$(`.menu-element6`).removeClass('checked');
		}
	});
}

menuCheck()
