/******
INIT
*******/
function checkVis(){
	if(mode === "gallery"){
		if(gallery.lastItem !== null && $(gallery.lastItem).visible(true) === true){
			gallery.showMore();
		}
		$("#grid .item").each(function(index){
			if($(this).visible(true) === false && ($(this).find("img").css("display") !== "none" && $(this).find("video").css("display") !== "none")){
				$(this).find("img").css("display","none");
				$(this).find("video").css("display","none");
			}
			else if($(this).visible(true) === true && ($(this).find("img").css("display") === "none" || $(this).find("video").css("display") === "none")){
				$(this).find("img").css("display","block");
				$(this).find("video").css("display","block");
			}
		});
	}
}

$(document).ready(function(){
	gallery.getGallery(0, function(err, res, body){
		gallery.setGallery(err, res, body);
		checkVis();
	});
	$("#grid").scroll(function(){
		checkVis();
	});
});