module.exports = Model(function(){
	'use strict';
	return {
		addNews: function(data){
			var where = {
				title: data.title
			};
			return D('news').thenAdd(data, where, true);
		},
		getNewsList: function(page){
			return D('news').order('create_time desc').page(page,20).countSelect().then(function(data){
				return data;
			});
		},
		getNewsById: function(id){
			return D('news').where({id:id}).find();
		},
		getNewsByOriginUrl: function(url){
			return D('news').where({origin_url:url}).find();
		}
	};
});