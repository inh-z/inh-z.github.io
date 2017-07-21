$(document).ready(function(){
//顶部两个按钮
var btn1 =document.getElementById('back');
btn1.onclick=function(){
	window.history.back(1); 
}
var btn2 = document.getElementById('close');
btn2.onclick=function(){
	window.location.href="js-task2-2.html";
}
//获取数据
var parm1=sessionStorage.peopleNumber;
var peopleData=parm1.replace(/,/g,'');







//根据获取的数据创建新数组 新数组里添加人物生死状态，1是生，2是死
	var peopleAll = new Array;
	for (var i = 0; i < peopleData.length; i++) {
		peopleAll[i] = {
			idName: peopleData[i],
			aLive: 1,
			order: 0
			//踩坑回来特意添加死亡顺序，两种思路：
			//1.还需要一个变量在每次有人死亡时赋值给order并自加1 
			//2.直接把天数赋值给order，然后再根据生死状态判断相同天数的人谁先死
			//根据规定的存活状态，1是存活、2是被杀手杀死、3是被投死判断同一天的顺序
			//大概顺序：第一个——order=1，aLive=2；第二个——order=2，aLive=3；第三个——order=2，aLive=2...
			//以上方法太麻烦，改用 把js4-3的c作为参数传递，确定选中了哪个，然后再传一个参数确定顺序，每次有玩家死亡自加
		//c不能作为参数传递，因为js4-2需要获取c的值，而c是在4-3中保存的，读取不到会报错，解决办法是提前保存一个c，
		};
	}
	/*var c=NaN;//指明谁被杀*/
	var die=[];//死亡顺序数组——几号死亡，将死亡的人对应的号码加入数组
	var orderNumber=1;//死亡顺序
	var i = 1; //天数
	var tianShu = {}; //创建一个对象，用于存放关于天数的二维数组
	eval("var dayDetail" + i + "= []"); //用eval动态命名变量名 等价于 var "dayDetail"+i=[];
	/*创建二维数组并初始化，1、2、3、4代表执行顺序；1表示激活，0表示未激活；*/
			for (var q = 0; q < 4; q++) {
				eval("dayDetail" + i)[q] = [q + 1, 0]; //注意创建二维数组的方式
			}//包括四个li的执行顺序以及激活状态
			/*将初始化的二维数组添加到全局对象 tianShu 中存储*/
			/*tianShu.'dayDetail'+i='dayDetail'+i;*/ //为tianShu对象添加属性
			eval("tianShu.dayDetail" + i + "= dayDetail" + i);

			/*console.log(eval("tianShu.dayDetail" + i)[0][1]);*/
var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
sessionStorage.fate=i;
sessionStorage.orderNum=orderNumber;

var str3 = JSON.stringify(die);
				sessionStorage.die=str3; 











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
