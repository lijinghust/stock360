/**
 * controller
 * @return 
 */
var Pager = require(COMMON_PATH + '/navigator.js');
var cheerio = require('cheerio');
var utils = require('utility');

module.exports = Controller("Home/BaseController",function(){
	"use strict";
	return {
		indexAction: function(){
			var self = this;
			var page = self.get("page") || 1;
			return D('article').getArticleList(page).then(function(data){
				var pager = new Pager(data,'/article').render('上一页', '下一页', 3, '...', {
					currentClass: 'active'
				});
				self.assign('pager_html',pager);

				var articleList = [];
				for(var i = 0, len = data.data.length;i<len; i++){
	                var article = data.data[i];
	                var $ = cheerio.load(article.content,{decodeEntities:false});
	                article.content = $('p').text().slice(0,80) + '...';
	                // console.log($('*').text());
	                articleList.push(article);
	            }
				self.assign('articleList', articleList);
				self.display();
			});
		},
		detailAction: function(){
			var self = this;
			var id = self.get("id");
			return D('article').getArticleById(id).then(function(data){
				data.pub_time = utils.YYYYMMDDHHmmss(data.pub_time);
				self.assign('data', data);
				self.display();
			});
		}
	};
});