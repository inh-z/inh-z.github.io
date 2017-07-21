$(document).ready(function(){
//顶部按钮
var btn2 = document.getElementById('close');
btn2.onclick=function(){
	window.location.href="js-task2-2.html";
}



//获取数据
var parm1=sessionStorage.peopleNumber;
var peopleData=parm1.replace(/,/g,'');

str1=sessionStorage.peopleAll
peopleAll=JSON.parse(str1);
str2=sessionStorage.tianShu
tianShu=JSON.parse(str2);
var parm2=sessionStorage.fate;
i=parm2.replace(/,/g,'')
i=parseInt(i);//parseInt()方法，字符串转数字
var parm3=sessionStorage.orderNum;
orderNumber=parm3.replace(/,/g,'');
orderNumber=parseInt(orderNumber);


str3=sessionStorage.die
die=JSON.parse(str3);






//根据传来的参数利用DOM创建元素
for (var b = 0; b < peopleData.length; b++) {
	creat();
}//for没有作用域，所以把var i=0改为b

function creat(j){
	/*创建外层盒子,即在.bigbox中添加一个类名为.box的div*/
	var box=$("<div></div>");//创建div
	box.attr("id",b);//给创建的div添加属性--Id
 	$(".bigbox").append(box);//把先创建的盒子添加到外层盒子中
 	box.addClass("box");//为新创建的盒子添加样式
 	/*创建内层盒子1*/
 	var box1=$("<div></div>");
 	// $("#i").prepend(box1);
 	box1.addClass("item1");
 	if (peopleAll[b].aLive!=1) {
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

 	//添加刀子图片
 	var pic=$("<div></div>");
 	$(pic).appendTo(box);
 	pic.addClass("pic");

}
//判断身份
function judjeId(){
	/*0是杀手，1是平民*/
	if(peopleData[b]==0){
		return '<p>杀手</p>' ;
	}
	else{
		return '<p>水民</p>' ;
	}
}
//返回号码
function returnNumber(){
	return "<p>"+(b+1)+"号</p>"
}



//创建一个数组用于确定谁被选中，其余的类似身份、生死状态交给button的内层if判断
//先初始化，都为0，0表示没被选中，1表示被选中，每一次被选中的时候都将其余的初始化为0；
var arr=[];
for(var b=0;b<peopleData.length; b++){
	arr[b]=0;
} 
var c//全局变量，用于后边的按钮判断
$(".box").click(function(){
	c=$(this).attr("id");//获取被点击元素的id
	for(var b=0;b<peopleData.length; b++){
	arr[b]=0;
	arr[c]=1;
	} 
})








$("#next").click(function(){

	var x = 0;
	for(var b=0;b<peopleData.length; b++){
		if(arr[b]==1){
			x=1;
		}
	} 
	if(x){//这个判断条件代表选中了一名玩家
		if (peopleAll[c].aLive==1) {//判断存活状态
			
				peopleAll[c].aLive=3;//规定存活状态中，1是存活、2是被杀手杀死、3是被投死
				peopleAll[c].order=orderNumber;//添加死亡顺序
				die.push(c);//死亡人的id加入数组
				orderNumber++;

				

var r=0;
	var re=0;
for(var u=0;u< peopleData.length;u++){
		if(peopleAll[u].idName==0){//判断身份0是杀手
			if(peopleAll[u].aLive==1){
				r++;
			}
		}
		else{
			if(peopleAll[u].aLive==1){
			re++;
			}
		}
	}


			if(r == 0 || re == 0){//判断条件应该是杀手的存活数或者平民的存活数





	var str2 = JSON.stringify(tianShu);
	sessionStorage.tianShu=str2; 
	var str1 = JSON.stringify(peopleAll);
	sessionStorage.peopleAll=str1 ;
	var str3 = JSON.stringify(die);
				sessionStorage.die=str3; 

	window.location.href="js-task4-6.html";
}

			else{
				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
				sessionStorage.orderNum=orderNumber;
				/*sessionStorage.check=c;//保存c，传递给法官台本页面，用于指明谁被杀*/
				var str3 = JSON.stringify(die);
				sessionStorage.die=str3; 
				window.location.href="js-task-4-2.html";
			}	






		}
		else{
			alert("请尊重死者")
		}
	}
	else{
		alert("请选择一名玩家放逐！")
	}

})








})







