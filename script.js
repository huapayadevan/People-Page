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

	$("li").linkHover();

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
	
});