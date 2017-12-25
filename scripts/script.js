


const objIterator= (obj) =>{
	let arr = [];
	for(let prop in obj){
		if(obj.hasOwnProperty(prop)){
			arr.push(obj[prop]);
		}
	}
	return arr
}
