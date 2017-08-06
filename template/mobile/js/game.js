$(function(){
	if(bgPath.length != 0 && bgPath != "" && bgPath!= null){
		$(".zwwI_container .bg").attr("src",MCRSC.getImage( resUrl+bgPath ,resUrl+bgPath));
	}else{
		$(".zwwI_container .bg").attr("src",MCRSC.getImage( imgPath+"/infoBG.png" ,imgPath+"/infoBG.png"));
	}
	/**/
	var _ww=$(window).width();
	var _wh=$(window).height();
	$(".infobox").css({'width':_ww,"height":_wh,"top":0,"left":0});
});
$(function(){
	if(playPath.length != 0 && playPath != "" && playPath!= null){
		$("#game_").css({"background":'url('+MCRSC.getImage( resUrl+playPath ,resUrl+playPath)+')','position':'relative','width':'100%','background-size':'100%','overflow':'hidden'});
		$("body:after").attr("style",'content:"";position:fixed;top:0;left:0;z-index:-1;width:100%;height:100%;background:url('+MCRSC.getImage( resUrl+playPath ,resUrl+playPath)+') no-repeat 0 0;background-size:100% 100%;');
	}else{
		$("#game_").css({"background":'url('+MCRSC.getImage( imgPath+"/playBG.png" ,imgPath+"/playBG.png")+')','position':'relative','width':'100%','background-size':'100%','overflow':'hidden'});
		$("body:after").attr("style",'content:"";position:fixed;top:0;left:0;z-index:-1;width:100%;height:100%;background:url('+MCRSC.getImage( imgPath+"/playBG.png" ,imgPath+"/playBG.png")+') no-repeat 0 0;background-size:100% 100%;');

	}
});

$(".zwwI_container .fb").attr("src",MCRSC.getImage( imgPath+"/start.png" ,imgPath+"/start.png"));
$("#game_").css({"background":'url('+MCRSC.getImage( imgPath+"/playBG.png" ,imgPath+"/playBG.png")+')','position':'relative','width':'100%','background-size':'100%','overflow':'hidden'});

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  function (callback) {
                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);
                                  });
}
if (!window.cancelRequestAnimationFrame) {
  window.cancelRequestAnimationFrame = (window.cancelAnimationFrame ||
                                        window.webkitCancelRequestAnimationFrame ||
                                        window.mozCancelRequestAnimationFrame ||
                                        window.msCancelRequestAnimationFrame ||
                                        window.oCancelRequestAnimationFrame ||
                                        window.clearTimeout);
}

function getStyle(obj, name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj, false)[name];
	}
}
function Rat () {
  this.x = 0;
  this.y = 0;
  this.width = 150;
  this.scaleN = 0;
  this.mark= parseInt(mc.resource.imgMark[0]);
  this.normalSrc=mc.resource.imgAudio[0];
  this.hitSrc=mc.resource.imgHitAudio[0];
}

Rat.prototype.draw = function (context) {
  context.save();
  context.drawImage(rat,0,0,ratW,ratH,this.x*this.scaleN,this.y*this.scaleN,ratW*this.scaleN,ratH*this.scaleN);
  context.restore();
};

function Tiger () {
  this.x = 0;
  this.y = 0;
  this.width = 150;
  this.scaleN = 0;
  this.mark= parseInt(mc.resource.imgMark[1]);
  this.normalSrc=mc.resource.imgAudio[1];
  this.hitSrc=mc.resource.imgHitAudio[1];
}
Tiger.prototype.draw = function (context) {
  context.save();
  context.drawImage(tiger,0,0,tigerW,tigerH,this.x*this.scaleN,this.y*this.scaleN,tigerW*this.scaleN,tigerH*this.scaleN);
  context.restore();
};
function Monkey () {
  this.x = 0;
  this.y = 0;
  this.width = 150;
  this.scaleN = 0;
  this.mark= parseInt(mc.resource.imgMark[2]);
  this.normalSrc=mc.resource.imgAudio[2];
  this.hitSrc=mc.resource.imgHitAudio[2];
}

