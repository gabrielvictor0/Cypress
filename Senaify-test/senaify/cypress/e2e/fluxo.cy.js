describe('template spec', () => {

  before(() => {

    cy.visit('/')
  })

  // it('Visualizar playlists e executar uma música', () => {
  //   cy.get("[aria-label='title-head']").should("be.visible")
  //   cy.get("[aria-label='title-head']").should("contain", "Good morning")

  //   cy.wait(1500)
  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0).then(() => {

  //     cy.get("[aria-label='playlist-item']").first().click()
  //     cy.get("[aria-label='music-item'").should("have.length.greaterThan", 0).then(() => {

  //       cy.get("[aria-label='music-item']").eq(1).click()

  //       cy.scrollTo("top")

  //       cy.pause();

  //     })

  //   })

  // })

  // it('Navegar entre playlists e executar outra musica', () => {
  //   cy.visit('/')

  //   cy.wait(1500)

  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0).then(() => {
  //     cy.get("[aria-label='playlist-item']").eq(1).click()
  //     cy.get("[aria-label='music-item'").should("have.length.greaterThan", 0).then(() => {

  //       cy.get("[aria-label='music-item']").eq(1).click()

  //       cy.scrollTo("top")

  //       cy.pause();
  //     })
  //   })
  // });

  it('Procurar e favoritar uma musica', async () => {

    cy.get("[href='/Search']").click()

    cy.scrollTo("top").then(() => {
      cy.intercept('GET', 'https://api.spotify.com/v1/search*').as('searchResults');

      cy.get("[data-testid='campoBusca']").type("Mina do Condomínio").then(() => {

        cy.wait('@searchResults');

        cy.get("[aria-label='music-item']").contains('Mina do Condomínio').first().click();

      })  
      cy.scrollTo("top")

      cy.wait(1500)

      cy.get("[aria-label='music-item']").filter(":contains('Mina do Condomínio')").then((item) => {
        cy.wrap(item).find("[data-testid='icon-button").click()
      })
    })


  });

})