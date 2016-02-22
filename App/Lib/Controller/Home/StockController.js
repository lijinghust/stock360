/**
 * controller
 * @return 
 */
var moment = require("moment");
var conf_stock_type = require(CONF_PATH + "/stock_type.js");
var cheerio = require('cheerio');
var regConf = require(CONF_PATH + '/reg.js');

module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
    	var self = this;
      //render View/Home/index_index.html file
      var date = this.get('date');
      var model = null;
      if(date){
        model = D('stock').getStocksByDate(date);
      }else{
        model = D('stock').getStocksLatestList();
        date = moment().format("YYYY-MM-DD");
      }
      return model.then(function(d){
        // console.log(d);
        var stockList = [];
        for(var i = 0, len = d.length; i < len; i++){
          var stock = d[i];
          var $ = cheerio.load(stock.reason,{decodeEntities:false});
          stock.reason = $('p').text().replace(regConf.blank, '').slice(0,70) + '...';
          stockList.push(stock);
        }
        self.assign('date', date);
      	self.assign('stockList',stockList);
        self.assign('stockTypeConf',conf_stock_type);
      	self.display();
      });
    },
    detailAction: function(){
      var self = this;
      var id = this.get("id");
      return D("stock").getStock(id).then(function(d){
        var data = d[0];
        data.create_time = moment(data.create_time).format("YYYY-MM-DD HH:mm");
        data.type = conf_stock_type[data.type];

        self.assign("stockInfo",data);
        self.display();
      });
    },
    historyAction: function(){
      var self = this;
      return D('stock').getStocksHistory().then(function(data){
        var dateList = [];
        // console.log(data)
        for(var item in data){
          // console.log(data[item])
          var date = moment(data[item].date).format("YYYY-MM-DD");
          dateList.push(date);
        }
        console.log(dateList)
        self.assign("dateList",dateList);
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