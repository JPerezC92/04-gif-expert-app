import { render } from '@testing-library/react';

import Home from '@/app/page';

describe('Home', () => {
	it('should render correctly', async () => {
		render(await Home());
	});
});
