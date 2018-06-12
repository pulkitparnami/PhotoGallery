jQuery(document).ready(function($) {
	
    $(function() {
    	
  var current_li;
  var slide_fast;
  var slide_slow;
  var slide_normal
  
        function timeout() {
	slide_fast = setInterval(function(){$('.rightarrow').click();}, 1500);
}  

 function timeout_second() {
	slide_slow = setInterval(function(){$('.rightarrow').click();}, 5000);
}  

function timeout_third() {
	slide_normal = setInterval(function(){$('.rightarrow').click();}, 3000);
}  





$('.slideoption').change(function(){
	var slide_value = $('select[name=selector]').val();
	var css_lol = $(".slideoption").css('display');
	if ( $('.stopSlideShow').is(':visible')){
	
			if(slide_value == "fast") {
			timeout();
			clearInterval(slide_slow);
			clearInterval(slide_normal);
			
		}
		else if (slide_value == "slow"){
			clearInterval(slide_normal);
			clearInterval(slide_fast);
			timeout_second();
			
			}
			else {
				timeout_third();
				clearInterval(slide_fast);
         	clearInterval(slide_slow);
			}
			
         }
});
		

	$('.slideshow').click(function(){
		var slide_value = $('select[name=selector]').val();
		if(slide_value == "fast") {
			timeout();
			clearInterval(slide_slow);
			clearInterval(slide_normal);
			
		}
		else if (slide_value == "slow"){
			clearInterval(slide_fast);
			clearInterval(slide_normal);
			timeout_second();

		
         }
         else {
         	timeout_third();
         	clearInterval(slide_fast);
         	clearInterval(slide_slow);
         }

		$('.slideoption').css("right" , "18.3%");
		$(this).css("display" , "none");
		$('.stopSlideShow').show();
		$('.stopSlideShow').css("right" , "19.27%");
		
	});
	$('.stopSlideShow').click(function(){
		clearInterval(slide_fast);
		clearInterval(slide_slow);
		clearInterval(slide_normal);
		$('.slideoption').css("right" , "10%");
		$(this).css("display" , "none");
		$('.slideshow').show();


	});

        $('.images li img').click(function() {
        	
            var imgsrc = $(this).attr("src");
            current_li = $(this).parent();
           
            $('.imagebox img').attr("src",imgsrc);
            $('#overlay , .imagebox').fadeIn();
        });


 
        $('.rightarrow').click(function() {
        	
            if(current_li.is(":last-child")) {
                var next_li = $('.images li').first();
            } else {
                var next_li = current_li.next();
            }
            var next_src = next_li.children("img").attr("src");
            $(".imagebox img").attr("src", next_src);
            current_li = next_li; 

        });


 
        $('.leftarrow').click(function() {
             if(current_li.is(":first-child")) {
                var prev_li = $('.images li').last();
            } else {
                var prev_li = current_li.prev();
            }
 
            var prev_src = prev_li.children("img").attr("src");
            $(".imagebox img").attr("src", prev_src);
            current_li = prev_li;
            
   
        });


         $('.close').click(function(){
            $('#overlay , .imagebox').fadeOut();

            $('.stopSlideShow').click();
          

        });
 
        $(document).keyup(function(e) {
 
            
 
            if( 27 == e.keyCode ) {
                $('#overlay , .imagebox').fadeOut();
                 $('.stopSlideShow').click();
            }
 
            if( 37 == e.keyCode ) {
                if(current_li.is(":first-child")) {
                    var prev_li = $('.images li').last();
                } else {
                    var prev_li = current_li.prev();
                }
 
                var prev_src = prev_li.children("img").attr("src");
                $(".imagebox img").attr("src", prev_src);
                current_li = prev_li;
            }
 
            if( 39 == e.keyCode ) {
                if(current_li.is(":last-child")) {
                    var next_li = $('.images li').first();
                } else {
                    var next_li = current_li.next();
                }
                var next_src = next_li.children("img").attr("src");
                $(".imagebox img").attr("src", next_src);
                current_li = next_li;
            }
 
        });
 
    });



 
});