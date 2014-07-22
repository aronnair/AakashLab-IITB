var member_names=new Array("ajay","amol","arun","gautam","kalyan","mitali","nilesh","ninad","parag","praveen","pushpak","raeha","saurabh","tushar","virendra","vivek");
var current_id;


$('#image_map area').on("mouseover", function(event){
			
			var index =  $('#image_map area').index(this);

			$('#team_all').attr('src','images/Team/team_'+ member_names[index] +'.jpg');
			
			$('#team_category a').eq(0).addClass('team_category_active').siblings().removeClass('team_category_active');
			$('#team_category a').eq(0).removeClass('team_category_inactive').siblings().addClass('team_category_inactive');

})

$('#image_map area').on("mouseleave", function(event){
	
	var index =  $('#image_map area').index(this);
	
	$('#team_all').attr('src','images/Team/team_all.jpg');
	
})

$('#team_category a').on("click", function(event){
			
			var index =  $('#team_category a').index(this);
			
			if(index == 0){
				$('#team_all').attr('src','images/Team/team_all.jpg');
				}
			else if(index == 1){
				$('#team_all').attr('src','images/Team/team_manager.jpg');
				}
			else if(index == 2){
				$('#team_all').attr('src','images/Team/team_se.jpg');
				}
			else if(index == 3){
				$('#team_all').attr('src','images/Team/team_system.jpg');
				}
			
			
			$('#team_category a').eq(index).addClass('team_category_active').siblings().removeClass('team_category_active');
			$('#team_category a').eq(index).removeClass('team_category_inactive').siblings().addClass('team_category_inactive');
			
})

/*
function member_detail(id){

	
	// MOVE CURRENT MEMBER TO LEFT
	
	$('#'+id).addClass('active_member');
	$('#'+id).removeClass(id);
	
	$current_id = id;
		
	// HIDE ALL THE NON SELELCTED MEMBERS
	var i=0;
	while(i <= member_names.length){
		if(member_names[i]!=id)
		{
			$('#'+member_names[i]).hide();
		}	
		i++;
	}
		
	
/*	
	// MOVE CURRENT MEMBER TO LEFT
	$('#'+id).animate({left: '15%',width: '14%', top: '20%'},1000);
	$("#team_bg").css({"background-color":"#82cfff"});
	$('#team_bg').animate({opacity: 1},1500);
	$('#ajay_details').animate({left: '40%'},1000);

	
	// HIDE ALL THE NON SELELCTED MEMBERS
	var i=0;
	while(i <= member_names.length){
		if(member_names[i]!=id)
		{
			$('#'+member_names[i]).hide();
		}	
		i++;
	}
	*/
/*}

function reset_members(){
	
	$('#'+$current_id).addClass($current_id);
	$('#'+$current_id).removeClass('active_member');
	
	var i=0;
	while(i <= member_names.length){
		$('#'+member_names[i]).show();
		i++;
	}	
}
*/
/*$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1100) {
	   reset_members();
   }
});*/