module.exports = Model(function(){
	'use strict';
	return {
		addArticle: function(data){
			var where = {
				title: data.title
			};
			return D('article').thenAdd(data, where, true);
		},
		getArticleList: function(page){
			return D('article').order('pub_time desc').page(page,20).countSelect().then(function(data){
				return data;
			});
		},
		getArticleById: function(id){
			return D('article').where({id:id}).find();
		}
	};
});