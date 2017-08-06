// JavaScript Document
$(document).ready(function(e) {
    init_loader();
});
function init_loader(){
	var loadImg = new Image();
	var loadIntervel,gameCanvas;
	var windowWidth,windowHeight;
	var ImgReady=11;
	var Width_=$(window).width();
	var Height_=$(window).height();
	loadImg.src="./../addons/fendou_jjle/template/mobile/img/loading.png";
	loadImg.addEventListener('load', eventLoaded, false);
	$("body").append("<div id='loading' style=''></div>");
	$("#loading").css({
		'left':(Width_-66)/2,
		'top':(Height_-120)/2,
		'background-position':"0 0",
	});
	function eventLoaded() {
		var imagex = 0;
		loadIntervel = setInterval(function(){
			if(imagex > 10)imagex=0;
			ImgReady--;
			$("#loading").css('background-position',"-"+(imagex*66)+"px 0px");
			if(ImgReady<1){
				setTimeout(function(){
					clearInterval(loadIntervel);
					$("#loading").remove();
					$(".zwwI_container").show();
					
				},10);
			}
			imagex+=1;
		},50)
	}
}
