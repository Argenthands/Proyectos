#Importaciones
from flask import Flask, request, jsonify

#Instancia de Flask
app = Flask(__name__)

#Rutas
@app.route('/')
def index():
    return '<h1>Hola Mundo</h1>'

# GET |---> Obtener datos
@app.route('/usuarios/<user_id>', methods=['GET'])#<user_id> es un parametro ---> /usuarios/numero
def get_user(user_id):
    
    #captando un query ---> /usuarios/numero?name=nombre&email=correo&tel=telefono
    name = request.args.get('name') or 'No tiene nombre'
    email = request.args.get('email') or 'No tiene correo'
    tel = request.args.get('tel') or 'No tiene telefono'
    
    #captando un json
    data = request.get_json() or 'No tiene datos'

    usuario = {
        'id': user_id,
        'name': name,
        'email': email,
        'tel': tel,
        'data': data
    }
    return usuario
# POST |---> Enviar datos
@app.route('/usuarios', methods=['POST'])
def create_user():
    data = request.get_json()
    return jsonify({'message': 'Usuario creado', 'data': data}), 201
# PUT |---> Actualizar datos
# DELETE |---> Eliminar datos


#Asegurar que el script se ejecute solo si es llamado directamente y no al ser importado como modulo
if __name__ == '__main__':
    app.run(debug=True)