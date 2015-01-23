/**
 * controller
 * @return 
 */
module.exports = Controller(function(){
  "use strict";
  return {
    __before: function(){
        var self = this;
        var cates = {
            group: this.http.group.toLowerCase(),
            category: this.http.controller.toLowerCase(),
            action: this.http.action.toLowerCase()
        }
        this.assign("cates",cates);

        return this.session('userInfo').then(function(userInfo){
            if(!isEmpty(userInfo)){
                self.redirect("/admin");
            }
        })
    },
    loginAction: function(){
      //render View/Home/list_index.html file
      // this.assign("user",{"name":"lijing"});
      this.display();
    },
    regAction: function(){
    	this.display();
    },
    logoutAction: function(){
        var self = this;
        this.session().then(function(){
            self.redirect('/admin');
        });
    },
    // 注册接口
    _regAction: function(){
    	var self = this;
    	var nickname = this.post("nickname");
    	var pwd = this.post("password");
    	var email = this.post("email");

    	return D("user").addUser({
    		nickname:nickname,
    		password:pwd,
    		email:email
    	}).then(function(data){
			return self.success(data);
    	}).catch(function(error){
    		return self.error(error);
    	});
    },
    // 登录接口
    _loginAction: function(){
    	var self = this;
    	var email = this.post("email");
    	var pwd = this.post("password");
    	return D("user").getUser(email,pwd).then(function(data){
            if(data.id){
                self.success({id:data.id});
            }else{
                self.success({id:0});
            }
            self.session("userInfo",data).then(function(d){
            });
    	});
    }
  };
});