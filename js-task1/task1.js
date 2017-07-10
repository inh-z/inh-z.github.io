// ////////////   第一种方法
// 获取随机数
// /*function rndNub(){
// 	var a,b,c;
//     a= Math.floor(Math.random() * 10);
//     b= Math.floor(Math.random() * 10);
//     c= Math.floor(Math.random() * 10);
//     if ( a !== b && a !== c && b!== c){
//     	return a,b,c
//     }
// }
// */

// /*获取随机颜色*/
// function getRandomColor(){
//   return  '#' +
//     (function(color){
//     return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
//       && (color.length == 6) ?  color : arguments.callee(color);
//   })('');
// }
// /*onclick事件函数*/
// function choose(){
// 		var a,b,c;
//     	a= Math.floor(Math.random() * 9);
//     	b= Math.floor(Math.random() * 9);
//     	c= Math.floor(Math.random() * 9);
//     	if ( a != b && a != c && b!= c){
//     	document.getElementById('num'+a).style.backgroundColor=getRandomColor();
//     	document.getElementById('num'+b).style.backgroundColor=getRandomColor();
//     	document.getElementById('num'+c).style.backgroundColor=getRandomColor();
//     	setTimeout(function(){
//     		document.getElementById('num'+a).style.backgroundColor='orange';},500);
//     	setTimeout(function(){
//     		document.getElementById('num'+b).style.backgroundColor='orange';},500);
//     	setTimeout(function(){
//     		document.getElementById('num'+c).style.backgroundColor='orange';},500);
//     	};
// 	}


//    var start;
// // var stop=setInterval(resert,1000);
// // clearInterval(start);
// // clearInterval(stop);
// // resert();

// /*onclick开始闪事件*/	
// function change(){
// 	clearInterval(start);//厉害的操作
// 	start=setInterval(choose,1000);
// 	//setInterval(resert,900);
// }
// /*onclick停止事件*/
// function over(){
// 	clearInterval(start);
// 	clearInterval(stop);
// 	resert();
// }

// /*重置*/
// function resert(){
// 	document.getElementById('num1').style.backgroundColor='orange';
// 	document.getElementById('num2').style.backgroundColor='orange';
// 	document.getElementById('num3').style.backgroundColor='orange';
// 	document.getElementById('num4').style.backgroundColor='orange';
// 	document.getElementById('num5').style.backgroundColor='orange';
// 	document.getElementById('num6').style.backgroundColor='orange';
// 	document.getElementById('num7').style.backgroundColor='orange';
// 	document.getElementById('num8').style.backgroundColor='orange';
// 	document.getElementById('num0').style.backgroundColor='orange';
// }


/////////重构？


/*获取随机颜色*/
function getRandomColor(){
	var rgb = 'rgb(' + Math.floor(Math.random()*256) + ',' + 
Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256)
+ ')' ;
	return rgb ;
}

/*选取三个不重复的随机数字*/
function getRandomNum(){
	var box1 , box2 , box3;
	do{
	box1 = Math.floor(Math.random()*9) ;//注意随机数的选取的范围
	box2 = Math.floor(Math.random()*9) ;
	box3 = Math.floor(Math.random()*9) ;
	}while(box1 == box2 || box2 == box3 || box1 == box3);
	arr = [];
	arr[0]=box1;
	arr[1]=box2;
	arr[2]=box3;
	return arr;
}

/*开始闪事件函数*/
function change(){
	getRandomNum();
	for(var n=0 ; n<=2 ; n++){
		document.getElementById('num'+arr[n]).style.backgroundColor=getRandomColor();
	}
	function reset(){
	for(var n=0 ; n<=2 ; n++){
		document.getElementById('num'+arr[n]).style.backgroundColor='orange';
	}
	}
	setTimeout(reset, 500);//第一个参数是函数名
}
var time;
function newChange(){
   	over();//防止点多次“开始闪”按钮，闪瞎眼。一种重置保护机制？
	time = setInterval(change,1000);
}

/*结束闪事件函数*/
function over(){
   for (var i = 0; i <= 8; i++) {
   	document.getElementById('num'+i).style.backgroundColor='orange';
   }
   clearInterval(time);
}

/*onclick事件*/
var start = document.getElementById('start');
var stop = document.getElementById('stop');

start.onclick=function(){newChange();}
stop.onclick=function(){over();}