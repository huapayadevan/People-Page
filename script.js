// basic jquery function:
$.fn.linkHover = function() {
	
	
	this.hover(function(){
		$(this).animate({color: '#B9E3E3'},200);
		},function(){
			if ($(this).hasClass('current')){
				return;
			}else{
				$(this).animate({color: '#50B9B9'},200  );
			}
				
	});
};
	
	
// function called when document is loaded
$(function() {
	
        // intiate parallax elements plugin
	$.stellar({
		  horizontalScrolling: false
	});
	
        // initiate function for animation on course and person hover
	$(".course").linkHover();
	$(".person").linkHover();
        // initiate one page navigation plugin
	$('#nav').onePageNav({
		scrollOffset: 60
	});
        
        
	
        // hover animation over email contact
	$(".contact").hover(function(){
			$(this).animate({color: '#000'},150);
			$(this).removeClass("blackShadow",150);
			$(this).addClass("whiteShadow",150);
		},function(){
			$(this).animate({color: '#FFF'},150);
			$(this).removeClass("whiteShadow", 150);
			$(this).addClass("blackShadow", 150);
	});
        
        // what you do contact sentence show/hide
        $('#you').hide();
        $('#hi').click(function(){
                $('#you').show('medium');
        });
        
        
        
        // link hover animations for people on focus page
        $("#steveDescription").hide();
        $("#jeffDescription").hide();
        $("#joelDescription").hide();
        $("#daleDescription").hide();
        $(".steve").hover(function(){
			$("#steveDescription").show();
		},function(){
			$("#steveDescription").hide();
	});
        
        $(".jeff").hover(function(){
			$("#jeffDescription").show();
		},function(){
			$("#jeffDescription").hide();
	});
        
        $(".joel").hover(function(){
			$("#joelDescription").show();
		},function(){
			$("#joelDescription").hide();
	});
        
        $(".dale").hover(function(){
			$("#daleDescription").show();
		},function(){
			$("#daleDescription").hide();
	});
        
        
});