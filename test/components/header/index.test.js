import { h } from 'preact';
import { expect } from 'chai';

import Header from '../../../src/components/header';

describe('components/Header', () => {

	it('should show the correct navigation links', () => {
		const header = <Header/>;
		expect(header).to.contain(<a href='https://github.com/nerijusgood'>Github</a>);
	});

});
