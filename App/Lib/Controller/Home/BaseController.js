/**
 * 项目里的Controller基类
 * 这里做一些通用的处理逻辑，其他Controller继承该类
 * @param  {[type]} 
 * @return {[type]}         [description]
 */
module.exports = Controller(function(){
  'use strict';
  return {
    init: function(http){
    	this.http = http;
    	this.super("init", http);
    	//其他的通用逻辑
    },
    __before: function(){
    	// var self = this;
    	// return this.session("userInfo").then(function(data){
    	// 	console.log(data[0]);
    	// 	self.userInfo = data[0];
    	// 	self.assign("userInfo",data[0]);
    	// })
        var self = this;
        var cates = {
            group: this.http.group.toLowerCase(),
            category: this.http.controller.toLowerCase(),
            action: this.http.action.toLowerCase()
        }
        self.assign("cates",cates);
        D('weixin').getWeixinList().then(function(data){
            self.assign('weixinList', data);
        });
    }
  }
})