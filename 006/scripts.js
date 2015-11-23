var more = $('.more');
var current_opt_select;
var current_opt_isexpanded;
var current_opt_box;
var current_opt_children;

$( function() {
	more.click(function() {
		current_opt_select = $(this).parent('li');
		current_opt_select.find('.text').fadeToggle(300);
		current_opt_box = current_opt_select.find('.options');
		current_opt_children = current_opt_box.children('.option-icon').length;
		if( current_opt_box.width() < 1 )
		{ current_opt_isexpanded = false; }
		else
		{ current_opt_isexpanded = true; }

		current_opt_select.find('.more').toggleClass( 'ion-ios-more-outline ion-ios-arrow-thin-right active' );

		if ( current_opt_isexpanded ) {
			current_opt_box.animate({
				width: '0'
			}, 400 );
			current_opt_box.children('.option-icon').animate({
				width: '0'
			}, 400 );
		}
		else {
			current_opt_box.animate({
				width: (current_opt_children * 64) + 'px'
			}, 600 );
			current_opt_box.children('.option-icon').animate({
				width: '64px'
			}, 600 );
		}
	});
});
