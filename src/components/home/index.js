import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: 1,
			b: 2,
			c: 3,
			type: ''
		};

		// this.onInputChange = this.renderList.bind(this);
	}
	
	// Magic
	getTriangleType(a,b,c) {
		return (a === b && b === c) && 'equilateral' || (a === b || a === c || b === c) && 'isosceles' || 'scalene';
	}

	submit = () => {
		const { a, b, c } = this.state;
		this.setState({ type: this.getTriangleType(a, b, c) });
	}

	onInputChange(x, e) {
		// Simple regex to only take numbers
		const re = /^[0-9\b]+$/;
		if (e.target.value === '' || re.test(e.target.value)) {
			switch (x) {
				case 'a':
					this.setState({a: e.target.value});
					break;
				case 'b':
					this.setState({b: e.target.value});
					break;
				case 'c':
					this.setState({c: e.target.value});
					break;
				default:
					break;
			}
			this.submit();
		}
	}

	render(props, { type }) {
		return (
			<div class={style.home}>
				<h1>Triangle</h1>
				<p>Please enter a,b and c:</p>
				<form>
					<input type="number" onChange={this.onInputChange.bind(this, 'a')}/>
					<input type="number" onChange={this.onInputChange.bind(this, 'b')}/>
					<input type="number" onChange={this.onInputChange.bind(this, 'c')}/>
				</form>
				<h2>{type}</h2>
			</div>
		);
	}
}
