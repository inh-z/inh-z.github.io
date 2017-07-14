/*测试
function getparm1() 
{ 
	var url=location.href; 
	var tmp1=url.split("?")[1]; 
	var tmp2=tmp1.split("=")[1]; 
	var parm1=tmp2; 
	var peopleData=parm1.replace(/,/g,'');
	alert(peopleData); 
} 
var btn = document.getElementById('continue');
btn.onclick = function(){
	getparm1();
}*/
/*顶部两个按钮事件*/
var btn1 =document.getElementById('back');
btn1.onclick=function(){
	window.history.back(1); 
}
//一个问题，跳转第一个页面的时候点击返回按钮，不刷新，并且人数已经选好，但是点击发牌按钮提示请输入正确的人数，输入原来的人数也不起作用

var btn2 = document.getElementById('close');
btn2.onclick=function(){
	window.location.href="js-task2-2.html";
	//window.location.reload(true) //浏览器重新从服务器请求资源,在http请求头中不会包含缓存标记。
}


function getparm1() 
{ 
	var url=location.href; 
	var tmp1=url.split("?")[1]; 
	var tmp2=tmp1.split("=")[1]; 
	var parm1=tmp2; 
	var peopleData=parm1.replace(/,/g,'');
	return peopleData;
} 
var peopleData=getparm1();
var clickNumber = 0;//定义初始点击次数
var i = 0;//初始索引
var j = 1;//初始号码，1号，2号...
var btn = document.getElementById('continue');
btn.onclick=function(){
	/*DOM操作*/
	/*document.getElementById('number').innerHTML=2;
	var p=document.getElementById('pic');
	p.src='img/3-2.png';
	document.getElementById('status1').style.opacity=1;
	document.getElementById('status2').innerHTML='平民';
	document.getElementById('continue').innerHTML='平民';*/
	count();
	/*(num%2 ==0) ?"偶数":"奇数"*/
	/*思路就是靠点击次数判断要用DOM改变的内容，即是‘查看身份页面’还是‘隐藏并传递页面’*/
	/*奇数次对应‘隐藏并传递’页面，偶数次对应‘查看身份页面’*/
	/*var i = 0;//初始索引*/
	/*peopleData*/
	if(j<=(peopleData.length)){
		if (clickNumber % 2 == 0){
			document.getElementById('number').innerHTML=j;
			var p=document.getElementById('pic');
			p.src='img/round.png';
			document.getElementById('status1').style.opacity=0;
			
			document.getElementById('continue').innerHTML='查看身份';
		}
		else{
			document.getElementById('number').innerHTML=j;
			++j;
			var p=document.getElementById('pic');
			p.src='img/3-2.png';
			document.getElementById('status1').style.opacity=1;
			document.getElementById('continue').innerHTML='查看身份';
			document.getElementById('status2').innerHTML=judjeId();
			document.getElementById('continue').innerHTML='隐藏并传递给'+j+'号';
		}
	}
	else{
		alert('老铁，几个人不知道啊？')
	}
}

/*点击系数计时器*/
function count(){
	clickNumber+=1;
}

/*判断身份函数*/
function judjeId(){
	/*0是杀手，1是平民*/
	if(peopleData[i]==0){
		i++;
		return '杀手' ;
	}
	else{
		i++;
		return '平民' ;
	}
}

/*
	测试
	问题：
		1.传参 
		2.随机数 
		3.第一个页面返回后的问题 
		4.后边的页面按返回直接回到首页
	思路
*/
