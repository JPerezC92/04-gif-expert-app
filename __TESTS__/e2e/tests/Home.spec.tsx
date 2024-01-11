describe('Home', () => {
	it('should load the home page', () => {
		// Given
		cy.visit('/?q=["9gag"%2C"bryce+young"]');

		// Then
		cy.findByTitle('Search field').type('cats');
		cy.findByRole('link', { name: 'Snap flicks' });
		cy.findByRole('heading', { level: 2, name: 'Trending' }).should('exist');
		cy.findByRole('heading', { level: 6, name: 'Latest Searches' }).should(
			'exist',
		);
		cy.findByRole('heading', { level: 6, name: 'Trending Searches' }).should(
			'exist',
		);
		cy.findAllByRole('img').should('have.length', 42);
	});
});
