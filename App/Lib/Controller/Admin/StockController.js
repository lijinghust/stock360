/**
 * controller
 * @return 
 */
module.exports = Controller("Admin/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      var self = this;
      return D('stock').field().select().then(function(data){
      	// console.log(data);
      	self.assign('stocks',data);
      	self.display();
      });
    },
    addAction: function(){
    	this.display();
    },
    _addAction: function(){
      var data = this.post();
      data.author = this.userInfo.email;
      data.create_time = (new Date()).toLocaleString();
      return D('stock').addStock(data).then(function(d){
        // console.log(d);
      });
    },
    listAction: function(){
      
    },
  };
});