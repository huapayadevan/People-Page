// browser test

// basic jquery function:
$.fn.linkHover = function() {
	
	
	this.hover(function(){
		$(this).animate({color: '#CBFDFE'},200);
		},function(){
			if ($(this).hasClass('current')){
				return;
			}else{
				$(this).animate({color: '#00BFFF'},200  );
			}
				
	});
};


// function called when document is loaded
$(function() {
	
        // initiate function for animation on course and person hover
	$(".course").linkHover();
	$(".person").linkHover();	
        $('.work').linkHover();
	
        // hover animation over email contact
	$(".contact").linkHover();
        
        
        // what you do contact sentence show/hide
        $('#you').hide();
        $('#hi').linkHover();
        $('#hi').click(function(){
                $('#you').show('medium');
        });
        
});