describe("Publicacion", () => {
    it("Muestra lo que esta pensando la persona afin a las redes sociales", () => {
        const texto = "hola";
      cy.visit("/");
      cy.get("#texto-publicacion").type("hola");
      cy.get("#publicar-button").click();
      cy.get("#resultado-div").should("contain", texto);
    });
  });
  