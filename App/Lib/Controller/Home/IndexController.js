/**
 * controller
 * @return 
 */
var stock_type_conf = require(CONF_PATH + "/stock_type.js");
var cheerio = require('cheerio');
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
            self.assign('stockList', data[0]);
            self.assign('weixinList', data[1]);
            var newsList = [];
            for(var i = 0, len = data[2].data.length > 10 ? 10 : data[2].data.length;i<len; i++){
                var news = data[2].data[i];
                var $ = cheerio.load(news.content,{decodeEntities:false});
                news.content = $('p').text().slice(0,80) + '...';
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