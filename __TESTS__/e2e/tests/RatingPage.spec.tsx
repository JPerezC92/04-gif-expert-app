import { gifFindCriteriaBehavior } from '@/gifs/domain';

describe('Rating Page', () => {
	it('should render correctly', () => {
		// Given
		cy.visit(`search/cats/g`);

		// When
		cy.findByRole('heading', { level: 2 }).should('have.text', 'Search cats');

		// Then
		cy.findAllByRole('img').should(
			'have.length',
			gifFindCriteriaBehavior.LIMIT * 2,
		);
	});
});
