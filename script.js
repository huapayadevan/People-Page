// browser test

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
	if( /Android|webOS|iPhone|iPod|BlackBerry|kindle|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('link[href="style.css"]').attr('href','simpleStyle.css');	
	}

        // intiate parallax elements plugin
	$.stellar({
		  horizontalScrolling: false
	});
	
        // initiate function for animation on course and person hover
	$(".course").linkHover();
	$(".person").linkHover();	
        // initiate one page navigation plugin
	$('#nav').onePageNav({
		scrollOffset: 50
	});
        
        
	
        // hover animation over email contact
	$(".contact").linkHover();
        
         // hover animation for name entity
         
         $("#name").hover(function(){                
			$("#name").animate({color: '#B9E3E3'},150);
		},function(){
			$("#name").animate({color: '#FFF'},150);
	});
        
        // what you do contact sentence show/hide
        $('#you').hide();
        $('#hi').linkHover();
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
        
        // click animations for courses
        $('#courseView').hide();
        $(".compSci").click(function(){
            $("#courseView").fadeIn('fast');
            $("#courseDescription").attr("src", "pageslide/_compSci.html");
        });
        $(".ecen").click(function(){
            $("#courseView").fadeIn();
            $("#courseDescription").attr("src", "pageslide/_ecen.html");
        });
        $(".math").click(function(){
            $("#courseView").fadeIn();
            $("#courseDescription").attr("src", "pageslide/_math.html");
        });
        
         $('#courseView').click(function(){
            $(this).fadeOut();
         });
});