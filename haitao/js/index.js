$.ajax({
	type: "get",
	url: "index.json",
	success: function(json) {
		var str = "";
		var str2 = "";
		for(var i in json) {
			if(i === "jingcai") {
				for(var j in json[i]) {
					str += `<img src="${json[i][j]}" alt="" />`
				}
			}
			if(i === "banner") {
				for(var j in json[i]) {
					str2 += `<li style="background:url(${json[i][j]})no-repeat center"></li>`
				}
			}
		}
		$("#banner").prepend(str2);
		$(".jingcai-box").html(str);
	}
});
window.onload = function() {
	var lunb = new Lun().init().mouseover().mouseout();
}

function Lun() {
	this.li = document.getElementById("banner").children;
	this.span = document.getElementById("p-p").children;
	//	console.log(this.li);
	var j = 1;
	this.init = function() {
		this.timer = setInterval(this.fn, 3000);
		for(let i = 0; i < this.li.length; i++) {
			this.span[i].onmouseover = function() {
				//				clearInterval(this.timer);
				j = i;
				this.fn();
			}.bind(this);
			/*this.span[i].onmouseout=function(){
				this.timer=setInterval(this.fn,3000);
			}.bind(this);*/
		}
		return this;
	}
	this.fn = function() {
		//		console.log(this.span)
		for(let i = 0; i < this.li.length; i++) {
			this.li[i].style.display = "none";
			this.span[i].className = "";
			//			this.mouseover();
		}
		this.li[j].style.display = "block";
		this.span[j].className = "p-mark";
		j++
		if(j == this.li.length) {
			j = 0;
		}
	}.bind(this);
	this.mouseover = function() {
		document.getElementById("banner").onmouseover = function() {
			//			alert()
			clearInterval(this.timer)
		}.bind(this);
		return this;
	}
	this.mouseout = function() {
		document.getElementById("banner").onmouseout = function() {
			this.timer = setInterval(this.fn, 3000)
		}.bind(this);
	}
}

$(".kbp1 span").mouseenter(function() {
	$(this).addClass("kb-bp1")
		.siblings()
		.removeClass("kb-bp1");
	$(".kbb1 ul").eq($(this).index())
		.css("display", "block")
		.siblings("ul")
		.css("display", "none")
	console.log($(".kb-bp ul").size())
})
$(".kbp span").mouseenter(function() {
	$(this).addClass("kb-bp1")
		.siblings()
		.removeClass("kb-bp1");
	$(".kbb ul").eq($(this).index())
		.css("display", "block")
		.siblings("ul")
		.css("display", "none")
	console.log($(".kb-bp ul").size())
})
fixed();

function fixed() {
	var em = $(".L-fixed em");
	var img = $(".L-fixed i");
	var $p = $(".L-fixed p");
    var flag=true;
    
		$p.mouseenter(function(){
				$(this).css("background", "#fe5722");
				em.eq($(this).index()).css("background", "#fe5722")
					.animate({
						"left": "-75"
					},1000)
			}).mouseleave(function() {
				em.eq($(this).index()).animate({
					"left": "38"
				},1000, function() {
					$(this).css("background", "#3b3b3b");
				}.bind($(this)));
			})
    var win1=$(window).height()/2-$p.eq(0).height()*2-10;
    var win2=$(window).height()/2-$p.eq(0).height();
    var win3=$(window).height()-$p.eq(0).height();
    for(let i=0;i<em.size();i++){
    	switch(i){
    		case 0 : $p.eq(0).css("top",win1);break;
    		case 1 : $p.eq(1).css("top",win2);break;
    		case 2 : $p.eq(2).css("top",win3)
    						 .click(function(){
    						 	$("html,body").animate({"scrollTop":"0"},600);
    						 })
    	}
    }

}