Monkey.prototype.draw = function (context) {
  context.save();
  context.drawImage(monkey,0,0,monkeyW,monkeyH,this.x*this.scaleN,this.y*this.scaleN,monkeyW*this.scaleN,monkeyH*this.scaleN);
  context.restore();
};

function Prize () {
  this.x = 0;
  this.y = 0;
  this.width = 150;
  this.scaleN = 0;
  this.mark= parseInt(mc.resource.imgMark[3]);
  this.markD= parseInt(mc.resource.imgMarkd[3]);
  this.normalSrc=mc.resource.imgAudio[3];
  this.hitSrc=mc.resource.imgHitAudio[3];
}

Prize.prototype.draw = function (context) {
  context.save();
  context.drawImage(prize,0,0,prizeW,prizeH,this.x*this.scaleN,this.y*this.scaleN,prizeW*this.scaleN,prizeH*this.scaleN);
  context.restore();
};

function Join () {
  this.x = 0;
  this.y = 0;
  this.height=88;
  this.scaleN = 0;
}

Join.prototype.draw = function (context) {
  context.save(); 
  context.drawImage(join,0,0,18,135,288*this.scaleN,170*this.scaleN,18*this.scaleN,this.height*this.scaleN);/*88-126*/
  context.restore();
};
function SmallJ () {
  this.x = 0;
  this.y = 256;
  this.height=10;
  this.scaleN = 0;
}

SmallJ.prototype.draw = function (context) {
  context.save(); 
  context.drawImage(smallJ,0,0,14,126,290*this.scaleN,this.y*this.scaleN,14*this.scaleN,this.height*this.scaleN);/*10-*/
  context.restore();
};
function ZhuaziF () {
  this.x = 0;
  this.y = 266;
  this.height=193;
  this.scaleN = 0;
}

ZhuaziF.prototype.draw = function (context) {
  context.save(); 
  context.drawImage(zhuaziF,0,0,184,193,205*this.scaleN,this.y*this.scaleN,184*this.scaleN,193*this.scaleN);
  context.restore();
};
function Zhuabing () {
  this.x = 0;
  this.y = 266;
  this.height=191;
  this.scaleN = 0;
}

Zhuabing.prototype.draw = function (context) {
  context.save(); 
  context.drawImage(zhuabing,0,0,184,191,205*this.scaleN,this.y*this.scaleN,184*this.scaleN,191*this.scaleN);
  context.restore();
};

function setPositionAndScale(bg,ele,t,l,w,gW,gH){
	var globalH = getStyle($(bg)[0],"height"),
	globalW = $(bg).width();
	globalH = parseInt(globalH);
	fbH = globalH*t/gH + 'px';
	fbL = globalW*l/gW + 'px';
	$(ele).width(globalW*w/gW).css({"top":fbH,"left":fbL});
	$(ele).show();
};
function start(event){
	event = event||window.event;
	$(".layout").hide();
	$(".win_box").hide();
	$(".fail_box").hide();
	$(".xuanyao_box").hide();
	$("#game_").hide();
	//$(".zwwI_container").show();
	endTime = new Date().getTime() + mc.conf.playTime*1000+100;
	xspeed = 3;
	score = 0;
	$(".win_box .score").html('0');
	$("#score").html('0');
	if (event.stopPropation) {
      event.stopPropation();
    } else {
      event.cancelBubble = true;
    }
}
function xuanY(event){
	event = event||window.event;
	$(".win_box").css({"display":"none"});
	$(".fail_box").css({"display":"none"});
	$(".layout").show();
	$(".xuanyao_box").show();
	if (event.stopPropation) {
      event.stopPropation();
    } else {
      event.cancelBubble = true;
    }
}
function showAward(){
	//提交成绩并弹出提示
	window.cancelRequestAnimationFrame(flagIntval);
	dp_submitScore(score);
	var _postUlr=mc.refUrl.api;
	$.post(_postUlr, {'mark':score,'num':countMonkey,'uid':mc.refUrl.uid,'gid':mc.refUrl.more},function(data){
		if(data.success){
			endword=endword.replace("|#成绩#|",score);
			showEnd(endword);
		}else{
			swal(result.msg);
		}
	},'json');
}

