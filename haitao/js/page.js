$(".box-l").mouseenter(function(){
	$(".box-s").css("display","block");
	$(".box-mark").css("display","block");
	$(this).mousemove(function(e){
		var e = e || event;
 		var x = e.pageX - $(".box-mark").outerWidth()/2 - $(".box-l").offset().left;
 		var y = e.pageY - $(".box-mark").outerHeight()/2 - $(".box-l").offset().top;
 		var maxL = $(".box-l").outerWidth()-$(".box-mark").outerWidth();
 		var maxT = $(".box-l").outerHeight()-$(".box-mark").outerHeight();
 		x = Math.min( maxL , Math.max(0,x) ) ;
 		y = Math.min( maxT , Math.max(0,y) ) ;
 		$(".box-mark").css({
 			left : x,
 			top : y
 		})
 		//  大图left / mark.left = 大图宽度 / 小图宽度 = 大图可视区宽度 /mask的宽度
 		$(".box-s img").css({
 			left: - x * 800/350,
 			top :- y * 800/350
 		})
	})
}).mouseleave(function(){
	$(".box-s").css("display","none");
	$(".box-mark").css("display","none");
})
