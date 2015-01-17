module.exports = Model(function(){
	'use strict';
	return {
		addStock: function(data){
			return D('stock').add(data);
		},
		deleteStock: function(id){
			return D('stock').where({id:id}).delete().then(function(affectRows){
				console.log(affectRows);
			});
		},
		getStock: function(id){
			return D('stock').where({id:id}).select();
		},
		getStocksByUser: function(user){
			return D('stock').where({author:user}).order("create_time desc").select();
		},
		getStocksLatestList: function(offset,count){
			if(offset == undefined){
				offset = 0;
			}
			if(count == undefined){
				count = 50;
			}
			return D('stock').limit(offset,count).select();
		},
		// 点赞
		updateStockFavour: function(id){
			var self = this;
			return D('stock').where({id:id}).updateInc("favour");
		}
	};
});