






function checkIdcard(idcardx){
var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 

var idcard = idcardx.toUpperCase();
var Y,JYM;
var S,M;
var idcard_array = new Array();
idcard_array = idcard.split("");
//地区检验
if(area[parseInt(idcard.substr(0,2))]==null) return 4;
//身份号码位数及格式检验
switch(idcard.length){
case 15:
if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
} else {
ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
}
if(ereg.test(idcard)) return 0;
else return 2;
break;
case 18:
//18位身份号码检测
//出生日期的合法性检查 
//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
} else {
ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
}
if(ereg.test(idcard)){//测试出生日期的合法性
//计算校验位
S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
+ parseInt(idcard_array[7]) * 1 
+ parseInt(idcard_array[8]) * 6
+ parseInt(idcard_array[9]) * 3 ;
Y = S % 11;
M = "F";
JYM = "10X98765432";
M = JYM.substr(Y,1);//判断校验位
if(M == idcard_array[17]) return 0; //检测ID的校验位
else return 3;
}
else return 2;
break;
default:
return 1;
break;
}
}




function changeHidden(obj){
	//obj.checked = !obj.checked
	if(obj.checked){
		document.getElementById("xuantian").style.display=""
	}else{
		document.getElementById("xuantian").style.display="none"
	}

	if(obj.value==1){
		document.getElementById("xuantianwm").style.display=""
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display="none"
	}else if(obj.value==2){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display=""
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display="none"
	}else if(obj.value==3){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display=""
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display="none"
	}else if(obj.value==4){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display=""
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display="none"		
	}
	else if(obj.value==5){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display=""
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display="none"
	}
	else if(obj.value==6){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display=""
		document.getElementById("xuantianxy").style.display="none"
	}
	else if(obj.value==7){
		document.getElementById("xuantianwm").style.display="none"
		document.getElementById("xuantianwl").style.display="none"
		document.getElementById("xuantiangj").style.display="none"
		document.getElementById("xuantianzx").style.display="none"
		document.getElementById("xuantiancb").style.display="none"
		document.getElementById("xuantianrw").style.display="none"
		document.getElementById("xuantianxy").style.display=""
	}
}


function per15To18(perIDSrc){

   var iS = 0;

   //加权因子常数
   //var my_array = new Array();

   var iW = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
   //校验码常数
   var LastCode="10X98765432";
   //新身份证号
   var perIDNew;

   perIDNew = perIDSrc.substring(0,6);
   //填在第6位及第7位上填上‘1’，‘9’两个数字
   perIDNew += "19";

   perIDNew += perIDSrc.substring(6,perIDSrc.length);
   //alert("perIDNew:"+perIDNew);
   //进行加权求和
   for( var i=0; i<17; i++){

		//alert(perIDNew+".substring("+i+","+(i+1)+"):"+perIDNew.substring(i,i+1));
		iS += parseInt(perIDNew.substring(i,i+1)) * iW[i];
		//alert("iS:"+iS);
   }

   //取模运算，得到模值

   var iY = iS%11;
   //alert("iY:"+iY);
   //从LastCode中取得以模为索引号的值，加到身份证的最后一位，即为新身份证号。
   //alert("LastCode.substring(iY,1):"+LastCode.substring(iY,1));
   perIDNew += LastCode.substring(iY,iY+1);
   //alert("perIDNew:"+perIDNew);
   return perIDNew;

  }

function cidInfo(obj){

	var sId = obj.value;

	//alert(sId+".length:"+sId.length);
	if(sId.length!=15&&sId.length!=18) {
		register.fcmidnumber.focus();

		return "身份证号码长度不对！";
	}

	if(sId.length==15){
		sId = per15To18(sId);
		//alert("sId:"+sId);
	}
	if(!/^\d{17}(\d|x)$/i.test(sId)){
    	obj.focus();
	    return false;
    }
}