function finish(){
	//结束
	timediff = (endTime-new Date().getTime())/1000;
	if(parseInt(timediff)<=0){
		xspeed = 0;
		$("#timeLefted").html("0");
		
	}else{
		$("#timeLefted").html(parseInt(timediff));
	}
}
function gameStart(event){
	if(showInfo()==0){
 		return;
 	};
	if(showACTTime()==0){
 		return;
 	};
 	if(follow()==0){
 		return;
 	};
	if(showGroup()==0){
 		return;
 	};
	event = event||window.event;
	$(".zwwI_container").css({"display":"none"});
	$("#game_").css({"display":"block"});
	$("#score").html('0');
	endTime = new Date().getTime() + mc.conf.playTime*1000+100;
	if (event.stopPropation) {
      event.stopPropation();
    } else {
      event.cancelBubble = true;
    }
	setTimeout(showAward,mc.conf.playTime*1000+600);
	drawFrame();
}
var rat=new Image(),
	tiger=new Image(),
	monkey=new Image(),
	prize=new Image(),
	ratH,ratW,tigerH,tigerW,monkeyH,monkeyW,prizeH,prizeW,
	join= new Image(),
	smallJ=new Image(),
	zhuaziF=new Image(),
	zhuabing=new Image(),
	RatN = new Rat(),
	Rat1 = new Rat(),
	TigerN = new Tiger(),
	Tiger1 = new Tiger(),
	MonkeyN = new Monkey(),
	Monkey1 = new Monkey(),
	PrizeN = new Prize(),
	Prize1 = new Prize(),
	JoinN = new Join(),
	SmallJN = new SmallJ(),
	ZhuaziFN = new ZhuaziF(),
	ZhuabingN = new Zhuabing(),
	arrAnimals = [RatN,Rat1,TigerN,Tiger1,MonkeyN,Monkey1,PrizeN,Prize1],
	tempArr=[],
	obj = {},
	score = 0,
	timediff = 0;
	endword=mc.refUrl.endword;
	
	var endTime = new Date().getTime() + mc.conf.playTime*1000+100;
	join.src =imgPath+"/join.png";
	smallJ.src = imgPath+"/smallJ.png";
	zhuaziF.src = imgPath+"/zhuaziF.png";
	zhuabing.src = imgPath+"/zhuabing.png";

	$(function(){
		if(mc.resource.imgAudio[0].length != 0 &&　mc.resource.imgAudio[0] != "" && mc.resource.imgAudio[0] != null){
			rat.src = MCRSC.getImage( resUrl+mc.resource.imgAudio[0] ,resUrl+mc.resource.imgAudio[0]);
		}else{
			rat.src = MCRSC.getImage( imgPath+"/rat.png" ,imgPath+"/rat.png");
		}
		rat.onload = function(){
			ratH = rat.height;
			ratW = rat.width;
		}
	});

	$(function(){
		if(mc.resource.imgAudio[1].length != 0 &&　mc.resource.imgAudio[1] != "" && mc.resource.imgAudio[1] != null){
			tiger.src = MCRSC.getImage( resUrl+mc.resource.imgAudio[1] ,resUrl+mc.resource.imgAudio[1]);
		}else{
			tiger.src = MCRSC.getImage( imgPath+"/tiger.png" ,imgPath+"/tiger.png");
		}
		tiger.onload = function(){
			tigerH = tiger.height;
			tigerW = tiger.width;
		}
	});

	$(function(){
		if(mc.resource.imgAudio[2].length != 0 &&　mc.resource.imgAudio[2] != "" && mc.resource.imgAudio[3] != null){
			monkey.src = MCRSC.getImage( resUrl+mc.resource.imgAudio[2] ,resUrl+mc.resource.imgAudio[2]);
		}else{
			monkey.src = MCRSC.getImage( imgPath+"/monkey.png" ,imgPath+"/monkey.png");
		}
		monkey.onload = function(){
			monkeyH = monkey.height;
			monkeyW = monkey.width;
		}
	});
	
	$(function(){
		if(mc.resource.imgAudio[3].length != 0 &&　mc.resource.imgAudio[3] != "" && mc.resource.imgAudio[3] != null){
			prize.src = MCRSC.getImage( resUrl+mc.resource.imgAudio[3] ,resUrl+mc.resource.imgAudio[3]);
		}else{
			prize.src = MCRSC.getImage( imgPath+"/rat.png" ,imgPath+"/rat.png");
		}
		prize.onload = function(){
			prizeH = prize.height;
			prizeW = prize.width;
		}
	});

