# [Api Rest]()

1) **Crear la rama del proyecto**

    comando de consola (PowerShell)
    ```PowerShell
    #para crear la rama
    git branch ApiRest01
    #para cambiar a la rama
    git checkout ApiRest01
    #para subir la rama al repositorio remoto
    git push --set-upstream origin ApiRest01
    ```

2) **Crear y activar un entorno virtual**

    comando de consola (PowerShell)
    ```PowerShell
    python -m venv venv
    venv\Scripts\activate
    ```
3) **Instalar Flask**

    comando de consola (PowerShell)
    ```PowerShell
    pip install Flask
    ```

4) **Crear el archivo app.py**

    comando de consola (PowerShell)
    ```PowerShell
    New-Item -Path .\app.py -ItemType File
    ```
    contenido del archivo app.py
    ```Python
    #Importaciones
    from flask import Flask

    #Instancia de Flask
    app = Flask(__name__)

    #Asegurar que el script se ejecute solo si es llamado directamente y no al ser importado como modulo
    if __name__ == '__main__':
        app.run(debug=True)
    ```
