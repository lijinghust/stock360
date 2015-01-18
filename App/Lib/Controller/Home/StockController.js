/**
 * controller
 * @return 
 */
var moment = require("moment");
var conf_stock_type = require(CONF_PATH + "/stock_type.js");

module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	var self = this;
      //render View/Home/index_index.html file
      return D("stock").getStocksLatestList().then(function(d){
      	self.assign('stockList',d);
        self.assign('stockTypeConf',conf_stock_type);
      	self.display();
      });
    },
    detailAction: function(){
      var self = this;
      var id = this.get("id");
      D("stock").getStock(id).then(function(d){
        var data = d[0];
        data.create_time = moment(data.create_time).format("YYYY-MM-DD HH:mm");
        data.type = conf_stock_type[data.type];

        self.assign("stockInfo",data);
        self.display();
      });
    },
    // 点赞
    _favourAction: function(){
      var self = this;
      var id = this.post("id");
      return D("stock").updateStockFavour(id).then(function(data){
        return self.success(data);
      })
    }
  };
});