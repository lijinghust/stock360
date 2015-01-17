;(function($,undefined){
	var data = {
		map : {},
		order : []
	}
	window.data = data;
	var localName = "stock_list";
	var sync2Local = function(){
		var data2Local = [];
		for(var i = 0,len = data.order.length; i < len; i++){
			var item = data.map[data.order[i]];
			data2Local.push(item);
		}
		var obj = {
			value : data2Local,
			lastUpdate : +new Date()
		};
		localStorage.setItem(localName, JSON.stringify(obj));
	}
	var saveItem = function(obj){
		data.order.unshift(obj.key); // 将元素加在数组开头，后添加的排在最前
		data.map[obj.key] = obj;
		sync2Local();
	}
	var editItem = function(obj){
		data.map[obj.key]['remark'] = obj.remark;
		sync2Local();
	}
	var removeItem = function(key){
		var position = $.inArray(key, data.order);
		if(position != -1){
			delete data.map[key];
			data.order.splice(position, 1);
		}
		sync2Local();
	}
	/* 排序 */ 
	var sortItem = function(queue){
		if($.isArray(queue)){
			if(queue.join("") == data.order.join("")){
				return false;
			}
			data.order = queue;
			sync2Local();

			return true;
		}
		return false;
	}
	function getLocalData(){
		var data = localStorage.getItem(localName);
		var arrData = [];
		if(data){
			try{
				var obj = JSON.parse(data);
				arrData = obj && obj.value;
			}catch(e){

			}
		}
		return arrData;
	}
	// 初始化数据
	(function(){
		var arr = getLocalData();
		arr.forEach(function(item,index){
			data.order.push(item.key);
			data.map[item.key] = item;
		});
	})();
	var LocalData = {
		name : "stock_list",
		add : function(obj, cb){
			if(obj){
				saveItem(obj);
				cb && cb();
			}
		},
		remove : function(key, cb){
			if(key){
				removeItem(key);
				cb && cb();
			}
		},
		edit : function(obj,cb){
			if(obj.key && obj.remark != undefined){
				editItem(obj);
			}
			cb && cb();			
		},
		getAll : function(cb){
			var res = [];
			data.order.forEach(function(item,index){
				var obj = data.map[item];
				res.push(obj);
			});
			if(cb){
				cb(res);
				return;
			}
			return res;
		},
		getKeys : function(){
			return data.order;
		},
		num : function(){
			return data.order.length;
		},
		isExist : function(key){
			if($.inArray(key, data.order) != -1){
				return true;
			}
			return false;
		},
		sort : function(queue,cb){
			var sort = sortItem(queue);
			
			if(sort){
				cb && cb();
			}
		}
	}

	window.LocalData = LocalData;
})(jQuery);

