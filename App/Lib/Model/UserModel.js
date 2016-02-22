module.exports = Model(function(){
	'use strict';
	return {
		addUser: function(data){
			data.password = md5(data.password);
			var where = {
				email:data.email
			}
			console.log(data);
			return this.thenAdd(data,where,true).then(function(data){
				return data;
			});
		},
		getUser: function(email,password){
			return this.where({email:email,password:md5(password)})
				.field('password',true).find();
		},
		deleteUser: function(id){
			return this.where({id:id}).delete().then(function(affectRows){
				return affectRows;
			})
		}
	}
});