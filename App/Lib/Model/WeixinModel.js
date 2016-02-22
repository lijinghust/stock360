module.exports = Model(function(){
	"use strict";
	return {
		getWeixinList: function(offset,count){
			if(offset == undefined){
				offset = 0;
			}
			if(count == undefined){
				count = 10;
			}
			return D("weixin").limit(offset,count).select();
		},
		addWeixin: function(data){
			return D('weixin').add(data);
		}
	};
});