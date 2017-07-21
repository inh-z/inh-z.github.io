$(document).ready(function() {

var btn3 = document.getElementById('over');
	btn3.onclick = function() {
		window.location.href = "js-task2-2.html";
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







var mvp=[];
for (var j = 0,mn=1; j < peopleData.length; j++){
	for(var e = 0; e < peopleData.length; e++){
		if (parseInt(peopleAll[e].order)==mn) {
			mvp.push(e);
			mn++;
		}
	}
}

function judjeId(x){
	if(peopleData[mvp[x]]==0){
		return "杀手"
	}
	else{
		return "平民"
	}
}
var zCup=0, sCup=0;
for (var h = 0; h < peopleData.length; h++){
	if (peopleAll[h].aLive==1) {
		console.log(peopleAll[h].aLive);
		if (peopleAll[h].idName==0) {
			zCup++;
		}
		else{
			sCup++;
		}
	}
}






var t=1;
var x=0;

for(var v=1;v<i;v++){
	creatDetail(v);
	$("#killerman").text(zCup);
	$("#foolishman").text(sCup);
	}

function creatDetail(a){
	var box = $("<div></div>");
	box.addClass("content");
	box.attr("id", "u" + a);
	$("body").append(box);

	var box1 = $("<div></div>");
	box1.addClass("detail");
	box1.attr("id", "o" + a);
	$("#u" + a).append(box1);

	var box2 = $("<div></div>");
	box2.addClass("detail-top");
	box2.attr("id", "p" + a);
	$("#o" + a).append(box2);

	var para = $("<p>第"+t+"天</p>");
	t++;
	para.attr("id", "s" + a);
	$("#p" + a).append(para);

	var para1 = $("<p>黑夜:"+(mvp[x]+1)+"号被杀死了，真实身份是"+judjeId(x)+"</p>");
	para1.attr("id", "q" + a);
	$("#o" + a).append(para1);
	x++;


	var para2 = $("<p>白天:"+(mvp[x]+1)+"号被投死了，真实身份是"+judjeId(x)+"</p>");
	para2.attr("id", "r" + a);
	para2.addClass("special");
	$("#o" + a).append(para2);
	x++;




}
















































})

