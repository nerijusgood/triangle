import { h, Component } from 'preact';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Triangle</h1>
				<nav>
					<a href="https://github.com/nerijusgood/triangle">Github</a>
				</nav>
			</header>
		);
	}
}
