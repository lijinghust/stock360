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
        var self = this;
        var cates = {
            group: this.http.group.toLowerCase(),
            category: this.http.controller.toLowerCase(),
            action: this.http.action.toLowerCase()
        }
        self.assign("cates",cates);
        
        if(this.http.action === 'login'){
            return;
        }
        // console.log(this.http);
    	return this.session("userInfo").then(function(userInfo){
            if(isEmpty(userInfo)){
                //ajax访问返回一个json的错误信息
                if(self.isAjax()){
                    return self.error(403, "用户未登录，不能访问")
                }else{
                    //跳转到登录页
                    return self.redirect("/admin/user/login");
                }
            }else{
                //用户已经登录
                self.userInfo = userInfo;
                self.assign("userInfo", userInfo);
            }
    	})
    },
    __after: function(){
        // if(!this.userInfo){
        //     this.redirect('/');
        // }
    }
  }
})