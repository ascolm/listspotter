describe('Example', () => {
  it('cypress working', () => {
    expect(true).to.equal(true);
  });

  it('successfully redirects to main', () => {
    cy.intercept('POST', 'http://localhost:3001/tracks', {
      fixture: 'tracks.json',
    }).as('getTracks');

    cy.intercept('POST', 'http://localhost:3001/artists', {
      fixture: 'artists.json',
    }).as('getArtists');

    //INSERT YOUR LOCAL URL TO /MAIN AS A STRING, WITH THE CODE AND EVERYTHING!!!
    cy.visit();

    cy.wait(['@getTracks', '@getArtists']);
  });
});
