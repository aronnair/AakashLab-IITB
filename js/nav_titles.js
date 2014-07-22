
$('.menu_item a').on("mouseover", function(event){
			
			var index =  $('.menu_item a').index(this);

			$('.menu_item p').eq(index).animate({left: '0%' , opacity: 0.5});
			$('.menu_item p').eq(index).animate({opacity: 0.8});

})

/*$('.menu_item a').on("mouseleave", function(event){
	
	$( ".menu_item p" ).each(function( index ) {

	    	$('.menu_item p').eq(index).animate({opacity: 0 , left: '10%' });
 		    $('.menu_item p').eq(index).animate({left: '20%'});

	});
})
*/

$('.menu_item a').on("mouseleave", function(event){
	
	var index =  $('.menu_item a').index(this);
	
	$('.menu_item p').eq(index).animate({opacity: 0 , left: '10%' });
    $('.menu_item p').eq(index).animate({left: '20%'});
	
})