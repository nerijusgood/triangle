import { h } from 'preact';
import { expect } from 'chai';

import Home from '../../../src/components/home';

describe('components/home', () => {
	it('should show the home text', () => {
		const home = <Home/>;
		expect(home).to.contain(<h1>Triangle</h1>);
	});

	it('should show the intro', () => {
		const home = <Home/>;
		expect(home).to.contain(<p>Please enter a,b and c:</p>);
	});
});
