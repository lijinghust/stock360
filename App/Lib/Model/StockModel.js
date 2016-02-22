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
		/* 获取最近一期的股票数据 */
		getStocksLatestList: function(offset,count){
			if(offset == undefined){
				offset = 0;
			}
			if(count == undefined){
				count = 50;
			}
			return D('stock').distinct('date').order('date desc').find().then(function(d){
				var latestDate = util.YYYYMMDD(d['date']);
				return D('stock').where({date:latestDate}).select();
			})
		},
		/* 按照日期获取股票数据 */
		getStocksByDate: function(date){
			if(!date){
				date = util.YYYYMMDD();
			}
			return D('stock').where({date:date}).select();
		},
		/* 获取共有多少期股票数据 */
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