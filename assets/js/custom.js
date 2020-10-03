(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

	// START MENU JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
	});				

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Home Slider JS
	$('.home-slider').owlCarousel({
		items: 1,
		loop:true,
		margin: 0,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		]
	});

	// Popup Youtube JS
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Blog Slider JS
	$('.blog-slider').owlCarousel({
		loop:true,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});

	// Wow JS
	new WOW().init();

	// Counter JS
	$('.counter').counterUp({
		delay: 50,
		time: 2000
	});

	// Nice Select JS
	$('select').niceSelect();

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formErrorSub();
		submitMSGSub(false, "Please enter your email correctly.");
		} else {
		// everything looks good!
		event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
		formSuccessSub();
		}
		else {
		formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
		$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
		$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
		var msgClasses = "validation-success";
		} else {
		var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Back to top 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-bubble-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});

	// PRELOADER
	jQuery(window).on('load',function(){
		jQuery(".loader").fadeOut(500);
	});

}); 	
})(jQuery);


//Nuestro Equipo Bernardo
var condicion = document.getElementById("mostrarOcultar")
if(condicion.style.display="block"){
	document.getElementById("mostrar").style.display="none";
}
else{
	document.getElementById("mostrarOcultar").style.display="none";
	document.getElementById("mostrar").style.display="block";
}
function ocultar(){
	document.getElementById("mostrarOcultar").style.display="none";
	document.getElementById("mostrar").style.display="block";
}
function mostrar(){
	document.getElementById("mostrarOcultar").style.display="block";
	document.getElementById("mostrar").style.display="none";
}

//Nuestro Equipo Luis
var condicion_2 = document.getElementById("mostrarOcultar_2")
if(condicion_2.style.display="block"){
	document.getElementById("mostrar_2").style.display="none";
}
else{
	document.getElementById("mostrarOcultar_2").style.display="none";
	document.getElementById("mostrar_2").style.display="block";
}
function ocultar_2(){
	document.getElementById("mostrarOcultar_2").style.display="none";
	document.getElementById("mostrar_2").style.display="block";
}
function mostrar_2(){
	document.getElementById("mostrarOcultar_2").style.display="block";
	document.getElementById("mostrar_2").style.display="none";
}

//Nuestro Equipo Arturo
var condicion_3 = document.getElementById("mostrarOcultar_3")
if(condicion_3.style.display="block"){
	document.getElementById("mostrar_3").style.display="none";
}
else{
	document.getElementById("mostrarOcultar_3").style.display="none";
	document.getElementById("mostrar_3").style.display="block";
}
function ocultar_3(){
	document.getElementById("mostrarOcultar_3").style.display="none";
	document.getElementById("mostrar_3").style.display="block";
}
function mostrar_3(){
	document.getElementById("mostrarOcultar_3").style.display="block";
	document.getElementById("mostrar_3").style.display="none";
}

//Nuestro Equipo Pablo
var condicion_4 = document.getElementById("mostrarOcultar_4")
if(condicion_4.style.display="block"){
	document.getElementById("mostrar_4").style.display="none";
}
else{
	document.getElementById("mostrarOcultar_4").style.display="none";
	document.getElementById("mostrar_4").style.display="block";
}
function ocultar_4(){
	document.getElementById("mostrarOcultar_4").style.display="none";
	document.getElementById("mostrar_4").style.display="block";
}
function mostrar_4(){
	document.getElementById("mostrarOcultar_4").style.display="block";
	document.getElementById("mostrar_4").style.display="none";
}

//Elegir Biografía
var condicion_5 = document.getElementById("mostrar_5")
var condicion_6 = document.getElementById("mostrar_6")
var condicion_7 = document.getElementById("mostrar_7")
var condicion_8 = document.getElementById("mostrar_8")

if(condicion_5.style.display="block"){
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}

else if(condicion_6.style.display="block"){
	document.getElementById("mostrar_5").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}

else if(condicion_7.style.display="block"){
	document.getElementById("mostrar_5").style.display="none";
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}

else{
	document.getElementById("mostrar_5").style.display="none";
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
}

function mostrar_5(){	
	document.getElementById("mostrar_5").style.display="block";
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}
function mostrar_6(){	
	document.getElementById("mostrar_6").style.display="block";
	document.getElementById("mostrar_5").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}
function mostrar_7(){	
	document.getElementById("mostrar_7").style.display="block";
	document.getElementById("mostrar_5").style.display="none";
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_8").style.display="none";
}
function mostrar_8(){	
	document.getElementById("mostrar_8").style.display="block";
	document.getElementById("mostrar_6").style.display="none";
	document.getElementById("mostrar_7").style.display="none";
	document.getElementById("mostrar_5").style.display="none";
}










