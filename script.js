// basic jquery function:
$.fn.blueHover = function() {
	
	
	this.hover(function(){
		$(this).animate({color: '#800000', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.1)'},150);
		},function(){
			if ($(this).hasClass('current')){
				return;
			}else{
				$(this).animate({color: '#FAF6EF'},150);
				$(this).animate({textShadow:'0px 0px 4px #000'});
			}
				
	});
};
	
	
// function called when document is loaded
$(function() {

	$("a").blueHover();

	$('#nav').onePageNav();
// ----- function to animate the css of #howdy text on main page -----------------------------------------------------------------

	$('#howdy').hover(function(){
		$('#howdy').animate({color: 'rgba(0, 0, 0, 0.6)'},150);
	},
        function(){
           $(this).animate({color: '#800000'},150);
    });
	
});