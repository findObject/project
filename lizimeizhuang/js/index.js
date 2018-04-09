/*搜索框 jsonp*/
 
$("#find_txt").keyup(function(){
	var sc = create("script");
	document.body.appendChild(sc);
	sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$("#find_txt").val()+"&cb=fn"
})
function fn(res){
	var arr = res.s;
	var str = "";
	for(var i = 0; i < arr.length; i ++){
		str += `<li><a href="https://www.baidu.com/s?wd=${arr[i]}">${arr[i]}</a></li>`;
	}
	$("#find_box").html(str);
}



/*导航栏滑动*/
$(".first").hover(function(){
	//alert(55)
	$(".connect").css("display", "block");
}, function(){
	$(".connect").css("display", "none");
})
$(".connect").hover(function(){

	$(this).css("display", "block");
	var $aList = $(".connect").find("a").not("h2 a");
	//console.log($aList);
	for(var i = 0; i < $aList.size(); i ++){
		$aList.eq(i).hover(function(){
			$(this).css("color", "red");
		},function(){
			$(this).css("color", "");
		})
	}
}, function(){
	$(this).css("display", "none");
})

$(".nav_con").find("a").mouseover(function(){
	$(this).css("backgroundColor", "" )
})

$(".connect li").not(".right li").hover(function(){
	//console.log(45);
	$(this).css("background", "#ddd");
}, function(){
	$(this).css("background", "");
})





/*导航划过 背景色变*/
$(".nav_con a").not(".first").hover(function(){
	$(this).css("background","#041e38");
},function(){
	$(this).css("background","");
})


/*导航吸顶效果*/
$(window).scroll(function(){
	var scrollTop = $(document).scrollTop();
	var topHeight = parseInt($("#search").css("height")) + parseInt($("#top_bar").css("height"));
	if(scrollTop > topHeight){
			$("#nav").css({
				"position" : "fixed",
				"top" : 0
			})
			$(".connect").css("top", "42px");
		}else{
			$("#nav").css({
				"position" : "static"
			})
			$(".connect").css("top", "165px");
		}
})
/*轮播图效果*/
	$("#slideshow").hover(function(){
		$("#arr").css("display", "block");
	}, function(){
		$("#arr").css("display", "none");
	})
	var slideshow_timer = setInterval(autoPlay, 2000);
	var sideshow_index = 0;
	var $img_list = $("#img li");
	var $bottom_list = $("#bt li");
	function autoPlay(){
		sideshow_index ++;
		if(sideshow_index == $bottom_list.size()){
			sideshow_index = 0;
		}
		$bottom_list.eq(sideshow_index).addClass("current").siblings().removeClass("current");
        $img_list.eq(sideshow_index).animate({left : 0}, 1500, function(){
            $(this).css("zIndex", 0).siblings().css({"zIndex" : 1, "left" : 1349});
        })
	}


/*楼梯效果*/
var floor_list = document.getElementsByClassName("floor_li");
var floor_box = document.getElementsByClassName("floor_box");
window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop > 640){
		$id("floor").style.display = "block";
	}else{
		$id("floor").style.display = "none";
	}
	for(var i = 0; i < floor_box.length; i ++){
		if(Math.abs(floor_box[i].offsetTop - scrollTop) < floor_box[i].ofsetHeight / 2){
			//floor_list[i].style.backgroundColor = "#ff666b";
		}else{
			//floor_list[i].style.backgroundColor = "#ddd";
		}
	}
}

