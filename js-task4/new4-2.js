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

//底部两个按钮
var btn3 = document.getElementById('over');
	btn3.onclick = function() {
		window.location.href = "js-task2-2.html";
	}
var btn4 = document.getElementById('look');
	btn4.onclick = function() {
		window.location.href = "js-task4-5.html";
	}
















	//获取数据
	var parm1 = sessionStorage.peopleNumber;
	var peopleData = parm1.replace(/,/g, '');

	
	str1=sessionStorage.peopleAll
peopleAll=JSON.parse(str1);

str2=sessionStorage.tianShu
tianShu=JSON.parse(str2);

var parm2=sessionStorage.fate;
i=parm2.replace(/,/g,'')
i=parseInt(i);//parseInt()方法，字符串转数字

/*var parm3=sessionStorage.check;
c=parm3.replace(/,/g,'');
c=parseInt(c);//指明谁被杀
*/
str3=sessionStorage.die
die=JSON.parse(str3);




/*function jq(){
for(var we1=1;we1<=i;we1++){
			if(eval("tianShu.dayDetail" + we1)[0][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(0).css("background-color", "#9e9e9e");
				puck.children('li').eq(0).append("<p>"+c+"号被杀死，真实身份是</p>");
			}
		}
for(var we2=1;we2<=i;we2++){
			if(eval("tianShu.dayDetail" + we2)[1][1]==1){
				var puck=eval("$("+" '#p"+we2+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(1).css("background-color", "#9e9e9e");
			}
		}
for(var we3=1;we3<=i;we3++){
			if(eval("tianShu.dayDetail" + we3)[2][1]==1){
				var puck=eval("$("+" '#p"+we3+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(2).css("background-color", "#9e9e9e");
			}
		}
for(var we4=1;we4<=i;we4++){
			if(eval("tianShu.dayDetail" + we4)[3][1]==1){
				var puck=eval("$("+" '#p"+we4+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(3).css("background-color", "#9e9e9e");
				puck.children('li').eq(3).append("<p>2222</p>");
			}
		}
}*/



function judjeId(){
	if (peopleData[die[left]]==0) {
		return "杀手"
	}
	else{
		return "平民"
	}
}