function checkUserName(s){
	//alert("s："+s);
	var patrn=/^[a-z0-9]{1}[a-z0-9]{4,15}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkCellPhone(s){
	var patrn=/^1[0-9]{10}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkIdNumber1(s){
	//alert("s："+s);
	var patrn=/^[a-z0-9A-Z]{18}|^[a-z0-9A-Z]{15}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkIdNumber2(s){
	//alert("s："+s);
	var patrn=/^[a-z0-9A-Z]{6,28}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkRealName(s){
	var patrn = /[0-9]{1,}/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkIsChinese(str)
{
	
    var pattern = /^[\u4E00-\u9FA5]+$/i;
    if (pattern.test(str))
    {        
        return true;
    }
    else
        return false;
}

function checkPasswd2(s){
	var patrn=/^[a-zA-Z0-9]{8,16}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}

function checkPasswd(s){
	//alert("s："+s);
	var patrn=/^[a-zA-Z0-9]{6,16}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}


function pwStrength(pwd) {
   O_color="ash";
   L_color="red";
   M_color="blue";
   H_color="green";
   if (pwd==null||pwd==''){
    Lcolor=Mcolor=Hcolor=O_color;
   }
   else {
    S_level=checkStrong(pwd);
    switch(S_level) {
    case 0:
     Lcolor=Mcolor=Hcolor=O_color;
     break;
    case 1:
     Lcolor=L_color;
     Mcolor=Hcolor=O_color;
    break;
    case 2:
     Mcolor=M_color;
     Lcolor=Hcolor=O_color;
    break;
    case 3:
     Hcolor=H_color;
     Lcolor=Mcolor=O_color;
    break;
    case 4:
    Hcolor=H_color;
    Lcolor=Mcolor=O_color;
    break;
    }
   }
   document.getElementById("strength_L").className=Lcolor;
   document.getElementById("strength_M").className=Mcolor;
   document.getElementById("strength_H").className=Hcolor;
return;
}

function newnotEmail(name){//�Ƿ�����
  var str,re;
  re=/([\w|-]+[\.?\w|-]*@[\w|-]+\.[\w|-]+)(\.?[\w|-]*)(\.?[\w|-]*)/i;

  re.exec(trim(name.value));
  if (RegExp.$3!=""&&RegExp.$3!="."&&RegExp.$2!=".")
    str=RegExp.$1+RegExp.$2+RegExp.$3;
  else
    if (RegExp.$2!=""&&RegExp.$2!=".")
      str=RegExp.$1+RegExp.$2 ;
  else
    str=RegExp.$1 ;
  if (str!=trim(name.value))
  {
    return true;
  }
  return false;
}

function checkForm(randflag){

	var FStr = document.forms["register"];
	if(isNull(FStr.username,"请输入完美通行证!")) return false;
        if(FStr.username.value.length>=6&&FStr.username.value.substring(0,6)=="wltest"){
		alert("输入用户名已被注册!");
		FStr.username.focus();
		return false;
	}
	if(randflag!="mobile"){
		if(!checkUserName(FStr.username.value)){
			alert("输入用户名不符合命名规则!");
			FStr.username.focus();
			return false;
		}
	}

	if(isNull(FStr.passwd,"请输入密码!")) return false;
	if(!checkPasswd(FStr.passwd.value)){
		alert("输入密码不符合命名规则!");
		FStr.passwd.focus();
		return false;
	}
	if(isNull(FStr.repeatpasswd,"请输入确认密码!")) return false;
	if(FStr.passwd.value!=FStr.repeatpasswd.value){
		alert("两次输入密码不一致!");
		FStr.repeatpasswd.focus();
		return false;
	}
	
	//if(isNull(FStr.fcmidnumber,"请输入身份证号!")) return false;
	if(isNull(FStr.fcmtruename,"请输入真实姓名!")) return false;
	
	if(checkIsChinese(FStr.fcmtruename.value)!=true){
		alert("真实姓名格式不对，必须是汉字");
		FStr.fcmtruename.focus();
		return false;
	}
	if(FStr.indulgeName.value.length>0){
		if(checkIsChinese(FStr.indulgeName.value)!=true){
			alert("姓名格式不对，必须是汉字");
			FStr.indulgeName.focus();
			return false;
		}
	}
	
	var Errors=new Array(
		"验证通过!",
		"身份证号码位数不对!",
		"身份证号码出生日期超出范围或含有非法字符!",
		"身份证号码校验错误!",
		"身份证格式不正确!"
		);
	
	if(FStr.fcmidnumber.length>0){
		var temp = FStr.fcmidnumber.value.toUpperCase()
		var result=checkIdcard(temp);
		if(result!=0)
		{
			alert(Errors[result]);
			FStr.fcmidnumber.focus();
			return false;        
		}
		
		if(isNull(FStr.indulgeName,"请输入防沉迷姓名!")) return false;
	
		if(charlength(FStr.indulgeName)<4||charlength(FStr.indulgeName)>10||checkIsChinese(FStr.indulgeName)!=true){
			alert("防沉迷姓名格式不对，2到5个汉字");
			FStr.indulgeName.focus();
			return false;
		}
	}
		
	
	if(FStr.ts[0].checked){
		if(isNull(FStr.idnumber1,"请输入身份证件号码!")) return false;
		var result=checkIdcard(FStr.idnumber1.value);
		if(result!=0){
		alert(Errors[result]);
		FStr.idnumber1.focus();
		return false;
		}
		FStr.idnumber.value = FStr.idnumber1.value;
	}else{
		if(isNull(FStr.idnumber2,"请输入身份证件号码!")) return false;
		if(!checkIdNumber2(FStr.idnumber2.value)){
		alert("输入身份证件号码不符合规则!");
		FStr.idnumber2.focus();
		return false;
		}
		FStr.idnumber.value = FStr.idnumber2.value;
	}
		
	if(isNull(FStr.idnumber,"请输入身份证件号码!")) return false;
	
	if(isNull(FStr.email,"请输入电子邮箱!")) return false;
	
	if(newnotEmail(FStr.email)){
		alert("Email地址格式不正确！");
		FStr.email.focus();
		return false;
	}
	
	if(!FStr.nomoblie.checked){
		if(isNull(FStr.mobilenumber,"请输入手机号!或者勾选'我没有手机'")) return false;
		if(!checkCellPhone(FStr.mobilenumber.value)){
			alert("手机号码格式不正确！");
			FStr.mobilenumber.focus();
			return false;
		}
	}
	
	if(randflag=="true"){
		if(isNull(FStr.rand,"请输入验证码!")) return false;
	}
	//
	
	
	if(FStr.passwd.value==FStr.username.value){
		alert("用户名密码不能相同！");
		FStr.passwd.focus();
		return false;
	}
	
	if(!FStr.protocol1.checked){
		alert("您还没有阅读《完美通行证用户协议》!");
		return false;
	}
	
	if(!FStr.protocol2.checked){
		alert("您还没有阅读《网络游戏防沉迷系统及实名认证服务协议》!");
		return false;
	}
	return true;

}

function registerImgRefresh() {
	document.getElementById("randimg").src="image.aspx";
}


function InitAjax() {
    var http_request = false;

    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) {
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    } if (!http_request) {
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    return http_request;
}

var passportflag = false;

function checkPassportforfast(){
		var FStr = document.register;
		var username = FStr.username.value;
		var url = "/member/checkUser"; 
        var str =username;

        var ajax = InitAjax();
    　                ajax.open("POST", url, true);
                  　  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                  　  ajax.send("username="+encodeURIComponent(encodeURIComponent(str)).replace(/%20/g,"+"));
        ajax.onreadystatechange = function() 
        {
        　　if (ajax.readyState == 4 && ajax.status == 200) 
            {
        　　　  var status = parseInt(ajax.responseText); 
                if (!isNaN(status)) 
                {
                    switch (status) 
                    {
                       
                        case 13:
                            passportflag = true;
                            
                            break;                        
                        case 14:
                            passportflag = false;
                            
                            break;                         
                        default:
                            passportflag = false;
                            
                            break; 
                    }
                }                
        　　}
    }
}


function checkPassport(a) {
		
		var FStr = document.register;
		var username = FStr.username.value;
		
		var msg = document.getElementById('m'+a);
		
		
		if(trim(username)==""){
    		msg.innerHTML =  "通行证用户名不能为空";
    		hidd_msg(a,"no");
    		return;
  		}
  		
  		if(!checkUserName(FStr.username.value)){
  			msg.innerHTML = "长度5~15位。可以包含数字、字母。";
  			hidd_msg(a,"no");
  			return;
		}
        
        var url = ""; 
        var str = username;

        var ajax = InitAjax();
    　  //ajax.open("POST", url, true);
    　  //ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // ajax.send("username="+encodeURIComponent(encodeURIComponent(str)).replace(/%20/g,"+"));
        ajax.onreadystatechange = function() 
        {
        　　if (ajax.readyState == 4 && ajax.status == 200) 
            {
        　　　  var status = parseInt(ajax.responseText); 
                if (!isNaN(status)) 
                {
                    switch (status) 
                    {

                        case 12:
                            var info = "长度5~15位。可以包含数字、字母(不分大小写)或下划线。";
                            msg.innerHTML = info;
                            hidd_msg(a,"no");
                            break;
                        
                        case 14:
                            var info = "此账号可用";
                            msg.innerHTML = info;
                            hidd_msg(a,"yes");
                            break;
                                                  
                        default:
                            var info = "此账号可用";
                            msg.innerHTML = info;
                            hidd_msg(a,"yes");
                            break; 
                    }
                }                
        　　}
    }
}

//手机注册验证号码
function checkPassportPhone(a) {
	
	var FStr = document.register;
	var username = FStr.username.value;
	
	var msg = document.getElementById('m'+a);
	
	
	if(trim(username)==""){
		msg.innerHTML =  "通行证用户名不能为空";
		hidd_msg(a,"no");
		return;
	}
		
	if(!checkCellPhone(FStr.username.value)){
		msg.innerHTML = "手机号码无效";
		hidd_msg(a,"no");
		return;
	}
    
    var url = "/member/checkUser"; 
    var str = username;

    var ajax = InitAjax();
　  ajax.open("POST", url, true);
　  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  ajax.send("username="+encodeURIComponent(encodeURIComponent(str)).replace(/%20/g,"+"));
    ajax.onreadystatechange = function() 
    {
    　　if (ajax.readyState == 4 && ajax.status == 200) 
        {
    　　　  var status = parseInt(ajax.responseText); 
            if (!isNaN(status)) 
            {
                switch (status) 
                {
                    case 11:
                        var info = "你输入的证号存在非法字符";
                        msg.innerHTML = info;
                        hidd_msg(a,"no");
                        break;
                    case 12:
                    	var info = "此账号可用";
                        msg.innerHTML = info;
                        hidd_msg(a,"yes");
                        break;
                    case 13:
                        var info = "此账号已经被注册";  
                        msg.innerHTML = info;
                        hidd_msg(a,"no");
                        break;                        
                    case 14:
                        var info = "此账号可用";
                        msg.innerHTML = info;
                        hidd_msg(a,"yes");
                        break;
                    case 15:
                       	show_msg(1);
                        break;                          
                    default:
                        var info = "此账号已经被注册";
                        msg.innerHTML = info;
                        hidd_msg(a,"no");
                        break; 
                }
            }                
    　　}
}
}

function checkPasswdonkeyup2(a) {
	var form1 = document.register;
	var msg = document.getElementById('m'+a);
	b = a+1;
	var msg2 = document.getElementById('m'+b);
	
	if(form1.passwd.value==""){
		msg.innerHTML = "密码不能为空";
		hidd_msg(a,"no");
		return;
	}
	if(form1.passwd.value==form1.username.value){
		msg.innerHTML = "用户名密码不能相同";
		hidd_msg(a,"no");
		return;
	}
	
	if (!checkPasswd(form1.passwd.value)) {
		msg.innerHTML = "密码不符合规则";
		hidd_msg(a,"no");
	} else {
		msg.innerHTML = "密码可以使用";
		hidd_msg(a,"yes");
		if (form1.repeatpasswd.value.length > 0
			&(form1.passwd.value!=form1.repeatpasswd.value)) {
			msg2.innerHTML = "两次输入密码不相同";
			hidd_msg(b,"no");
		}
	}
}

function checkrepeatPasswdonkeyup2(a) {
	var form1 = document.register;
	var msg = document.getElementById('m'+a);
	if(form1.passwd.value.length>0){
		if (form1.passwd.value!=form1.repeatpasswd.value) {
		msg.innerHTML = "两次输入密码不相同";
		hidd_msg(a,"no");
	} else {
		msg.innerHTML = "两次输入密码相同";
		hidd_msg(a,"yes");
	}
	}
	
}

function checkEmail(a){
	var form1 = document.register;
	var msg = document.getElementById('m'+a);
	
	if(form1.email.value==""){
		msg.innerHTML = "Email地址不能为空";
		hidd_msg(a,"no");
		return;
	}
	if(newnotEmail(form1.email)){
			msg.innerHTML = "Email地址格式不正确";
			hidd_msg(a,"no");
	}else{
		msg.innerHTML = "Email可以使用";
		hidd_msg(a,"yes");
	}
}

function checkrepeatEmail(a) {
	var form1 = document.register;
	var msg = document.getElementById('m'+a);
	if(form1.email.value.length>0){
		if (form1.email.value!=form1.repeatemail.value) {
		msg.innerHTML = "两次输入Email地址不相同";
		hidd_msg(a,"no");
	} else {
		msg.innerHTML = "两次输入Email地址相同";
		hidd_msg(a,"yes");
	}
	}
	
}

function fcmtest2(a){
	//if(isNull(register.fcmtruename,"请输入真实姓名!")) return false;
	var form1 = document.register;
	var Errors=new Array(
	"身份证验证通过！",
	"身份证号码位数不对!",
	"身份证号码出生日期超出范围或含有非法字符!",
	"身份证号码校验错误!",
	"身份证地区非法!"
	);
	var temp = form1.fcmidnumber.value.toUpperCase()
	var hintelement = document.getElementById('m'+a);
	
	if(temp==""){
		hintelement.innerHTML = "身份证号码不能为空";
		hidd_msg(a,"no");    
		return;
	}
	
	var result=checkIdcard(temp);
	
	if(result!=0)
	{
		//alert(Errors[result]);
		hintelement.innerHTML = Errors[result];
		hidd_msg(a,"no");    
		    
	}else{
		hintelement.innerHTML = Errors[result];
		
		if(temp.length == 15){
			temp = per15To18(temp);	
		}
		var year = Number(temp.substring(6,10)) + 18;
		var month = Number(temp.substring(10,12)) - 1;
		var day = Number(temp.substring(12,14));
		
		var myDate=new Date();
		myDate.setFullYear(year, month, day);
		var today = new Date();
		if (myDate > today) {
			hintelement.innerHTML = Errors[result] + "小于18岁，纳入防沉迷。";
			hidd_msg(a,"tan");
		}else{
			hidd_msg(a,"yes");
		}
		    
		
	}
}

function charlength(str){
    var byteLen=0,len=str.length;
    if(str){
        for(var i=0; i<len; i++){
            if(str.charCodeAt(i)>255){
                byteLen += 2;
            }
            else{
                byteLen++;
            }
        }
        return byteLen;
    }
    else{
        return 0;
    }
}

function fcmnametest2(a){
	//if(isNull(register.fcmtruename,"请输入真实姓名!")) return false;
	var form1 = document.register;
	var temp = form1.fcmtruename.value;
	var hintelement = document.getElementById('m'+a);
	
	
	
	if(temp==""){
		hintelement.innerHTML = "真实姓名不能为空";
		hidd_msg(a,"no");       
	}else if(checkIsChinese(temp)!=true){
		hintelement.innerHTML = "真实姓名格式不对，必须是汉字";
		hidd_msg(a,"no"); 
	}else{
		hintelement.innerHTML = "真实姓名通过";
		hidd_msg(a,"yes");
		
	}
	
}

function mobilenumbertest2(a){
	var form1 = document.register;
	var temp = form1.mobilenumber.value;
	var hintelement = document.getElementById('m'+a);
	
	
	
	if(temp!=""){
		if(checkCellPhone(temp)){
			hintelement.innerHTML = "手机号码通过";
			hidd_msg(a,"yes");
		}else{
			hintelement.innerHTML = "手机号码格式不对";
			hidd_msg(a,"no");
		}       
	}
	
}

function indulgenametest(a){
	var form1 = document.register;
	var temp = form1.indulgeName.value;
	var hintelement = document.getElementById('m'+a);
	
	
	
	if(temp==""){
		hintelement.innerHTML = "真实姓名不能为空";
		hidd_msg(a,"no");       
	}else if(checkIsChinese(temp)!=true){
		hintelement.innerHTML = "真实姓名格式不对，必须是汉字";
		hidd_msg(a,"no"); 
	}else{
		hintelement.innerHTML = "真实姓名通过";
		hidd_msg(a,"yes");
		
	}
}

function checksuperid1(a){
	var form1 = document.register;
	var temp = form1.idnumber1.value;
	var msg = document.getElementById('m'+a);
	
	var Errors=new Array(
	"身份证验证通过！",
	"身份证号码位数不对!",
	"身份证号码出生日期超出范围或含有非法字符!",
	"身份证号码校验错误!",
	"身份证地区非法!"
	);
	
	if(temp==""){
		msg.innerHTML = "身份证号码不能为空";
		hidd_msg(a,"no");    
		return;
	}
	var result=checkIdcard(temp);
	
	if(result!=0)
	{
		msg.innerHTML = Errors[result];
		hidd_msg(a,"no");    
		    
	}else{
		msg.innerHTML = Errors[result];
		
		if(temp.length == 15){
			temp = per15To18(temp);	
		}
		var year = Number(temp.substring(6,10)) + 18;
		var month = Number(temp.substring(10,12)) - 1;
		var day = Number(temp.substring(12,14));
		
		var myDate=new Date();
		myDate.setFullYear(year, month, day);
		var today = new Date();
		if (myDate > today) {
			msg.innerHTML = Errors[result] + "小于18岁，补填防沉迷。";
			hidd_msg(a,"tan");
			$('.querensf').show();
		}else{
			hidd_msg(a,"yes");
			$('.querensf').hide();
		}
		    
		
	}
	
	
	
	/*if(temp==""){
		msg.innerHTML = "身份证件号码不能为空";
		hidd_msg(a,"no");
		
	}else{
		if(checkIdNumber1(temp)){
			msg.innerHTML = "身份证件号码通过";
			hidd_msg(a,"yes");
		}else{
			msg.innerHTML = "身份证件号码应为15位、18位数字或大小写字符";
			hidd_msg(a,"no");
		}	
	}*/
}

function checksuperid2(a){
	var form1 = document.register;
	var temp = form1.idnumber2.value;
	var msg = document.getElementById('m'+a);
	
	if(temp==""){
		msg.innerHTML = "身份证件号码不能为空";
		hidd_msg(a,"no");
		
	}else{
		if(checkIdNumber2(temp)){
			msg.innerHTML = "身份证件号码通过";
			hidd_msg(a,"yes");
		}else{
			msg.innerHTML = "身份证件号码应为6-28位数字或大小写字符";
			hidd_msg(a,"no");
		}	
	}
}

var oldrand = "";
function checkrandimg(a){
	var form1 = document.register;
	var temp = form1.rand.value;
	var msg = document.getElementById('m'+a);
	
	if(temp==oldrand){
		return;
	}
	
	oldrand = temp;
	
	if(temp.length<6){
        msg.innerHTML = "";
		msg.className="yes";
		msg.style.display="none";
		return;
	}
	
	var url = "/member/checkRandomImg"; 
    var str = "randimg=" + temp;
	
	var ajax = InitAjax();
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(str);
    ajax.onreadystatechange = function() 
    {
        if (ajax.readyState == 4 && ajax.status == 200) 
        {
        　　　  var status = parseInt(ajax.responseText); 
                if (!isNaN(status)) 
                {
                    switch (status) 
                    {
                        case 0:
                            var info = "验证码错误";
                            msg.innerHTML = info;
							msg.className="no";
							msg.style.display="block";
                            break;
                        case 1:
                            var info = "验证码正确";
                            msg.innerHTML = info;
							msg.className="yes";
							msg.style.display="block";
                            break;
                        case 2:
                            var info = "图片码换掉了";
                            msg.innerHTML = info;
							msg.className="no";
							msg.style.display="block";
							registerImgRefresh();
                            break;              
                        default:
                            var info = "验证码错误";
                            msg.innerHTML = info;
							msg.className="no";
							msg.style.display="block";
                            break; 
                    }
                }                
        　　}
    }
}







