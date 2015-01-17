/**
 * controller
 * @return 
 */
module.exports = Controller('Admin/BaseController',function(){
	'use strict';
	var cheerio = require('cheerio');
	var urlMod = require('url');
	var nodegrass = require('nodegrass');
	var utils = require('utility');


	var regComment = /<!--([\s\S]*?)-->/g;
	// 抓取网站config
    var configSiteInfo = [
        /* {domain:域名，
        	content:内容，
        	title:标题,
        	where:摘自，
        	pubTime:时间，
        	charset:编码方式（gbk）
           }
        */
        {
        	domain:/money\.163\.com/,
        	title:'h1#h1title',
        	content:'#endText',
        	where:'#ne_article_source',
        	putTime:'.ep-time-soure',
        	charset:'gbk',
        	excludeSelector:['>*:not(p)']
        },
    	{
    		domain:/finance\.qq\.com/,
    		title:'h1',
    		content:'#Cnt-Main-Article-QQ',
    		where:'span.where',
    		pubTime:'.pubTime',
    		charset:'gbk',
    		excludeSelector:[]
    	},
    	{
    		domain:/finance\.eastmoney\.com/,
    		title:'.newText h1',
    		content:'#ContentBody',
    		where:'',
    		pubTime:'.Info span:first-child',
    		charset:'gbk',
    		excludeSelector:['>*:not(p)']
    	},
    	{
    		domain:/finance\.sina\.com\.cn/,
    		title:'#artibodyTitle',
    		content:'#artibody',
    		where:'#media_name',
    		pubTime:'#pub_date',
    		charset:'gbk',
    		excludeSelector:['script','.finance_app_zqtg','#ad_44099','div:last-child','p:last-child']
    	}
        // [/news\.10jqka\.com\.cn/,{content:'.art_cnt',title:'.art_head h1',where:'span.where',pubTime:'#pubtime_baidu',charset:'gbk'}]
    ];

	/* 
		http://www.hao123.com/stocknew
		网易财经：http://money.163.com/stock/
		
		证券时报：http://stock.stcn.com/ 
		中国证券网：http://www.cnstock.com/ 
		和讯财经：http://stock.hexun.com/   
		证券之星：http://stock.stockstar.com/ 
		同花顺，东方财富，腾讯财经，sina财经 
	*/
    var configSiteListInfo = [
    	{
    		url: 'http://money.163.com/stock/',
    		selectors:['.news_struct>*:not(blockquote)']
    	}
    ];

    function getSiteInfo(url){
    	var host = urlMod.parse(url).hostname;
    	for(var i = 0, len = configSiteInfo.length; i < len; i++){
    		if(configSiteInfo[i].domain.test(host)){
    			return configSiteInfo[i];
    		}
    	}
    	return null;
    }
    // 获取页面源代码
	function getPage(url){
		var siteInfo = getSiteInfo(url);
		var defer = getDefer();

		if(siteInfo == null){
			defer.reject();
			return defer.promise;
		}

		nodegrass.get(url,function(data){
			if(data){
				defer.resolve(data);
			}else{
				defer.reject();
			}
		},null,siteInfo.charset || 'utf8');
		return defer.promise;
	}

	function getUrlList(){
		for(var i = 0, len = configSiteListInfo.length; i < len; i++){
			var url = configSiteListInfo[i].url;
			var selectors = configSiteListInfo[i].selectors;
			return getPage(url).then(function(html){
				var $ = cheerio.load(html,{decodeEntities:false});
				var list = [];
				
				for(var i = 0, len = selectors.length; i < len; i++){
					var sections = $(selectors[i]);
					if(!sections){
						continue;
					}
					
					sections.find('a').each(function(index,item){
						list.push(item.attribs.href);
					})
				}
				return list;
			})
		}
	}
	return {
		indexAction: function(){
			// self.capturePage('http://finance.qq.com/a/20150114/053133.htm');
			this.display();
		},
		_addAction: function(){
			var self = this;
			var url = self.get("url");
			return self.capturePage(url).then(function(data){
				self.success(data);
			});
		},
		captureAction: function(){
			this.display();
		},
		_captureAction: function(){
			var self = this;
			return getUrlList().then(function(data){
				var list = [];
				data.forEach(function(url){
					var pro = self.capturePage(url).then(function(data){
						return url;
					},function(data){
						return url;
					});		
					list.push(pro);			
				});
				return Promise.all(list).then(function(data){
					console.log('succ',arguments);
					return self.success(data);
				},function(err){
					console.log('err',arguments)
					return self.error({errno:err})
				});
			})
		},
		// 分析抓取页面内容
		capturePage: function(url){
			var self = this;
			var siteInfo = getSiteInfo(url);
			if(siteInfo == null){
				return getPromise(null,true);
			}
			return D('news').getNewsByOriginUrl(url).then(function(affectRow){
				if(!affectRow){
					return getPromise(null,true);
				}
				return getPage(url).then(function(html){
					var $ = cheerio.load(html,{decodeEntities:false});
					var title, content, pubTime, where;
					title = ($(siteInfo.title).html() || '').trim();
					pubTime = ($(siteInfo.pubTime).html() || '').trim();
					where = ($(siteInfo.where).html() || '').trim();					

					var $content = $(siteInfo.content);
					if(!$content){
						return getPromise(null,true);
					}

					var excludeSelector = siteInfo.excludeSelector;
					for(var i = 0, len = excludeSelector.length; i < len; i++){
						$content.find(excludeSelector[i]).remove();
					}
					content = $content.html().replace(regComment, '').trim();
					var data = {
						title: title,
						content: content,
						pub_time: pubTime,
						where: where,
						create_time: utils.YYYYMMDDHHmmss(),
						origin_url: url
					}
					return D('news').addNews(data);
				});
			});
		}
	};
});