function addChar(char){
	dispatcher.dispatch({
		type: "ADD_CHAR",
		payload: char
	})
}
