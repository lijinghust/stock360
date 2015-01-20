;(function($,undefined){
	// var weixinListApi = 'http://6y6y.net/api/weixin/list.php';
	// var stockListApi = 'http://6y6y.net/api/stock/list.php';
	var weixinListApi = 'http://localhost/stock/api/weixin/list.php';
	var stockListApi = 'http://localhost/stock/api/stock/list.php';
	/* 搜索suggest */
	var sug = new Suggest({
		template : {
			item : '<div class="sug-item" data-pre="{0}" data-item="{0}{1}">'+
						'<span class="sug-cont">{1}  {2}  {3}</span>'+
						// '<span class="sug-plus"></span>'+
					'</div>'
		},
		requestUrl : 'http://smartbox.gtimg.cn/s3/?t=all',
		requestQueryKey : 'q',
		requestCallbackKey : 'cb',
		localStorageKey : Stock.name,
		suggestMaxNum: 15,
		submitCallback : function(query){
			var arr = query.split("  ");
			var queryObj = {
				key : arr[0]+arr[1],
				name : arr[2],
				pinyin : arr[3]
			}
			if(LocalData.num() >= 50){
				alert("您的自选股中已经达到50个的上限，请删除一些再添加");
				return;
			}
			Stock.addStock(queryObj);
		},
		isCache : false
	});
	window.TYPE = "financeQQ";

	/* tab切换 */
	$tabs = $(".nav-tabs .tab");
	$tabPanes = $(".tab-content .tab-pane");
	$tabs.on("click",function(e){
		var $el = $(this);
		var curIndex = $tabs.index($el);
		$tabs.each(function(index,item){
			$(item).removeClass("on");
		});
		$el.addClass("on");

		$tabPanes.each(function(index,item){
			$(item).removeClass('on');
		});
		$tabPanes.eq(curIndex).addClass("on");
		$(".loading").hide();

		if($el.attr("data-type") == "weixin"){
			if($(".weixin").attr("data-status") != "ok"){
				$(".loading").prependTo($tabPanes.eq(curIndex)).show();
				var sTpl = ['<li class="item">',
								'<div class="img">',
									'<img src="{img}" alt="{name}">',
								'</div>',
								'<div class="info">',
									'<span class="title">{name}</span>',
									'<span class="intro">{intro}</span>',
								'</div>',
							'</li>'].join("");
				var obj = {
					url : weixinListApi,
					el : $("#weixin"),
					tpl : sTpl
				}
				window.RecoList && RecoList.init(obj,function(){
					$(".weixin").attr("data-status","ok");
					$(".loading").hide();
				});
			}			
		}

		if($el.attr("data-type") == "reco"){
			if($(".stockList").attr("data-status") != "ok"){
				$(".loading").prependTo($tabPanes.eq(curIndex)).show();
				var sTpl = ['<li class="item">',
								'<span class="title">{name}({code})</span>',
								'<span class="rating"><em>{rating}</em></span>',
								'<span class="type">{type}</span>',
								'<span class="topic">{topic}</span>',
								// '<p class="reason">{reason}</p>',
							'</li>'].join("");
				var obj = {
					url : stockListApi,
					el : $(".stockList"),
					tpl : sTpl
				}
				window.RecoList && RecoList.init(obj,function(){
					$(".stockList").attr("data-status","ok");
					$(".stockList .item .rating").each(function(index,item){
						var width = $(item).width();
						var grade = $(item).find("em").html();
						var emWidth = grade * (width / 5);
						$(item).find("em").css("width", emWidth);
					});
					$(".loading").hide();
				});
			}	
		}
	});
	
})(jQuery);

