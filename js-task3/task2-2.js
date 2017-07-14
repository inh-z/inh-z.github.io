// var back = document.getElementById('back');
// back.onclick = function(){
// 	window.history.back(1); 
// }

// /*onchange事件、switch语句（特别注意多case的写法）、获取value值、alert*/
// var btn = document.getElementById('goto');

// var inpt = document.getElementById('count');
// var v;
// inpt.onchange = function(){
// 		v = inpt.value ;
// 		switch (v)
// 		{
// 		case '4' : case '5':case '6' :case '7' :case '8' :case '9' :
// 		case '10' :case '11' :case '12' :case '13' :case '14' :case '15' :
// 		case '16' :case '17' :case '18' :
// 		break;
// 		default:
// 		v = null;
// 	 	alert('请输入正确的玩家数量！')
// 		}
// 		memberCreat();
// }
// /*创建数组及打乱*/
// function memberCreat(){
// 	if (v!=null){
// 		var killer = Math.floor(v / 4) ;
// 		var people = v - killer;
// 		var arr = [] ;
// 		for (var i = v - 1; i >= 0; i--) {
// 	 		arr[i] = 0 ;
// 		}
// 		for (var j = killer ; j > 0; j--) {
// 			var k = Math.floor(Math.random() * v );
// 			if ( !(arr[k]) ) {
// 				arr[k] = 1 ;
// 			}
// 			else{
// 				continue;
// 			}
// 		}
// 		var nv = document.getElementById("killes");
// 				nv.innerHTML=killer; 
// 		var nan = document.getElementById("peoples");
// 				nan.innerHTML=people; 
// 	}
// 	else{
// 		var nv = document.getElementById("killes");
// 				nv.innerHTML=''; 
// 		var nan = document.getElementById("peoples");
// 				nan.innerHTML=''; 
// 	}
// }

// /*按钮事件*/
// btn.onclick = function(){
// 	if (!(v)) {
// 		alert('请正确输入玩家数量！')
// 	}
// }











var back = document.getElementById('back');
back.onclick = function(){
	window.history.back(1); 
}
var btn = document.getElementById('goto');
var inpt = document.getElementById('count');
	inpt.value ="";
var v;
inpt.onchange = function(){
		/*正则表达式、parseInt方法*/
		v = parseInt(inpt.value) ;
		var a = /^([4-9]|1[0-8])$/;
		var re = new RegExp(a);
		if(re.test(v)){
			memberCreat();
		}
		else{
			v = null ;
			alert('请输入正确的玩家数量！')
			
 		}
}
function memberCreat(){
	if (v!=null){
		var killer = Math.floor(v / 4) ;
		var people = v - killer;
		/*创建数组，0表示杀手，1表示平民*/
		var arr = [] ;
		for (var i = v - 1; i >= 0; i--) {
			if(i<killer){
	 			arr[i] = 0 ;
	 		}
	 		else{
	 			arr[i]=1;
	 		}
		}
		/*洗牌*/
		shuffle(arr);

		var nv = document.getElementById("killes");
				nv.innerHTML=killer; 
		var nan = document.getElementById("peoples");
				nan.innerHTML=people; 
	}
	else{
		var nv = document.getElementById("killes");
				nv.innerHTML=''; 
		var nan = document.getElementById("peoples");
				nan.innerHTML=''; 
	}
}
btn.onclick = function(){
	if (!(v)) {
		alert('请正确输入玩家数量！')
		
	}
	/*第一种方法
	else{
		window.open('test.html');
	}*/
	/*第二种方法法（不成熟）
	else{
		var parm1=document.getElementById("killes").innerHTML; //获取文本节点的值用innerHTML
		var parm2=document.getElementById("peoples").innerHTML; 
		var myurl="js-task3.html"+"?"+"parm1="+parm1; 
		window.location.assign(myurl); 
	}*/
	else{
		var parm1=brr;
		var myurl="js-task3.html"+"?"+"parm1="+parm1; 
		window.location.assign(myurl); 	
	}
}

function shuffle(a){
	brr=[];
	while(a.length>0){
		var index =parseInt(Math.random()*a.length);
		brr.push(a[index]);
		a.splice(index,1);
	}
	return brr ;
}