	flagPhone=null;
$("#phoneNumber").blur(function(){
	var reg=/^1[3578]\d{9}$/;
	var val=$("#phoneNumber").val();
	if(!reg.test(val)){
		$(".phoneNumber").html("号码违法").css("color","red");
		flagPhone=false;
	}else{
		$(".phoneNumber").html("正确").css("color","yellowgreen");
		flagPhone=true;
	}
	
})
	flagPw=null;
$("#password").blur(function(){
	var reg=/^\w{6,10}$/;
	var val=$("#password").val();
	if(!reg.test(val)){
		$(".password").html("密码为6-10个字符").css("color","red");
		flagPw=false;
	}else{
		$(".password").html("正确").css("color","yellowgreen");
		flagPw=true;
	}
	
})
	flagVp=null;
$("#verpassword").blur(function(){
	var reg=$("#password").val();
	var val=$("#verpassword").val();
	/*alert(reg);
	alert(val);*/
	if(!(reg==val)){
		$(".verpassword").html("密码不一致").css("color","red");
		flagVp=false;
	}else{
		$(".verpassword").html("正确").css("color","yellowgreen");
		flagVp=true;
	}
	
})
$(function(){
	$(".yzm").html(yanz())
})
function yanz(){
	var arr=[];
	var num=null;
	for(i=0;i<4;i++){
		if(rand(1,3)==1){
			num=String.fromCharCode(rand(48,57));
			arr.push(num);
		}else if(rand(1,3)==2){
			num=String.fromCharCode(rand(65,90));
			arr.push(num);
		}else{
			num=String.fromCharCode(rand(97,122));
			arr.push(num);
		}
	}
	return arr
		
}
	flagYz=null;
$("#yzm").blur(function(){
	var yzm=$(".yzm").html();
	var reg=$("#yzm").val();
	if(reg==yzm){
		flagYz=true;
		$(".yz").html("正确").css("color","yellowgreen");
	}else{
		flagYz=false;
		$(".yz").html("输入有误").css("color","red");
	}
	console.log(flagPw);
})
$("form").submit(function(){
	flagCk=false;
	if($("#ck").prop("checked")==true){
		var flagCk=true;
	}
//	var arr=[];
	
//	alert(flagYz)
	if(flagYz&&flagVp&&flagPw&&flagPhone&&flagCk){
		var json={
			"id":$("#phoneNumber").val(),
			"password":$("#password").val()
		}
//		arr.push(json);
		setCookie("ulist",JSON.stringify(json),10);
		return true;
	}else{
		return false;
	}
})
