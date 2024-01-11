describe('Gif detail page', () => {
	it('should contain the gif image when navigating to the gif detail page', () => {
		// Given
		cy.visit('/');

		// When
		const linkList = cy.findAllByRole('link', { name: /gif/i });
		linkList.first().click();

		// Then
		cy.url().should('include', '/gifs/');
		cy.findByRole('heading', { level: 2 }).should('exist');
		cy.findAllByRole('img').should('have.length', 2);
	});

	it('should contain a skeleton when loading the gif detail page', () => {
		// Given
		cy.on('uncaught:exception', () => false);
		cy.visit('/');

		// When
		cy.visit('/gifs/just-wait');

		// Then
		cy.findByRole('alert').should('exist');
	});

	it('should contain an error message when navigating to a non-existent gif detail page', () => {
		// Given
		cy.on('uncaught:exception', () => false);
		cy.visit('/');

		// When
		cy.visit('/gifs/this-gif-does-not-exist');

		// Then
		cy.findByText(/Something went wrong/i).should('exist');
	});
});
