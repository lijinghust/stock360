/**
 * controller
 * @return 
 */
module.exports = Controller("Admin/BaseController",function(){
  "use strict";
  return {
    indexAction: function(){
      //render View/Home/index_index.html file
      var self = this;
      
	      self.assign("user",{"name":"lijing"});
        console.log("index",self.userInfo);
        self.display();

        // this.session('userInfo').then(function(d){
        //   console.log('---------session start----------');
        //   console.log(d);
        //   console.log('---------session end----------');
        
        //   self.display();       
        // })
      

    }
  };
});