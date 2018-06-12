
$(document).ready(function(){
	
$('.search').keyup(function() {
	$('.images li').hide();
 
  var search_keywords = $('.search').val();

  $('.images li').each(function() {

var search_data = $(this).attr('data-key');
if (search_data.indexOf(search_keywords) >= 0) {
$(this).show();
}
  })

})
		
 
   $('.filters').find('input:checkbox').click(function () {
                $('.images li').css("display","none");
               


                 var test = $('.filters input:checked').length;
                 if(test == 0) {
                 	$('.images li').css("display","inline");
                 }
                 else
                 {
                 	 $('.filters').find('input:checked').each(function () {
                   var filter_img = $('.images li img.' + $(this).attr('class'));
                   filter_img.parent().fadeIn();
                });
                 }
            });

})

/*{
 var test = $(this).attr('class');
 $(this).addClass('active');
  
}
else
{
	$(this).removeClass('active');
}*/




