/* Работа кнопки "Наверх" */
$(function() {
	var topShow = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var topDelay = 700; // Задержка прокрутки

	var $up = $('.up'); // Кнопка прокрутки

	$(window).on('scroll resize', function() {
		if ($(this).scrollTop() > topShow) $up.fadeIn();
		else $up.fadeOut();
	});

	$up.on('click', function() {
		$('body, html').animate({
			scrollTop: 0
		}, topDelay);
	});
});
/* ========== */
