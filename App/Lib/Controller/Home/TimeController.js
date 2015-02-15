/*
 * 提供服务端时间
 */
module.exports = Controller(function(){
	'use strict';
	return {
		indexAction: function(){
			var time = new Date().toGMTString();
			return this.success({time:time});
		}
	}
});