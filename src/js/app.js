"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Hello World");
var x = 10;

var Message = function () {
	function Message() {
		_classCallCheck(this, Message);

		this.message = "";
		console.info("Message initialized");
	}

	_createClass(Message, [{
		key: "setMessage",
		value: function setMessage(str) {
			this.message = str;
			console.info("Set Message Called : " + this.message);
		}
	}, {
		key: "getMessage",
		value: function getMessage() {
			console.info("Get Message Called : " + this.message);
		}
	}]);

	return Message;
}();