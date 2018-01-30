$("form").submit(function(){
	var oList=getCookie("ulist");
	oList=JSON.parse(oList);
//	/console.log(typeof(oList))
//	return false;
	
	if(oList.id==$("#zhanghao").val()&&oList.password==$("#mima").val()){
		return true;
	}else{
		return false;
	}
})
