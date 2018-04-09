	var name_flag = null;
	var name_reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	var pwd_reg = /^\w{6,18}$/;
	var pwd_flag = null;
	$("#user_name").blur(function(){
		//console.log("heh");
		if(name_reg.test($("#user_name").val())){
			alert("可以使用");
			//name_flag = true;
			//$("#user_name").html("可以使用");
		}else{
			alert("请输入有效手机号");
			//name_flag = false;
			//$("#user_name").find("span").html("");
		}
	})
	$("#user_pwd").blur(function(){
		if(pwd_reg.test($("user_pwd").val())){
			alert("密码有效");
			//pwd_flag = true;
		}else{
			alert("密码无效");
			//pwd_flag = false;
		}
	})
	$("#reconfirm").blur(function(){
		if($("#reconfirm").val() ==$("#user_pwd").val()){
			alert("通过");
		}else{
			alert("密码不一致");
			//return;
		}
	})
	$("#register_btn").click(function(){
		//console.log("hhe");
		//setCookie("user_name", $("#user_name").val());
		//setCookie("user_pwd", $("#user_pwd").val());
		document.cookie = "user_name=" + $("#user_name").val();
		document.cookie = "user_pwd=" + $("#user_pwd").val();
		location.href = "login.html";
		//console.log(document.cookie);
	})

