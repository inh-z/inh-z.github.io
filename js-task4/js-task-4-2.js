$(document).ready(function() {
	//顶部两个按钮
	var btn1 = document.getElementById('back');
	btn1.onclick = function() {
		window.history.back(1);
	}
	var btn2 = document.getElementById('close');
	btn2.onclick = function() {
		window.location.href = "js-task2-2.html";
	}

	//按钮效果——显示和隐藏 人为创建第一天
	/*$(".days").click(function(){
	    $("#1").toggle();
	  });
	单一的匹配起作用，多个的时候就不起作用了
	  */

	//获取数据
	var parm1 = sessionStorage.peopleNumber;
	var peopleData = parm1.replace(/,/g, '');

	//根据获取的数据创建新数组 新数组里添加人物生死状态，1是生，2是死
	var peopleAll = new Array;
	for (var i = 0; i < peopleData.length; i++) {
		peopleAll[i] = {
			idName: peopleData[i],
			aLive: 1
		};
	}
	//Test
	/*alert(peopleAll);  返回[object object],[object object],..
	alert(peopleAll[0].idName); 返回0或者1 idName代表身份
	alert(peopleAll[0].aLive); aLive代表生死状态
	*/

	//获取平民人数以及杀手人数 0是杀手，1是平民
	var j = 0;
	for (var i = 0; i < peopleData.length; i++) {
		if (peopleData[i] == 0) {
			j++;
		}
	}
	var killer = j; //杀手数
	var normaler = peopleData.length - j; //平民数

	var i = 1; //天数
	var tianShu = {}; //创建一个对象，用于存放关于天数的二维数组

	/*创造天数函数*/
	function creatDays() {
		//if判断 如果杀手数或平民数为0则结束游戏，跳转‘游戏结束’页面
		if (killer == 0 || normaler == 0) {
			/*alert("游戏结束！")*/
		} else {
			/*alert("游戏继续！")*/
			//创建天数及功能
			/*var dayDetail=new String;*/ //字符串拼接创建对象属性名
			/*var dayDetail='dayDetail'+i;*/ //字符串拼接创建对象属性名
			/*var "dayDetail"+i=[];*/ //创建一个数组用于存放li的执行顺序和激活状态
			eval("var dayDetail" + i + "= []"); //用eval动态命名变量名 等价于 var "dayDetail"+i=[];
			/*创建二维数组并初始化，1、2、3、4代表执行顺序；1表示激活，0表示未激活；*/
			for (var q = 0; q < 4; q++) {
				eval("dayDetail" + i)[q] = [q + 1, 0]; //注意创建二维数组的方式
			}//包括四个li的执行顺序以及激活状态
			/*将初始化的二维数组添加到全局对象 tianShu 中存储*/
			/*tianShu.'dayDetail'+i='dayDetail'+i;*/ //为tianShu对象添加属性
			eval("tianShu.dayDetail" + i + "= dayDetail" + i);

			/*console.log(eval("tianShu.dayDetail" + i)[0][1]);*/

			var box = $("<div></div>");
			box.addClass("dayNumber");
			box.attr("id", "u" + i);
			$(".contain").append(box);


			var par = $("<p>第" + i + "天</p>");
			par.addClass("days");
			par.attr("id", i);
			//添加click事件
			par.click(function(event) {
				x = event.target;
				z = x.id;
				$(z).click(function() {
					$("#p" + z).slideToggle("slow");
				}());
			})

			$("#u" + i).append(par);


			var pic = $("<img src='img/4-2.png'>");
			$("#i").append(pic);


			var ulist = $("<ul></ul>");
			ulist.addClass("detail");
			ulist.attr("id", "p" + i);
			$("#u" + i).append(ulist);


			var list1 = $("<li>杀手杀人</li>")
			list1.click(judjeOrder1);
			$("#p" + i).append(list1);
			var list2 = $("<li>亡灵发表遗言</li>")
			list2.click(judjeOrder2);
			$("#p" + i).append(list2);
			var list3 = $("<li>玩家依次发言</li>")
			list3.click(judjeOrder3);
			$("#p" + i).append(list3);
			var list4 = $("<li>全民投票</li>")
			list4.click(judjeOrder4);
			$("#p" + i).append(list4);

			/*i++;*/


		}
	}
	creatDays();

	//<p>标签click事件，即点击<p>标签<ul>标签显示或隐藏，用for循环创建不起作用，所以改用onclick事件
	/*for(var m=1;m<3;m++){
		$("#p"+m).click(function(){
	    $("#"+m).toggle();
	  });
	}*/

	/*$("#p1").click(function(){
	    $("#1").slideToggle("slow");
	  });*/
	//运用了target事件属性，依旧不起作用，尝试放入‘创建天数及功能’中。
	/*function getEventTrigger(event){
		x=event.target; 
	  	z=x.id;
		$(z).click(function(){
	    	$("#p"+z).slideToggle("slow");
	  	}());
	}*/


	/*var dayDetail = [];*/ //创建一个数组用于存放li的执行顺序和激活状态
	//创建二维数组并初始化，1、2、3、4代表执行顺序；1表示激活，0表示未激活；
	//for循环没有局部作用域！
	/*for(var q=0;q<4;q++){
		dayDetail[q]=[q+1,0];//注意创建二维数组的方式
	}*/
	//[[1,0],[2,0],[3,0],[4,0]]

	/*li点击事件*/
	//开始打算写到一个函数里，即一个函数控制控制所有的li，无法实现，转而写四个函数一一对应判断;
	function judjeOrder1() {
		//结合创建的二维数组进行判断
		//判断条件有问题，并没有做到结合二维数组进行判断
		//解决办法：获取其父元素id，提取天数，存入变量o，用o代替i判断

		var parentId = $(this).parent().attr("id") //获取父元素id
		var o = parentId.replace(/p/g, ''); //用正则表达式获取“天数”，存入变量o

		if ((eval("tianShu.dayDetail" + o)[0][1]) == 0) {
			if ((eval("tianShu.dayDetail" + o)[0][0]) == 1) {
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[1][0]) = 1;
				(eval("tianShu.dayDetail" + o)[0][1]) = 1;
/*******************************************************************/
/*	   sessionStorage方法把传递的数据都变为字符串，解决方法        */
/*	      														   */
/*思路很简单：JSON对象提供的parse和stringify将其他数据类型		   */
/*转化成字符串，再存储到storage中就可以了						   */
/*  var obj = { Hellow:'world' };								   */
/*  var str = JSON.stringify(obj); 								   */
/*	存入 														   */
/*  sessionStorage.obj = str;									   */
/*  读取 														   */
/*  str = sessionStorage.obj;									   */
/*  重新转换为对象 												   */
/*  obj = JSON.parse(str);										   */			
/*******************************************************************/
				/*传参数*/

				/*peopleAll 对象数组（包含对象的数组），生死状态、身份*/
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
				/*str1=sessionStorage.peopleAll
 				  peopleAll=JSON.parse(str1);*///读取

				/*tianShu 数组对象（包含数组的对象），执行顺序、激活状态*/
				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				/*str2=sessionStorage.tianShu
 				  tianShu=JSON.parse(str2);*///读取

				/*i 天数*/
				sessionStorage.fate=i;

				window.location.href = 'js-task4-3.html';//页面跳转，跳转到杀人页面
			} else {
				alert("请按顺序操作");
			}
		} else {
			alert("请进行游戏下一项操作");
		}
	}
	function judjeOrder2() {

		var parentId = $(this).parent().attr("id") //获取父元素id
		var o = parentId.replace(/p/g, ''); //用正则表达式获取“天数”，存入变量o

		if ((eval("tianShu.dayDetail" + o)[1][1]) == 0) {
			if ((eval("tianShu.dayDetail" + o)[1][0]) == 1) {
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[2][0]) = 1;
				(eval("tianShu.dayDetail" + o)[1][1]) = 1;
			} else {
				alert("请按顺序操作");
			}
		} else {
			alert("请进行游戏下一项操作");
		}
	}

	function judjeOrder3() {

		var parentId = $(this).parent().attr("id") //获取父元素id
		var o = parentId.replace(/p/g, ''); //用正则表达式获取“天数”，存入变量o

		if ((eval("tianShu.dayDetail" + o)[2][1]) == 0) {
			if ((eval("tianShu.dayDetail" + o)[2][0]) == 1) {
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[3][0]) = 1;
				(eval("tianShu.dayDetail" + o)[2][1]) = 1;
			} else {
				alert("请按顺序操作");
			}
		} else {
			alert("请进行游戏下一项操作");
		}
	}

	function judjeOrder4() {

		var parentId = $(this).parent().attr("id") //获取父元素id
		var o = parentId.replace(/p/g, ''); //用正则表达式获取“天数”，存入变量o

		if ((eval("tianShu.dayDetail" + o)[3][1]) == 0) {
			if ((eval("tianShu.dayDetail" + o)[3][0]) == 1) {
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[3][1]) = 1;
				++i;
				creatDays();
				eval("tianShu.dayDetail" + o) == [];
			} else {
				alert("请按顺序操作");
			}
		} else {
			alert("请进行游戏下一项操作");
		}
	}


//页面跳转回来后判断或者每次加载页面时判断li是否被激活
for(var op=1;op<=i;op++){
	for(var po=0;po<4;po++){
		if( eval("tianShu.dayDetail" + op)[po][1]==1 ){
			$(this).css("background-color", "#9e9e9e");
		}
	}
}





})