let usuario = "userAPI"
let clave = "userAPIpwd"
let usuarioMal = "userAPIs"
let claveMal = "userAPIpwds"

const urlBase = 'https://api.demoblaze.com';
const userDinamic = usuario + Math.floor(Math.random() * 1000);

function registrarUsuario(userDinamic, clave) 
{
  cy.request({
    method: 'POST',
    url: urlBase + '/signup',
    body: { username: userDinamic, password: clave }
  }).then((response) => 
  {
    expect(response.status).to.eq(200);

    if (response.body === '') 
    { 
      cy.log('Usuario creado exitosamente');
    }else if (response.body.errorMessage) 
    {  
      cy.log('Usuario ya existe');
    }else
    { 
      cy.log('Registro usuario: Se ha producido un error: ' + JSON.stringify(response.body));
    }  
  });
};

function login(usuario, clave)
{
  cy.request
  ({
    method: 'POST',
    url: urlBase + '/login',
    body: { username: usuario, password: clave },
  }).then((response) => 
  {
    expect(response.status).to.eq(200);
    const ChangeBodyStr = JSON.stringify(response.body);
    if (ChangeBodyStr.includes('Auth_token')) 
    {
      cy.log('Ingreso exitoso');
    } else if (response.body.errorMessage) 
    {
      cy.log('Error en login: ' + response.body.errorMessage);
    } 
  });
}

describe('Automatizacion API - Registro e Inicio de sesion (https://www.demoblaze.com)', () => 
{
  it('Test 1: Crear un nuevo usuario al registrarse', () => 
  {
    registrarUsuario(userDinamic, clave);
  });

  it('Test 2: Intentar crear un usuario ya existente', () => 
  {
    registrarUsuario(userDinamic, clave);
  });

  it('Test 3: Usuario y contraseña  correcta al iniciar sesión', () => 
  {
    login(userDinamic, clave);
  });

  it('Test 4: Usuario incorrecto al iniciar sesión', () => 
  {
    login(usuarioMal, clave);
  });

  it('Test 5: Clave incorrecta al iniciar sesión', () => 
  {
    login(userDinamic, claveMal);
  });
});