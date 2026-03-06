# Prerrequisitos:
1. Node.js: Versión 20.x, 22.x o 24.x (LTS). 
   NOTA: Se recomienda evitar la versión 23 ya que Cypress presenta problemas
   de compatibilidad con esta versión.


# Ejecución de los tests
1. Preparación del entorno:
   * Descomprimir el archivo .zip del proyecto.
   * Abrir la carpeta FlujoCompraE2E usando Visual Studio Code (o su editor de preferencia).
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
        Seleccionar el archivo FlujoCompra.cy.js para iniciar.
   b. Modo Headless (Ejecución automática en consola):   
      npm run test:headless
5. Resultados:   
   * Los screenshots de la ejecución exitosa de la compra se guardan automáticamente en la carpeta:
     cypress/screenshots


Solución a Posibles problemas:
1. Si al ejecutar en modo headless se muestra un error relacionado con "powershell.exe ENOENT" se 
   debe colocar en el Path de las variables de entorno C:\Windows\System32\WindowsPowerShell\v1.0
   reiniciar el editor y ejecutar nuevamente npm run test:headless