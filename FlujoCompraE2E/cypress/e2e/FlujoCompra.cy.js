const { eventNames } = require("process")

//Datos para el registro del Formulario de compra
let names = "User Test"
let country = "Ecuador"
let city = "Quito"
let creditCard = "1234567890"
let month = "Marzo"
let year = 2026

describe('Automatizacion E2E - Flujo de compra', () => 
{
  function ingresoURL()
  {
    cy.visit('https://www.demoblaze.com');
    cy.screenshot({ capture: 'fullPage' });
  }

  function AgregaProducto(indice) 
  {
    //Hace click en un producto de acuerdo con el indice indicado
    cy.get('a.hrefch', { timeout: 10000 }).should('be.visible').eq(indice).click(); 
    
    //Agrega el producto al carrito y se va a Home para que se vuelva a agregar otro producto
    cy.get('.btn-success').click();
    cy.contains('a.nav-link', 'Home').click();
  } 

  function VerCarrito()
  {
    cy.get('a#cartur').click();
    cy.url({ timeout: 10000 }).should('include', '/cart.html')
  }

  function RealizaCompra() 
  {
    //Verifica que el carrito tenga al menos 2 productos
    cy.get('.success').should('have.length.at.least',2);
    cy.screenshot({ capture: 'fullPage' });

    //Presiona el boton Place Order, llena el formulario y confirma la compra de los productos del carrito
    cy.contains('button', 'Place Order').should('be.visible').click();
    cy.get('#orderModalLabel').should('contain.text', 'Place order');
    cy.get('input#name').type(names);
    cy.get('input#country').type(country);
    cy.get('input#city').type(city);
    cy.get('input#card').type(creditCard);
    cy.get('input#month').type(month);
    cy.get('input#year').type(year);
    cy.screenshot({ capture: 'fullPage' });
    cy.contains('button', 'Purchase').click();
    
    //Verifica que se haya realizado la compra y para validar lo hace con el nombre, no se usa un texto fijo porque puede variar el texto por el idioma
    cy.get('.sweet-alert').should('be.visible');
    cy.get('p.lead.text-muted').should('contain', names);
    cy.screenshot({ capture: 'fullPage' });

    //Cierra la confirmación
    cy.get('.sweet-alert button.confirm').click();
  } 

  it('Principal', () => 
  {
    ingresoURL();
    AgregaProducto(4);
    AgregaProducto(8);
    VerCarrito();
    RealizaCompra();
  });
});