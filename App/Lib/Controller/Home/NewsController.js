/**
 * controller
 * @return 
 */
var Pager = require(COMMON_PATH + '/navigator.js');
var cheerio = require('cheerio');

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

				var newsList = [];
				for(var i = 0, len = data.data.length;i<len; i++){
	                var news = data.data[i];
	                var $ = cheerio.load(news.content,{decodeEntities:false});
	                news.content = $('p').text().slice(0,80) + '...';
	                // console.log($('*').text());
	                newsList.push(news);
	            }
				self.assign('newsList', newsList);
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