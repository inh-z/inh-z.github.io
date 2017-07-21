$(document).ready(function(){
//获取数据





 parm1 = sessionStorage.peopleNumber;
 peopleData = parm1.replace(/,/g, '');

	
str1=sessionStorage.peopleAll
peopleAll=JSON.parse(str1);

str2=sessionStorage.tianShu
tianShu=JSON.parse(str2);

var parm2=sessionStorage.fate;
i=parm2.replace(/,/g,'')
i=parseInt(i);

str3=sessionStorage.die
die=JSON.parse(str3);











//根据传来的参数利用DOM创建元素
for (var i = 0; i < peopleData.length; i++) {
	creat();
}
//creat();
function creat(j){
	/*创建外层盒子,即在.bigbox中添加一个类名为.box的div*/
	var box=$("<div></div>");//创建div
	box.attr("id",i);//给创建的div添加属性--Id
 	$(".bigbox").append(box);//把先创建的盒子添加到外层盒子中
 	box.addClass("box");//为新创建的盒子添加样式
 	/*创建内层盒子1*/
 	var box1=$("<div></div>");
 	// $("#i").prepend(box1);
 	box1.addClass("item1");
 	if (peopleAll[i].aLive!=1) {
 		box1.css("background-color","#83b09a")
 	}

 	$(box1).appendTo(box);
 	$(judjeId()).appendTo(box1);
 	/*创建内层盒子2*/
 	var box2=$("<div></div>");
 	// $(#i).append(box2);
 	box2.addClass("item2");
 	$(box2).appendTo(box);
 	$(returnNumber()).appendTo(box2);
}
//判断身份
function judjeId(){
	/*0是杀手，1是平民*/
	if(peopleData[i]==0){
		return '<p>杀手</p>' ;
	}
	else{
		return '<p>水民</p>' ;
	}
}
//返回号码
function returnNumber(){
	return "<p>"+(i+1)+"号</p>"
}




















var btn3=document.getElementById("next");
btn3.onclick=function(){
	window.location.href="js-task-4-2.html";
}

})










































































