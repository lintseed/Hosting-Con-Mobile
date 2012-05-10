$(document).bind("mobileinit", function(){
	$.mobile.pushStateEnabled = true;
});

$(document).delegate("#main", "pageinit", function() {
	var menuStatus;

	// Show menu
	$("a.showMenu").click(function(){
		if (menuStatus != true){
			$("#menu").css({marginLeft: "0px"}, 100);
			$(".ui-page-active").animate({
				marginLeft: "165px",
			  }, 300, function(){menuStatus = true});
			  return false;
		  } else {
			$(".ui-page-active").animate({
				marginLeft: "0px",
			  }, 300, function(){menuStatus = false});
			$("#menu").animate({marginLeft: "-175px"}, 600);
			return false;
		  }
	});

});

$('#menu, .pages').live("swipeleft", function(){
	if (menuStatus){
	$(".ui-page-active").animate({
		marginLeft: "0px",
	  }, 300, function(){menuStatus = false});
	  }
});

$('.pages').live("swiperight", function(){
	if (!menuStatus){
	$(".ui-page-active").animate({
		marginLeft: "165px",
	  }, 300, function(){menuStatus = true});
	  }
});

$('div[data-role="page"]').live('pagebeforeshow',function(event, ui){
	menuStatus = false;
	$(".pages").css("margin-left","0");
});

// Menu behaviour
$("#menu li a").click(function(){
//	$("#menu").animate({marginLeft: "0px"}, 100);
	var p = $(this).parent();
	if($(p).hasClass('active')){
		$("#menu li").removeClass('active');
	} else {
		$("#menu li").removeClass('active');
		$(p).addClass('active');
	}
});

// Tabs
$('div[data-role="navbar"] a').live('click', function () {
	$(this).addClass('ui-btn-active');
	$('div.content_div').hide();
	$('div#' + $(this).attr('data-href')).show();
});

// Link to exhibitor detail pages
/*$('.exhibitor-list li ul li').click(function(){
	var anchor = $(this).find('h3').html();
	anchor = anchor.replace(/\s+/g, '');
	window.location.hash = anchor;
});
*/

// Link to schedule detail pages
$('#schedule-grid li').click(function(){
	var anchor = $(this).attr('id');
	anchor = anchor.replace(/\s+/g, '');
	window.location.hash = anchor;
});

$(document).on(".alpha-list", "pageinit", function() {
	$('#slider').sliderNav({arrows: true});
});

$(document).on(".schedule", "pageinit", function() {
	$( "#tabs" ).tabs();
});
