const root = document.getElementById("root");

class Key extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			keyCode: props.keyData.keyCode,
			catawba: props.keyData.catawba
		};

	}
	click() {
		console.log(this.state.keyCode);
	}
	render(){
		return (
		<div
			id={this.state.keyCode}
			onClick={this.click.bind(this)}
			className="boardKey">
				<span>
					{this.state.catawba}
				</span>
			</div>
		)
	}
}

const objIterator = (obj) =>{
	let arr = [];
	for(let prop in obj){
		if(obj.hasOwnProperty(prop)){
			arr.push(obj[prop]);
		}
	}
	return arr
}

class App extends React.Component{
	handleKeyClick = () => {
		console.log("One of my keys has been pressed!");
	}

	render(){
		let keys = objIterator(data.keys);
		return (
		<div>
			{
			keys.map(obj => {
				return (
					<Key keyData={obj} />
				)
			})
		}
		</div>
	)
	}
}

ReactDOM.render(
	<App />,
	root
);