var left=0;
function jq(){
for(var we1=1;we1<=i;we1++){
			if(eval("tianShu.dayDetail" + we1)[0][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(0).css("background-color", "#9e9e9e");
				
				
				puck.children('li').eq(0).append("<p>"+(parseInt(die[left])+1)+"号被杀死，真实身份是"+judjeId()+"</p>");
				
				left++;
				





			}
			if(eval("tianShu.dayDetail" + we1)[1][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(1).css("background-color", "#9e9e9e");
			}
			if(eval("tianShu.dayDetail" + we1)[2][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(2).css("background-color", "#9e9e9e");
			}
			if(eval("tianShu.dayDetail" + we1)[3][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(3).css("background-color", "#9e9e9e");
				puck.children('li').eq(3).append("<p>"+(parseInt(die[left])+1)+"号被杀死，真实身份是"+judjeId()+"</p>");
				left++;
			}
		}
	
	// for(var wes=0,left=0;wes<i;wes++){
	// 	puck.children('li').eq(0).append("<p>"+(parseInt(die[left])+1)+"号被杀死，真实身份是</p>");
	// 	left++;
	// 	puck.children('li').eq(3).append("<p>"+(parseInt(die[left])+1)+"号被杀死，真实身份是</p>");
	// }
}




























	/*创造天数函数*/
	function creatDays(a) {
		//if判断 如果杀手数或平民数为0则结束游戏，跳转‘游戏结束’页面
		
			//var a=i;

			var box = $("<div></div>");
			box.addClass("dayNumber");
			box.attr("id", "u" + a);
			$(".contain").append(box);


			var par = $("<p>第" + a + "天</p>");
			par.addClass("days");
			par.attr("id", a);
			//添加click事件
			par.click(function(event) {
				x = event.target;
				z = x.id;
				$(z).click(function() {
					$("#p" + z).slideToggle("slow");
				}());
			})

			$("#u" + a).append(par);


			var pic = $("<img src='img/4-2.png'>");
			$("#a").append(pic);


			var ulist = $("<ul></ul>");
			ulist.addClass("detail");
			ulist.attr("id", "p" + a);
			$("#u" + a).append(ulist);


			var list1 = $("<li>杀手杀人</li>")
			list1.click(judjeOrder1);
			$("#p" + a).append(list1);

		/*for(var we1=1;we1<=i;we1++){
			if(eval("tianShu.dayDetail" + we1)[0][1]==1){
				var puck=eval("$("+" '#p"+we1+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(0).css("background-color", "#9e9e9e");
				puck.children('li').eq(0).append("<p>1111</p>");
			}
		}*/
		
			var list2 = $("<li>亡灵发表遗言</li>")
			list2.click(judjeOrder2);
			$("#p" + a).append(list2);

		
		/*for(var we2=1;we2<=i;we2++){
			if(eval("tianShu.dayDetail" + we2)[1][1]==1){
				var puck=eval("$("+" '#p"+we2+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(1).css("background-color", "#9e9e9e");
			}
		}*/

			var list3 = $("<li>玩家依次发言</li>")
			list3.click(judjeOrder3);
			$("#p" + a).append(list3);

		
		/*for(var we3=1;we3<=i;we3++){
			if(eval("tianShu.dayDetail" + we3)[2][1]==1){
				var puck=eval("$("+" '#p"+we3+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(2).css("background-color", "#9e9e9e");
			}
		}*/

			var list4 = $("<li>全民投票</li>")
			list4.click(judjeOrder4);
			$("#p" + a).append(list4);

		
		/*for(var we4=1;we4<=i;we4++){
			if(eval("tianShu.dayDetail" + we4)[3][1]==1){
				var puck=eval("$("+" '#p"+we4+" ')");//方法是来自 var dsa=$("#ddd");das.eq(0);
				puck.children().eq(3).css("background-color", "#9e9e9e");
			}
		}*/


			/*for(var op=1;op<=i;op++){
				for(var po=1;po<=4;po++){
					if((eval("tianShu.dayDetail" + i))[(op-1)][1]==1){
					$(eval("list" + po )).css("background-color", "#9e9e9e");
					}
				}
			}*/

	}
	for(var v=1;v<=i;v++){
	creatDays(v);
	}
	jq();
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
/*****************************************************************/				
/*sessionStorage这种存储方式不会动态的监听存储数据的改变		 */
/*在同一个页面改变保存的数据没有问题							 */
/*页面跳转之后如果在新页面对保存值做出了修改，需要手动再次保存	 */
/*才能在下一个跳转的页面接收到前一个页面做出的修改				 */
/*																 */
/*****************************************************************/
				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
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
				alert("请死者亮明身份并且发表遗言")
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[2][0]) = 1;
				(eval("tianShu.dayDetail" + o)[1][1]) = 1;
				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
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
				alert("玩家依次发言讨论")
				$(this).css("background-color", "#9e9e9e");
				(eval("tianShu.dayDetail" + o)[3][0]) = 1;
				(eval("tianShu.dayDetail" + o)[2][1]) = 1;
				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
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

				//eval("tianShu.dayDetail" + o) == [];
				
				eval("var dayDetail" + i + "= []"); //用eval动态命名变量名 等价于 var "dayDetail"+i=[];
	/*创建二维数组并初始化，1、2、3、4代表执行顺序；1表示激活，0表示未激活；*/
				for (var q = 0; q < 4; q++) {
				eval("dayDetail" + i)[q] = [q + 1, 0]; //注意创建二维数组的方式
				}
				eval("tianShu.dayDetail" + i + "= dayDetail" + i);

				var str2 = JSON.stringify(tianShu);
				sessionStorage.tianShu=str2; 
				var str1 = JSON.stringify(peopleAll);
				sessionStorage.peopleAll=str1 ;
				sessionStorage.fate=i;
				/*creatDays();*/
				window.location.href = 'js-task4-4.html';//页面跳转，跳转到投票页面
				
			} else {
				alert("请按顺序操作");
			}
		} else {
			alert("请进行游戏下一项操作");
		}
	}


//页面跳转回来后判断或者每次加载页面时判断li是否被激活
/*for(var op=1;op<=i;op++){
	for(var po=0;po<4;po++){
		if( eval("tianShu.dayDetail" + op)[po][1]==1 ){
			$(this).css("background-color", "#9e9e9e");
		}
	}
}*/





})



