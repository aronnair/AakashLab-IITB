$(window).keydown(function(e) {
	 
    e.preventDefault(); //prevent default arrow key behavior
    
    var scroll_percentage_array = new Array(0,4.5,7,12.5,15.5,18.5,21.5,24.5,27.5,35,50,60,85,100);
    var index = 0;
	
	var current_scroll_percentage;
	
	  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        current_scroll_percentage = (s / (d-c)) * 100;
		

	// Down arrow 
   if (e.keyCode == 40) 
   {
	 
	  var i=0;
       for(i=0 ; i<scroll_percentage_array.length ; i++)
	{
		if(current_scroll_percentage >= scroll_percentage_array[i] && current_scroll_percentage < scroll_percentage_array[i+1])	
		{			
				s = (scroll_percentage_array[i+1] * (d-c)) / 100;
				 //alert("Current position : "+ current_scroll_percentage + " go to:  "+ scroll_percentage_array[i+1] + " pixels is : " + s);
				 $('html, body').animate({scrollTop: s+1}, 2000);
				 break;
		}
	}
    }
    // UP arrow 
    else if (e.keyCode == 38) {
      var i=0;
       for(i=0 ; i<scroll_percentage_array.length ; i++)
	{
		if(current_scroll_percentage >= scroll_percentage_array[i-1] && current_scroll_percentage < scroll_percentage_array[i])	
		{			
				s = (scroll_percentage_array[i-1] * (d-c)) / 100;
				// alert("Current position : "+ scrollPercentage + " go to:  "+ scroll_percentage_array[i+1] + "pixels is : " + s);
				 $('html, body').animate({scrollTop: s-1}, 2000);
				 break;
		}
	}
    }
	
	
	//scrollPercentage=100 * $(this).scrollTop / this.scrollWidth / (1-this.clientWidth/this.scrollWidth);
	
   // $('#log').html(scrollPercentage.toFixed(2)+'%');
	
    //scroll element into view    
   // $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1000);
});

