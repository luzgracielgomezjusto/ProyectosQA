# ProyectosQA
Repositorio de proyectos automatizados

## Desafío de Automatización con Playwright
    Introducción
        Este proyecto utiliza Playwright para automatizar la creación de un nuevo empleado en la plataforma OrangeHRM (https://opensource-demo.orangehrmlive.com/web/index.php/auth/login). El objetivo es demostrar el uso de Playwright para realizar pruebas end-to-end en una aplicación web.

        # Objetivos del Reto
            1. Casos de Prueba
            2. Investigación de Playwright
            3. Automatización de la Web
            4. Repositorio en GitHub
            5. Consideraciones

        ## Casos de Prueba
            Casos de Prueba Identificados
            1. Iniciar Sesión
                Descripción: Verificar que el usuario puede iniciar sesión con credenciales válidas.
                Técnica de Diseño: Prueba de caja negra.

            2. Crear un Nuevo Empleado
                Descripción: Automatizar el proceso de agregar un nuevo empleado con detalles completos.
                Técnica de Diseño: Prueba de caja negra.
                
            3. Verificar la Creación del Empleado
                Descripción: Confirmar que el empleado creado aparece en la lista de empleados.

            #Técnica de Diseño: Prueba de caja negra.
                Técnica de Diseño de Casos de Prueba: Se han utilizado técnicas de prueba de caja negra, donde se prueba la funcionalidad del sistema sin conocimiento interno del código.

        # Investigación de Playwright
            Playwright es una herramienta de automatización de pruebas que soporta múltiples navegadores (Chromium, Firefox, WebKit) y proporciona una API robusta para interactuar con aplicaciones web.

        # Instalación y Configuración
            Para configurar Playwright en tu entorno local, sigue estos pasos:

            Instalar Playwright:
            npm install playwright

            Instalar Navegadores:
            npx playwright install

        # Estructura del Proyecto:

            src/pages/loginPage.js: Contiene la lógica para interactuar con la página de inicio de sesión.
            src/pages/employeePage.js: Contiene la lógica para interactuar con la página de empleados.
            src/tests/test.js: Archivo principal que ejecuta las pruebas.

        # Automatización de la Web
            Pasos para Ejecutar el Script
            1. Navegar a la Página de Inicio:
                Se abre la página de inicio de sesión de OrangeHRM.
            
            2. Iniciar Sesión:
                Se introducen las credenciales (Admin, admin123) y se verifica el inicio de sesión.
                
            3. Crear un Nuevo Empleado:
                Se navega a la sección de empleados y se crea un nuevo empleado con detalles proporcionados.

            4. Verificar Creación del Empleado:
                Se confirma que el nuevo empleado aparece en la lista de empleados.
            
            5. Ejecución del Test
                Para ejecutar el script de prueba, usa el siguiente comando:
                node src/tests/test.js
        

        # Guía de Instalación y Uso
            1. Clonar el Repositorio:
                git clone https://github.com/luzgracielgomezjusto/ProyectosQA.git
            
            2. Navegar al Directorio del Proyecto:
                cd ProyectosQA
            
            3. Instalar Dependencias:
                npm install
            
            4. Ejecutar las Pruebas:
                node src/tests/test.js
            
        Consideraciones:
            Patrón de Diseño: Se ha utilizado el patrón Page Object Model (POM) para organizar el código de pruebas.
            Redacción con Lenguaje Gherkin: Aunque no se ha incluido un archivo Gherkin explícito, las pruebas están redactadas de manera que reflejan el enfoque dado en el desafío.