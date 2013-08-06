// basic jquery function:
$.fn.linkHover = function() {
	
	
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
	
	$.stellar({
		  horizontalScrolling: false
	});
	
	$("li").linkHover();

	$('#nav').onePageNav({
		scrollOffset: 60
	});
	
	$(".contact").hover(function(){
			$(this).animate({color: '#000'},150);
			$(this).removeClass("blackShadow",150);
			$(this).addClass("whiteShadow",150);
		},function(){
			$(this).animate({color: '#FFF'},150);
			$(this).removeClass("whiteShadow", 150);
			$(this).addClass("blackShadow", 150);
	});
	
});