// TODO: Implement backspace
// TODO: Connect button click to related button
// TODO: Rename key to button...
// TODO: Implement shift, control, and shiftCtrl

const root = document.getElementById("root");
const dispatcher = new Flux.Dispatcher;
const keyboardStore = new KeyboardStore();
dispatcher.register(keyboardStore.handleActions.bind(keyboardStore));

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

class App extends React.Component{
	constructor(){
		super();
		this.state = ({
			text: keyboardStore.text
		})
	}

	componentWillMount(){
		keyboardStore.on("change", () => {
			this.setState({
				text: keyboardStore.text
			})
		})
	}

	componentDidMount(){
		this.nameInput.focus();
	}

	handleButtonPress(event){
		addChar(event);
	}

	handleKeyClick = (event) => {
		let allData = [];
		for(let arr of keyboardStore.keys){
			for(let el of arr){
				allData.push(el)
			}
		}
		let match = allData.find(
			el => {
				return el.key === event.key
			}).catawba;


		dispatcher.dispatch({
			type: "ADD_CHAR",
			payload: match
		})
	}


	render(){
		let keys = keyboardStore.keys;
		return (
		<div >
			<input
				value={this.state.text}
				onKeyPress={this.handleKeyClick}
				ref={(input) => { this.nameInput = input; }}
			 />

			<div className="row">
			{
				keys[0].map(arr  => {

					return (
						<Key onClick={this.handleButtonPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
			<div className="row">
			{
				keys[1].map(arr  => {

					return (
						<Key onClick={this.handleButtonPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
			<div className="row">
			{
				keys[2].map(arr  => {

					return (
						<Key onClick={this.handleButtonPress.bind(this)} keyData={arr} />
					)
				})
			}
			</div>
			<div className="row">
				{
					keys[3].map(arr  => {

						return (
							<Key onClick={this.handleButtonPress.bind(this)} keyData={arr} />
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
