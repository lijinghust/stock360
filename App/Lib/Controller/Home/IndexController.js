/**
 * controller
 * @return 
 */
var stock_type_conf = require(CONF_PATH + "/stock_type.js");
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	var self = this;
      //render View/Home/index_index.html file

      return Promise.all([
        D('stock').getStocksLatestList(),
        D('weixin').getWeixinList()
      ]).then(function(data){
        self.assign('stockTypeConf', stock_type_conf);
        self.assign('stockList', data[0]);
        self.assign('weixinList', data[1]);
        self.assign("http", self.http);
        return self.display();
      });
      
      
    }
  };
});