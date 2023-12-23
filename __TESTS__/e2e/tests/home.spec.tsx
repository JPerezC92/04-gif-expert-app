describe('Home', () => {
	it('should render correctly', () => {
		cy.visit('/');

		cy.findByText(/Snap/);
	});
});
