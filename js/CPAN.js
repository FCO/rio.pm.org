window.callbacks = {};
window.next_callback = "1";
window.new_callback = function(cb) {
	var id = "_" + window.next_callback++;
	window.callbacks[id] = cb;
	return id;
};

function CPAN() {
}

CPAN.prototype = {
	modules:	function(cb) {
		this._call_jsonp("http://api.metacpan.org/v0/distribution/_search", cb);
	},
	_call_jsonp:	function(url, cb) {
		var cbid = window.new_callback(cb);
		var scr = document.createElement("SCRIPT");
		if(url.match(/\?/))
			url += "&";
		else
			url += "?";

		url += "callback=window.callbacks." + cbid;
		document.body.appendChild(scr);
		scr.src = url;
		
	}
};
