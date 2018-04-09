window.onload = function(){
	$("#login_btn").click(function(){
		if($("#user_name").val() == getCookie("user_name") && $("#user_pwd").val() == getCookie("user_pwd")){
			location.href = "../index.html";
		}else{
			alert("用户名或是密码错误");
		}
	})	
}