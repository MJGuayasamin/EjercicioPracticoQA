# Ejecución del test de automatización API / Registro - Login (https://www.demoblaze.com)

1. Preparación del entorno:
   * Descomprimir el archivo .zip del proyecto.
   * Abrir la carpeta AutomatizacionAPI usando Visual Studio Code (o su editor de preferencia).
2. Acceso a la terminal:
   * Abrir una nueva terminal integrada en el editor.
   * Asegurarse de estar ubicado en la raíz del proyecto (donde se visualiza el archivo package.json).
3. Instalación:
	Ejecutar el siguiente comando para instalar todas las dependencias:
      npm install
4. Ejecución de las pruebas:
   a. Modo interactivo (Para ver paso a paso):
      npm run test
	  * Una vez abierta la interfaz de Cypress, elegir el navegador de su preferencia (Chrome, Edge, Firefox).
      Seleccionar el archivo RegistroLogin.cy.js para iniciar.
   b. Modo Headless (Ejecución automática en consola):   
      npm run test:headless


#Entradas (Request)
* Método: POST
* URL: 'https://api.demoblaze.com/signup'      
       'https://api.demoblaze.com/login'       
* Body: {"Usuario":"TestUser", Clave:"UserPwd"}        

#Salidas
* Status Code: 200 OK
* Body:          
Test 1: Crear un nuevo usuario al registrarse       
        Entrada: {"userDinamic": usuario, "password", clave} 
        Salida: 200 OK
        'Usuario creado exitosamente'

Test 2: Intentar crear un usuario ya existente
        Entrada: {"user": usuario, "password", clave} 
        Salida: 200 OK
        'Usuario ya existe'

Test 3: Usuario y contraseña  correcta al iniciar sesión
        Entrada: {"user": usuario, "password", clave} 
        Salida: 200 OK
        'Ingreso exitoso' 

Test 4: Usuario incorrecto al iniciar sesión
        Entrada: {"userMal": usuario, "password", clave} 
        Salida: 200 OK
        'Error en login: Usuario incorrecto'    

Test 5: Clave incorrecta al iniciar sesión
        Entrada: {"user": usuario, "passwordMal", clave} 
        Salida: 200 OK
        'Error en login: Clave incorrecta'    