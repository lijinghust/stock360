/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController",function(){
	"use strict";
	return {
		indexAction: function(){
			var self = this;
			return D("weixin").getWeixinList().then(function(data){
				self.assign("weixinList",data);
				self.display();
			});
		}
	};
});