var canvas = document.getElementById('canvas'),
	  context = canvas.getContext('2d'),
	  gW = $(window).width()*588/640,
	  gH = $(window).width()*1008/640,
	  scaleN = $(window).width()/640,
	  xspeed = 3,
	  yspeed = 4,
	  flag=0,
	  flagY = 0;
var sd=  860;
var stepAnimation=0;
var iframe=1;
var difficulty=parseInt(mc.resource.difficulty);
var difficult=parseInt(mc.resource.difficult);
var showMarkT=0;
var response = function(){
	scaleN = $(window).width()/640;
	var middle=($(window).width()-100)/2;
	var middleH=$(window).height()*0.3;
	$("#score").css({"right":0 +'px',"top":55*scaleN +'px',"font-size":42*scaleN +'px'});
	$("#timeLefted").css({"left":0 +'px',"top":55*scaleN +'px',"font-size":42*scaleN +'px'});
	$("#all_score").css({"left":middle +'px',"top":55*scaleN +'px',"font-size":42*scaleN +'px'});
	$("#markbox").css({"left":0 +'px',"top":middleH +'px',"right":0 +'px'});
	
	context.canvas.width  = gW ;
	context.canvas.height = gH;
	
	setXAndY(Monkey1,554-sd,665);
	setXAndY(MonkeyN,554,665);
	setXAndY(Rat1,143-sd,678);
	setXAndY(RatN,143,678);
	setXAndY(Tiger1,356-sd,668);
	setXAndY(TigerN,356,668);
	setXAndY(Prize1,800-sd,680);
	setXAndY(PrizeN,800,680);
	
	RatN.scaleN = TigerN.scaleN = MonkeyN.scaleN = PrizeN.scaleN =Monkey1.scaleN=Tiger1.scaleN =Rat1.scaleN = Prize1.scaleN =JoinN.scaleN =SmallJN.scaleN=ZhuaziFN.scaleN=ZhuabingN.scaleN=scaleN;
	setPositionAndScale(".zwwI_container .bg",".zwwI_container .fb",720,140,354,640,1008);
	$(".layout").css({"height":$(window).height()+'px'});
	$(".win_box").css({top:178*scaleN,width:583*scaleN,left:30*scaleN});
	$(".fail_box").css({top:178*scaleN,width:583*scaleN,left:30*scaleN});
	$(".xuanyao_box").css({top:16*scaleN,width:605*scaleN,left:35*scaleN});
	$(".win_box .delete").css({width:38*scaleN,top:36*scaleN,left:526*scaleN})
	$(".fail_box .delete").css({width:38*scaleN,top:36*scaleN,left:526*scaleN})
	$(".win_box .info").css({height:34*scaleN,top:124*scaleN,left:0,'font-size':34*scaleN,'letter-spacing':3*scaleN});
	$(".fail_box .info").css({height:34*scaleN,top:124*scaleN,left:0,'font-size':34*scaleN,'letter-spacing':3*scaleN});
	$(".win_box .award_des").css({height:34*scaleN,top:170*scaleN,left:0,'font-size':34*scaleN,'letter-spacing':3*scaleN});
	$(".fail_box .award_des").css({height:34*scaleN,top:170*scaleN,left:0,'font-size':34*scaleN,'letter-spacing':4*scaleN});
	$(".win_box .tigerLayout").css({width:141*scaleN,top:257*scaleN,left:221*scaleN});
	$(".fail_box .unluck").css({width:215*scaleN,top:237*scaleN,left:181*scaleN});
	$(".win_box .xuanyao").css({width:214*scaleN,top:479*scaleN,left:60*scaleN});
	$(".fail_box .share").css({width:214*scaleN,top:479*scaleN,left:60*scaleN});
	$(".win_box .restart").css({width:214*scaleN,top:479*scaleN,left:310*scaleN});
	$(".fail_box .restart").css({width:214*scaleN,top:479*scaleN,left:310*scaleN});
}
function drawFrame() {
	finish();
	flagIntval = window.requestAnimationFrame(drawFrame, canvas);
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(flag==1){
		yspeed = 4;
	}else{
		yspeed = 0;
	}
	if(stepAnimation>0){
		if(stepAnimation % 20==0)iframe++;
		if(iframe == 1){
			prize.src = MCRSC.getImage( resUrl+mc.resource.imgAudio[3] ,resUrl+mc.resource.imgAudio[3]);
		}else{
			prize.src = MCRSC.getImage( resUrl+mc.resource.imgHitAudio[3] ,resUrl+mc.resource.imgHitAudio[3]);
		}
		stepAnimation++;
		if(iframe>2)iframe=1;
		if(stepAnimation>100)stepAnimation=1;
	}
	if(showMarkT==0){
		$("#markbox").hide();
	}else if(showMarkT>0 && showMarkT<50){
		$("#markbox").show();
		showMarkT++;
	}else{
		showMarkT=0;
	}
	if(flagY ==0){//组件下降
		JoinN.height +=yspeed;
		if(JoinN.height>=126){
			JoinN.height=126;
		}
		SmallJN.y = 256+JoinN.height-88;
		JoinN.draw(context);
		SmallJN.height +=yspeed;
		if(SmallJN.height>=215){//碰撞瞬间
			SmallJN.height=215;
			flagY = 1;
			SmallJN.draw(context);
			ZhuabingN.y = 266 + SmallJN.height-10 +JoinN.height-88;
			ZhuabingN.draw(context);
			if(!tempArr.length){
				for(var i=0,len=arrAnimals.length;i<len;i++){
					if(Math.abs(arrAnimals[i].x+parseInt(arrAnimals[i].width/2)-297)<=difficult){
						//抓住瞬间
						if(arrAnimals[i].hitSrc!=""){
							if(arrAnimals[i] == RatN || arrAnimals[i] == Rat1){
								rat.src = MCRSC.getImage( resUrl+arrAnimals[i].hitSrc ,resUrl+arrAnimals[i].hitSrc);
							}else if(arrAnimals[i] == TigerN || arrAnimals[i] == Tiger1){
								tiger.src = MCRSC.getImage( resUrl+arrAnimals[i].hitSrc ,resUrl+arrAnimals[i].hitSrc);
							}else if(arrAnimals[i] == MonkeyN || arrAnimals[i] == Monkey1){
								monkey.src = MCRSC.getImage( resUrl+arrAnimals[i].hitSrc ,resUrl+arrAnimals[i].hitSrc);
							}else{
								prize.src = MCRSC.getImage( resUrl+arrAnimals[i].hitSrc ,resUrl+arrAnimals[i].hitSrc);
							}
						}
						//console.log(arrAnimals[i].mark);
						obj.x = arrAnimals[i].x;
						obj.y = arrAnimals[i].y;
						obj.i = i+1;
						tempArr.unshift(obj);
					}
				}
			}
		}else{
			SmallJN.draw(context);
			ZhuaziFN.y = 266 + SmallJN.height-10 +JoinN.height-88;
			ZhuaziFN.draw(context);
		}
	}else{//组件上升的过程
		JoinN.height -=yspeed;
		if(JoinN.height<=88){
			JoinN.height=88;
		}
		SmallJN.y = 256+JoinN.height-88;
		JoinN.draw(context);
		SmallJN.height -=yspeed;
		if(SmallJN.height<=10){
			SmallJN.height=10;
			flag = 0;
			flagY = 0;
		}
		SmallJN.draw(context);
		ZhuabingN.y = 266 + SmallJN.height-10 +JoinN.height-88;
		ZhuabingN.draw(context);
		if(SmallJN.height>10){//娃娃上升过程中
			if(!!tempArr[0]){
				if(!!tempArr[0].i){
					var arr_index = tempArr[0].i-1;
					if(arrAnimals[arr_index].y!=-500){
						arrAnimals[arr_index].y = 450 + SmallJN.height-10 +JoinN.height-88;
						arrAnimals[arr_index].draw(context);
						for(var j=0,len=arrAnimals.length;j<len;j++){
							if(j!=arr_index) setX(arrAnimals[j],context,xspeed);
						}
						tempArr[0].x +=xspeed;
						return false;
					}
				}
			}
		}
		if(SmallJN.height<=10){
			if(!!tempArr[0]){
				if(!!tempArr[0].i){//抓住了
					var arr_index = tempArr[0].i-1;
					if(arrAnimals[arr_index].y!=-500){
						var RoleMark=parseInt(arrAnimals[arr_index].mark);
						var music_id="muisc_good";
						switch(arrAnimals[arr_index]){
							case RatN:
							case Rat1:
								rat.src = MCRSC.getImage( resUrl+arrAnimals[arr_index].normalSrc ,resUrl+arrAnimals[arr_index].normalSrc);
							break;
							case TigerN:
							case Tiger1:
								tiger.src = MCRSC.getImage( resUrl+arrAnimals[arr_index].normalSrc ,resUrl+arrAnimals[arr_index].normalSrc);
							break;
							case MonkeyN:
							case Monkey1:
								monkey.src = MCRSC.getImage( resUrl+arrAnimals[arr_index].normalSrc ,resUrl+arrAnimals[arr_index].normalSrc);
							break;
							case PrizeN:
							case Prize1:
								if(aboutLuckyNum()){
									RoleMark=parseInt("-"+arrAnimals[arr_index].markD);
									music_id="muisc_bad";
								}
								prize.src = MCRSC.getImage( resUrl+arrAnimals[arr_index].normalSrc ,resUrl+arrAnimals[arr_index].normalSrc);
							break;
						}
						score=score+RoleMark;
						document.getElementById(music_id).play();
						var tempHtml="";
						if(RoleMark>=0){
							tempHtml="<img src='"+imgPath+"/num/+.png'/>";
						}else{
							tempHtml="<img src='"+imgPath+"/num/-.png'/>";
						}
						var _rolemark=(Math.abs(RoleMark)).toString();
						for(i=0;i<_rolemark.length;i++){
							tempHtml+="<img src='"+imgPath+"/num/"+_rolemark.substring(i,i+1)+".png'/>";
						}
						$("#markbox").html(tempHtml).show();
						showMarkT++;
						countMonkey++;
						$("#score").html(score);
						for(var j=0,len=arrAnimals.length;j<len;j++){
							if(j==arr_index) arrAnimals[j].y=-500;
						}
						return false;
					}	
				}
			}
		}
	}
	if(!!tempArr.length){
		for(var z=0,lenz=tempArr.length;z<lenz;z++){
			if(!!tempArr[z].i){
				tempArr[z].x +=xspeed;
				if(tempArr[z].x>=sd){
					tempArr[z].x=-sd;
				}
			}
		}
	}
	if(!!tempArr.length){
		if(tempArr[tempArr.length-1].x<0){
			var obj1 = tempArr[tempArr.length-1];
			for(var j=0,len=arrAnimals.length;j<len;j++){
				if(j==obj1.i -1) {
					arrAnimals[j].y = tempArr[tempArr.length-1].y;
					arrAnimals[j].x = tempArr[tempArr.length-1].x;
				}else{
					setX(arrAnimals[j],context,xspeed);
				}
			}
			tempArr.pop();
			return false;
		}
	}
	setX(RatN,context,xspeed);
	setX(Rat1,context,xspeed);
	setX(TigerN,context,xspeed);
	setX(Tiger1,context,xspeed);
	setX(MonkeyN,context,xspeed);
	setX(Monkey1,context,xspeed);
	setX(PrizeN,context,xspeed);
	setX(Prize1,context,xspeed);
}
function setXAndY(ele,x,y){
	ele.x = x;
	ele.y = y;
}
function setX(ele,context,xspeed){
	ele.x += xspeed;
	if(ele.x >=sd){
		ele.x=-sd;
	}
	ele.draw(context);
}
function startGame(event){
	flag=1;
}
function aboutLuckyNum(){
	var a=parseInt(Math.random()*10);
	if(a<=5){
		return 1;
	}else{
		return 0;
	}
}
window.onload = response();
document.getElementById("game_").onclick = startGame;
document.getElementById("game_").addEventListener('touchstart',startGame , false);