;(function($,undefined){
	var sTplList = ['<li id="{key}">',
						'<span class="top" title="置顶">置顶</span>',
						'<span class="name"><a target="_blank" href="http://stockhtm.finance.qq.com/sstock/ggcx/{code}.shtml">{name}({code})</a></span>',
						'<span class="price">--</span>',
						'<span class="grow">--</span>',
						'<span class="hands">--</span>',
						'<span class="remark {remarkFlag}" title="{remark}">加备注</span>',
						'<a href="#" class="delete" data-key="{key}">X</a>',
					'</li>'].join("");	
	var Stock = {
		name : LocalData.name,
		timerSort : null,
		_renderStockStruct : function(obj){
			var self = this;
			var dataList = obj ? [].concat(obj) : LocalData.getAll();

			var sHtml = '';
			dataList.forEach(function(item){
				var itemObj = $.extend({},item);
				itemObj.code = itemObj.key.slice(2);
				itemObj.remarkFlag = itemObj.remark ? "remarked" : "";
				sHtml += tmpl(sTplList,itemObj);
			});
			return sHtml;
		},
		// 请求数据
		_loadStockData : function(key,callback){
			var url = 'http://qt.gtimg.cn/?q=' + key + '&_t=' + (+new Date());

			ajax(url,function(res){
				// var ret = new Function('return ' + res)();
				var arrRet = res.trim().split(";");
				var obj = {};
				arrRet.forEach(function(item, index){ 
					var arr = item.trim().split("="); // trim是要把回车干掉
					if(arr.length > 1){
						obj[arr[0]] = arr[1].replace('"','');
					}
				})	
				
				var data = {};
				for(var key in obj){
					var arr = obj[key].split("~");
					var temp = {
						key : key,
						name : arr[1],
						code : arr[2],
						price : arr[3],
						growRate : arr[32] + '%',
						hands : (arr[38] ? arr[38] : '0.00') + '%',
						className : ''
					}
					if(arr[3] == '0.00'){
						temp.price = "停牌";
						temp.growRate = '--';
						temp.hands = '--';
					} 
					if(parseFloat(temp.growRate) > 0){
						temp.className = 'increase';
					}else if(parseFloat(temp.growRate) < 0){
						temp.className = 'reduce';
					}
					data[key] = temp;
				}

				callback(data);
			})
		},
		addStock : function(queryObj){
			var self = this;
			if(LocalData.isExist(queryObj.key)){
				alert('已在自选股中');
				return;
			}
			var obj = $.extend({}, queryObj);

			this.addStockData(obj.key);

			LocalData.add(queryObj);
		},
		sortStock : function(cb){
			var self = this;
			var queue = [];
			$('.zxg-list li').each(function(index,item){
				if(!item.id){
					return;
				}
				queue.push(item.id);
			})
			
			LocalData.sort(queue,function(){
				$(".tipStock").show();
				clearTimeout(self.timerSort);
				self.timerSort = setTimeout(function(){
					$(".tipStock").hide();
				},1000);

				cb && cb();
			});
		},
		addStockData : function(key){
			this._loadStockData(key,function(res){
				var obj = res['v_' + key];
				obj.key = key;
				var sHtml = tmpl(sTplList,obj);

				$('#zxg .zxg-list').prepend(sHtml);
			});
		},
		updateStockData : function(cb){
			var keys = LocalData.getKeys();

			this._loadStockData(keys.join(","),function(res){
				var $els = $("#zxg .zxg-list li");
				$els.each(function(index,item){
					var key = item.id;
					var obj = res['v_' + key];
					var item = $(item);
					if(!item.attr("id")){
						return;
					}
					if(item == undefined || item.find(".price") == undefined){
						console.log(item)
					}
					item.find(".price").html(obj.price).removeClass('increase','reduce').addClass(obj.className);
					item.find(".grow").html(obj.growRate).removeClass('increase','reduce').addClass(obj.className);
					item.find(".hands").html(obj.hands);
				});

				cb && cb();
			});
		},
		initDom : function(){
			var sHtml = this._renderStockStruct();
			$('#zxg .zxg-list').html(sHtml);
			
			this.updateStockData(function(){
				$("#zxg .loading").hide();
			});
		},
		/* 备注 */
		remark : function(info,cb){
			LocalData.edit(info,cb);
		},
		_bindEvent : function(){
			var self = this;
			$("#zxg").delegate(".delete","click",function(e){
				e.preventDefault();
				var $el = $(this);
				var key = $el.attr("data-key");
				LocalData.remove(key, function(){
					$el.closest("li").remove();
					console.log("success");
				});
			}).delegate(".remark","click",function(e){
				// 添加备注
				var key = $(this).parents("li").attr("id");
				var name = $(this).prevAll(".name").html();
				var price = $(this).prevAll(".price").html();
				var $formRemark = $(".remark-form");
				$formRemark.show().find("#remark-key").val(key)
					.end().find(".name").html(name)
					.end().find(".price").html(price)
					.end().find("#remark").html($(this).attr("title"));				
				$(".mask").show();
			});
			$(".remark-form").delegate(".close","click",function(e){
				$(e.delegateTarget).hide();
				$(".mask").hide();
			}).delegate(".btn","click",function(e){
				var key = $("#remark-key").val().trim();
				var remark = $("#remark").val().trim();

				self.remark({key:key,remark:remark},function(){
					$(".mask").hide();
					$(e.delegateTarget).hide();

					var $remark = $("#"+key).find(".remark");
					if(remark == ""){
						$remark.removeClass("remarked");
					}else{
						$remark.addClass("remarked").attr("title",remark);
					}
				});
			});
			/* 走势图 */
			var timerTrend = null;
			$(".zxg-list").delegate("li .name","mouseenter",function(e){
				$el = $(this);
				var $parent = $el.parents("li");
				
				var code = $parent.attr("id").slice(2);
				timerTrend = setTimeout(function(){
					var style = '';
					if($parent.height()+$parent.position().top+80>$(".zxg-bd").height()){
						style = ' style="top:-82px"';
					}
					var str = '<div class="trendImg"' + style + '><img src="http://img2.gtimg.cn/images/hq_parts_little4/hushen/stocks/'+code+'.png?'+Math.random()+'" alt="" /></div>';
					$el.append(str);					
				},500);
			}).delegate("li .name","mouseleave",function(e){
				clearTimeout(timerTrend);
				$(this).find(".trendImg").remove();
			});
			$(".zxg-list").delegate("li","mouseenter",function(e){
				$(this).addClass('hover');
			}).delegate("li",'mouseleave',function(e){
				$(this).removeClass('hover');
			}).delegate(".top","click",function(e){
				$(this).parents("li").prependTo(e.delegateTarget);
				self.sortStock();
			});

			/* 拖拽排序 */
			$( ".zxg-list" ).sortable({
				placeholder: "ui-state-highlight",
				activate : function(event,ui){
					ui.item.removeClass('hover');
				},
				deactivate : function(event,ui){      	
					self.sortStock();
				}
			});
			$( ".zxg-list" ).disableSelection();
		},
		init : function(){
			this.initDom();
			this._bindEvent();
		}
	};

	Stock.init();

	var timer = null;
	function startRender(){
		clearInterval(timer);
		timer = setInterval(function(){
			Stock.updateStockData();
		},1000);		
	}
	startRender();

	window.LocalData = LocalData;
	window.Stock = Stock;
})(jQuery)