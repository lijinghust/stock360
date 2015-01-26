var util = require('utility');

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
			return D('stock').distinct('date').order('date desc').find().then(function(d){
				// console.log('+++++++++++++++')
				// console.log(util.YYYYMMDD(d['date']));
				// console.log('-------------')
				var latestDate = util.YYYYMMDD(d['date']);
				return D('stock').where({date:latestDate}).select();
			})
			// return D('stock').limit(offset,count).select();
		},
		getStocksHistory: function(){
			return D('stock').distinct('date').order('date desc').select();
		},
		// 点赞
		updateStockFavour: function(id){
			var self = this;
			return D('stock').where({id:id}).updateInc("favour");
		}
	};
});