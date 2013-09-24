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
    
        // ---------------- MOBILE DEVICE DETECTION ---------------- //
	if( /Android|webOS|iPhone|iPod|BlackBerry|kindle|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('link[href="style.css"]').attr('href','simpleStyle.css');	
                $('link[href="script.js"]').attr('href','simpleScript.js');
	}

       
        // ---------------- WINDOW AUTO FOCUS ---------------- //
        var $windows = $('.window');

        $windows.windows({
            snapping: true,
            snapSpeed: 750,
            snapInterval: 1100,
            onScroll: function(s){},
            onSnapComplete: function($el){},
            onWindowEnter: function($el){}
        });
        
        // ---------------- PARALLAX ELEMENTS PLUGIN ---------------- //
	$.stellar({
		  horizontalScrolling: false
	});
	
        // initiate function for animation on course and person hover
	$(".course").linkHover();
	$(".person").linkHover();	
        $('.work').linkHover();
        // initiate one page navigation plugin
	$('#nav').onePageNav();
        
        
	
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
        
        // click animations for work experience
        $("#workView").hide();
        $(".cgi").click(function(){
            $("#workDescription").attr("src", "html/_cgi.html");
            $("#workView").delay(150).fadeIn('slow');
        });
        $(".kanm").click(function(){
            $("#workDescription").attr("src", "html/_kanm.html");
            $("#workView").delay(150).fadeIn('slow');
        });
        $(".campQuest").click(function(){
            $("#workDescription").attr("src", "html/_cq.html");
            $("#workView").delay(150).fadeIn('slow');
        });
        $(".helpDesk").click(function(){
            $("#workDescription").attr("src", "html/_HDC.html");
            $("#workView").delay(150).fadeIn('slow');
        });
        
         $('#workView').click(function(){
            $(this).fadeOut();
         });
        // click animations for courses
        $('#courseView').hide();
        $(".compSci").click(function(){
            $("#courseDescription").attr("src", "html/_compSci.html");
            $("#courseView").delay(150).fadeIn('slow');
        });
        $(".ecen").click(function(){
            $("#courseDescription").attr("src", "html/_ecen.html");
            $("#courseView").delay(150).fadeIn('slow');
        });
        $(".math").click(function(){
            $("#courseDescription").attr("src", "html/_math.html");
            $("#courseView").delay(150).fadeIn('slow');
        });
        
         $('#courseView').click(function(){
            $(this).fadeOut();
         });
});