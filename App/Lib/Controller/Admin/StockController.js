/**
 * controller
 * @return 
 */
var conf_stock_type = require(CONF_PATH + '/stock_type.js');
var conf_stock_star = require(CONF_PATH + '/stock_star.js');
var util = require('utility');

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
      this.assign('conf_stock_type', conf_stock_type);
      this.assign('conf_stock_star', conf_stock_star);
    	this.display();
    },
    _addAction: function(){
      var self = this;
      var data = this.post();
      // console.log(data);
      // return;
      data.author = this.userInfo.email;
      data.create_time = util.YYYYMMDDHHmmss();
      return D('stock').addStock(data).then(function(d){
        // console.log(d);
        self.success(d);
      });
    },
    listAction: function(){
      
    },
  };
});