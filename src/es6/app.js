console.log("Hello World");
let x = 10;
class Message{
	constructor(){
		this.message = "";
		console.info("Message initialized");
	}

	setMessage(str){
		this.message = str;
		console.info("Set Message Called : "+ this.message);
	}
	getMessage(){
		console.info("Get Message Called : "+ this.message);
	}
	
}