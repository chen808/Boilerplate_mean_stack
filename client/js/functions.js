// everytime window scrolls, do the following
$(window).scroll(function(){

	// wScroll wil contain how many pixels have been scrolled from top
	var wScroll = $(this).scrollTop();
	console.log('The wScroll is: ' + wScroll);

	// check the initial position of the sticky logo
	var stickyHeaderTop = $('.selfLogo').offset().top;
	//console.log('printing logo position ' + stickyHeaderTop);
	
	// selecting the logo (this will make it 'float' down)
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	// selecting the foreground image (this will make it 'float' up)
	$('.foreground').css({
		'transform' : 'translate(0px, -'+ wScroll/40 +'%)'
	});



	// ========================================================================

	// if the wScroll number is greater then the .language div container
	if(wScroll > $('.languages').offset().top - 500){ // <--- top - 500 so that icon can start fading in early

		$('.languages img').each(function(i){

			setTimeout(function(){
				$('.languages img').eq(i).addClass('is-showing');
			},150 * (i+1)); // <--- this makes it so each icon fades in one at a time
			
		});
	}


	// Skills Container
	if(wScroll > $('.skill_text').offset().top - 400){ // <--- top - 500 so that icon can start fading in early

		$('.skill img').each(function(i){

			setTimeout(function(){
				$('.skill img').eq(i).addClass('is-showing2');
			},150 * (i+1)); // <--- this makes it so each icon fades in one at a time

			$(".skill_text h5").addClass('animated rubberBand');
			
		});
	}	


	if(wScroll > $('.container2').offset().top - 63){
		document.getElementById("self_logo").src="images/self_logo-01-02.png";
		$("#self_logo").addClass('animated fadeInDown');
		$(".about_me h1").addClass('animated rubberBand');
		// hide the logo in the hero image
		//document.getElementById("self_logo_hero").style.visibility = "hidden";
	}


	if(wScroll > $('#container4').offset().top - 63){
		$(".call_to_action h2#much_mahalo").addClass('animated rubberBand');
	}




}) // end of (window) function
















