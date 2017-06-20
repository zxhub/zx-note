//封装ajax方法
var Ajax = new function (){
	this.request = function(options) {
		return new function(){
			$.extend(this,defaults,options);
			var userData;
			if (this.type == "GET") {
				userData = $.base64.encode(JSON.stringify(this.data));
				this.url = this.url + "?" +userData;
				this.data = "";
			} else if (this.type == "POST") {
				this.data = $.base64.encode(JSON.stringify(this.data));
			}

			$.ajax(this);
		}
	}


		var defaults = {
			url: "",
			dataType:"text",
			type:"POST",
			contentType:"application/x-www-form-urlencoded;charset=UTF-8"
		}
}