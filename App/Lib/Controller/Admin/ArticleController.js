/**
 * controller
 * @return 
 */
module.exports = Controller('Admin/BaseController',function(){
	'use strict';
	var utils = require('utility');

	return {
		indexAction: function(){
	      //render View/Home/index_index.html file
	      var self = this;
	      return D('article').field().select().then(function(data){
	      	// console.log(data);
	      	self.assign('articles',data);
	      	self.display();
	      });
	    },
	    addAction: function(){
	    	this.display();
	    },
	    _addAction: function(){
	      var self = this;
	      var data = this.post();
	      console.log(data);
	      // return;
	      data.pub_time = utils.YYYYMMDDHHmmss();
	      return D('article').addArticle(data).then(function(d){
	        // console.log(d);
	        self.success(d);
	      });
	    },
	};
});