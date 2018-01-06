class KeyboardStore extends EventEmitter {
	constructor(){
		super();
		this.keys = data.keys;
		this.text = "";
	}

	addChar(char){
		const id = Date.now();
		this.text = this.text + char;
		this.emit("change");
	}

	getKeys(){
		return this.keys
	}

	getText(){
		return this.text
	}

	handleActions(action){
		switch(action.type){
			case "ADD_CHAR": {
				this.addChar(action.payload)
			}
		}
	}
}
