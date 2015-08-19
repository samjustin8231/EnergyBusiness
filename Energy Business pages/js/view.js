// JavaScript Document

//win
	//removeTip
function removeWinTip(obj){
	$(obj).keydown(function(){
		$(this).parent(".win-text").removeClass("showTips");
	});
}
	//closeWin
function closeWin(){
	$(".win-close").click(function(){
		$(this).parents(".win").hide();
	});
}

//tab
function tabCnt(){
	$(".box-tab").find("li").click(function(){
		var $me = $(this);
		var myIndex = $me.index();
		$me.addClass("on").siblings("li").removeClass("on");
		$me.parent("ul").next(".box-cnt").find(".cntBox:eq("+myIndex+")").show().siblings(".cntBox").hide();
	});
	$("#mainNav").find("li").mouseover(function(){
		$(this).find(".menu").show();
		$(this).siblings("li").find(".menu").hide();
	}).mouseleave(function(){
		$(this).find(".menu").hide();
	});
}

var $menuTitle = $("#menu-title");
//menu
function menu(){
	$(".menu").find("a").click(function(){
		var $me = $(this);
		$me.parents("li").addClass("on").siblings("li").removeClass("on");
		$menuTitle.text($me.text());
		$me.parents(".menu").hide();
	});
}

var $childLi = $(".child-menu").find("li");
//childMenu
function childMenu(){
	$childLi.click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		$.ajax({
			//加载底部数据
		});
	});
}

var $leftClList = $(".left-cl > li > span"),
	$leftChildList = $(".left-cl > li li");
function leftCl(){
	$leftClList.click(function(){
		var $me = $(this);
		if($me.parent("li").hasClass("on")){
			$me.parent("li").removeClass("on");
			$me.next("ul").hide();
		} else {
			$me.parent("li").addClass("on");
			$me.next("ul").show();
		}
	});
	$leftChildList.click(function(){
		var $me = $(this);
		if($me.hasClass("on")){
			$me.removeClass("on").find("input").prop("checked",false);
		} else {
			$me.addClass("on").find("input").prop("checked",true);
			$.ajax({
				//加载右侧数据
			});
		}
	});
}

var $addToDiy = $(".module .box.cl > ul > li li em");
function addDiy(){
	$addToDiy.click(function(){
		var $me = $(this);
		if($me.hasClass("added")){
			//移出自选菜单
		} else {
			//加入自选菜单
		}
	});
}

var $selectArr = $(".select").find("i"),
	$selectLi =  $(".select").find("li");
function selectControl(){
	$selectArr.click(function(){
		$(this).next("ul").slideToggle(200);
	});
	$selectLi.click(function(){
		var $meText = $(this).text();
		$(this).parents(".select").find("span").text($meText);
		$(this).parent("ul").slideUp(200);
	})
}

$(function(){
	menu();
	childMenu();
	leftCl();
	tabCnt();
	addDiy();
	selectControl();
	
	var winText = $(".win").find("input");
	removeWinTip(winText);
	closeWin();
	
	$("#loginShow").click(function(){
		$("#loginWin").show().siblings(".win").hide();
	});
	$("#trialShow").click(function(){
		$("#trialWin").show().siblings(".win").hide();
	});
	$("#registerShow").click(function(){
		$("#registerWin").show().siblings(".win").hide();
	});
});