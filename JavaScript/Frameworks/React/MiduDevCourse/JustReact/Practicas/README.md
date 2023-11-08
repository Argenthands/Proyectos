# [Proyecto con VITE](https://vitejs.dev/)
- El proyecto pudo hacerce con create-react-app que utiliza [webpack](https://webpack.js.org/) por debajo, para poder empezar a usar JSX, pero dado que esta siendo descontinuado, se opto por usar [VITE](https://vitejs.dev/) que utiliza [ESBuild](https://esbuild.github.io/) por debajo como empaquetador.

## Pasos:
### 1. Creando el [primer proyecto](./ConEmpaquetadores/00-hola-mundo/README.md):

#### Es necesario tener instalado [NodeJS](https://nodejs.org/es/) y [NPM](https://www.npmjs.com/) para poder crear el proyecto. y privilegios de administrador para correr el comando de instalacion de [VITE](https://vitejs.dev/).

- **Windows:**
    ```PowerShell
    npm init vite@latest
    ```

- **Linux:**
    ```bash
    npm init vite@latest
    ```

- **Seleccionar:**
    1. ***Project name:*** 00-hola-mundo
    2. ***Select a Framework:*** (React)
    3. ***Select a variant:*** (JavaScript + SWC)

- **Correr el proyecto:**
    ```
    cd 00-hola-mundo
    npm install
    npm run dev
    ```
