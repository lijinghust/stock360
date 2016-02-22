/**
 * controller
 * @return 
 */
var stock_type_conf = require(CONF_PATH + "/stock_type.js");
var cheerio = require('cheerio');
var regConf = require(CONF_PATH + '/reg.js');
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
        var self = this;
        //render View/Home/index_index.html file

        return Promise.all([
            D('stock').getStocksLatestList(),
            D('weixin').getWeixinList(),
            D('news').getNewsList()
        ]).then(function(data){
            self.assign('stockTypeConf', stock_type_conf);
            var stockList = [];
            for(var i = 0, len=data[0].length; i < (len > 5 ? 5 : len ); i++ ){
                var stock = data[0][i];
                var $ = cheerio.load(stock.reason,{decodeEntities:false});
                stock.reason = $('p').text().replace(regConf.blank, '').slice(0,70) + '...';
                stockList.push(stock);
            }
            self.assign('stockList', stockList);
            self.assign('weixinList', data[1]);
            var newsList = [];
            for(var i = 0, len = data[2].data.length > 10 ? 10 : data[2].data.length;i<len; i++){
                var news = data[2].data[i];
                var $ = cheerio.load(news.content,{decodeEntities:false});
                news.content = $('p').text().replace(regConf.blank, '').slice(0,80) + '...';
                // console.log($('*').text());
                newsList.push(news);
            }
            self.assign('newsList', newsList);
            self.assign("http", self.http);
            return self.display();
        });
      
      
    }
  };
});