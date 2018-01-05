// TODO: Implement flux
// TODO: Implement backspace
// TODO: Connect button click to related button
// TODO: Rename key to button...
// TODO: Implement shift, control, and shiftCtrl





const root = document.getElementById("root");

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyCode: props.keyData.keyCode,
			catawba: props.keyData.catawba
		};

	}
	click() {
		// console.log(this.state.keyCode);
		this.props.onClick(this.props.keyData.catawba)
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

// const getData = (data) =>{
// 	let arr = [];
// 	for(let prop in obj){
// 		if(obj.hasOwnProperty(prop)){
// 			arr.push(obj[prop]);
// 		}
// 	}
// 	return arr
// }

class App extends React.Component{
	constructor(){
		super();
		this.state = ({
			text: ""
		})
	}

	componentDidMount(){
		this.nameInput.focus();
	}

	handleKeyPress(event){
		// console.log(event);
		this.setState({
			text: this.state.text + event
		})
	}

	handleKeyClick = (event) => {
		let allData = [];
		for(let arr of data.keys){
			for(let el of arr){
				allData.push(el)
			}
		}
		let match = allData.find(
			el => {
				return el.key === event.key
			}).catawba;
		console.log(match);
		this.setState({
			text: this.state.text + match
		})
	}


	render(){
		let keys = data.keys;
		// console.log(keys);
		// console.log(this.state);
		return (
		<div >
			<input
				value={this.state.text}
				onKeyPress={this.handleKeyClick}
				ref={(input) => { this.nameInput = input; }}
			 />
			<div class="row-1">
			{
				keys[0].map(arr  => {

					return (
						<Key onClick={this.handleKeyPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
			<div id="row-2">
			{
				keys[1].map(arr  => {

					return (
						<Key onClick={this.handleKeyPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
			<div class="row-3">
			{
				keys[2].map(arr  => {

					return (
						<Key onClick={this.handleKeyPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
		</div>
	)
	}
}

ReactDOM.render(
	<App />,
	root
);
