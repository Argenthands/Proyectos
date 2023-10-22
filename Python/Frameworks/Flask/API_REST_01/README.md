# [Api Rest]()

1) **Crear y activar un entorno virtual**

    comando de consola (PowerShell)
    ```PowerShell
    python -m venv venv
    venv\Scripts\activate
    ```
2) **Instalar Flask**

    comando de consola (PowerShell)
    ```PowerShell
    pip install Flask
    ```

3) **Crear el archivo app.py**

    comando de consola (PowerShell)
    ```PowerShell
    New-Item -Path .\app.py -ItemType File
    ```
    contenido del archivo app.py
    ```Python
    #Importaciones
    from flask import Flask

    #Instancia de Flask
    app =Flask(__name__)

    #Asegurar que el script se ejecute solo si es llamado directamente y no al ser importado como modulo
    if __name__ == '__main__':
        app.run(debug=True)
    ```
