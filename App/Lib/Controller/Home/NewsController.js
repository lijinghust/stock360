/**
 * controller
 * @return 
 */
var Pager = require(COMMON_PATH + '/navigator.js');

module.exports = Controller("Home/BaseController",function(){
	"use strict";
	return {
		indexAction: function(){
			var self = this;
			var page = self.get("page") || 1;
			return D('news').getNewsList(page).then(function(data){
				var pager = new Pager(data,'/news').render('上一页', '下一页', 3, '...', {
					currentClass: 'active'
				});
				self.assign('pager_html',pager);
				self.assign('data',data.data);
				self.display();
			});
		},
		detailAction: function(){
			var self = this;
			var id = self.get("id");
			return D('news').getNewsById(id).then(function(data){
				self.assign('data', data);
				self.display();
			});
		}
	};
});