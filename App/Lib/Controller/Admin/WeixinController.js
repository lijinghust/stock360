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
      D('weixin').field().select().then(function(data){
      	// console.log(data);
      	self.assign('weixins',data);
      	self.display();
      });
    },
    addAction: function(){
    	this.display();
    },
    _addAction: function(){
      var data = this.post();
      data.create_time = (new Date()).toLocaleString();
      // console.log((new Date()).toLocaleString());
      // console.log(data);
      return D('weixin').addWeixin(data).then(function(d){
        // console.log(d);
      });
    },
  };
});