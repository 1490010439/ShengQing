function login()
{

	var loginzhanghao=document.getElementById("loginzhanghao").value;
	var loginpassword=document.getElementById("loginpassword").value;
	
	var login_show=document.getElementById("login_show");
	var reg_show=document.getElementById("reg_show");
	var username_show=document.getElementById("username_show");
	var myusername=document.getElementById("myusername");
	
	var closemodal=document.getElementById("closemodal");
	
	var tishi=document.getElementById("tishi");

	       $.ajax(
				 {
					 type:"post",
					 url:"http://localhost:8080/qingsheng_login/login.action",
					 data:{zhanghao:loginzhanghao,password:loginpassword},
				     success:function(data)	
				     { 
				    	var json=eval('('+data+')');
				    	var result=json.result;
				    	if(result=="error")
				    	{
				    		alert("登陆失败！"); 
				    	}
				    	else
				    	{
                            tishi.innerHTML=data; 
					     	closemodal.click();
					     	login_show.style.display="none";
					     	reg_show.style.display="none";
					     	username_show.style.display="block";

					     	myusername.innerHTML=""+json.userName;
					     	alert("登陆成功！"); 
				    		
				    	}
				    	
				     
				     },
					 error:function()
					 {
						alert("服务器连接失败！"); 
					 }
				 }
				 );
	
}
