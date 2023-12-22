from flask import Flask, render_template, request, redirect, url_for
import os
from subprocess import run

app = Flask(__name__)

# Configuración para subir archivos
# Configuración para subir archivos
app.config['UPLOAD_FOLDER_IMAGES'] = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'scripts', 'assets', 'images', 'Input')
app.config['UPLOAD_FOLDER_SOUND'] = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'scripts', 'assets', 'sound')
app.config['UPLOAD_FOLDER_VIDEOS'] = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'scripts', 'assets', 'videos', 'Input')
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'mp3', 'mp4'}

def create_upload_folders():
    # Crear carpetas de carga si no existen
    for folder in [app.config['UPLOAD_FOLDER_IMAGES'], app.config['UPLOAD_FOLDER_SOUND'], app.config['UPLOAD_FOLDER_VIDEOS']]:
        if not os.path.exists(folder):
            os.makedirs(folder)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    create_upload_folders()
    # Manejar el formulario de carga aquí
    # Verificar si se han subido archivos
    if 'image[]' in request.files and 'audio' in request.files:
        # Procesar imágenes
        images = request.files.getlist('image[]')
        for image in images:
            if image and allowed_file(image.filename):
                image.save(os.path.join(app.config['UPLOAD_FOLDER_IMAGES'], image.filename))

        # Procesar archivo de sonido
        audio = request.files['audio']
        if audio and allowed_file(audio.filename):
            audio.save(os.path.join(app.config['UPLOAD_FOLDER_SOUND'], audio.filename))

        # Procesar archivo de video opcional
        if 'video' in request.files:
            video = request.files['video']
            if video and allowed_file(video.filename):
                video.save(os.path.join(app.config['UPLOAD_FOLDER_VIDEOS'], video.filename))

        print(f"Ruta completa de guardado: {os.path.abspath(app.config['UPLOAD_FOLDER_IMAGES'])}")
        # Redirigir a una página de éxito o hacer cualquier otra cosa que necesites
        return redirect(url_for('success'))

    # Redirigir a una página de error si es necesario
    return redirect(url_for('error'))

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/run_script', methods=['POST'])
def run_script():
    # Ruta al script que deseas ejecutar
    script_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'scripts', 'main.py')

    # Ejecutar el script
    run(['python', script_path])

    return redirect(url_for('success'))

@app.route('/error')
def error():
    return 'Algo salio mals'

if __name__ == '__main__':
    app.run(debug=True)