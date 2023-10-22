#Importaciones
from flask import Flask

#Instancia de Flask
app =Flask(__name__)

#Asegurar que el script se ejecute solo si es llamado directamente y no al ser importado como modulo
if __name__ == '__main__':
    app.run(debug=True)