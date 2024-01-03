# Dockerfile

# Utiliza la imagen base de Ubuntu 20.04
FROM ubuntu:20.04

# Actualiza el sistema e instala las dependencias
RUN apt-get update && \
    apt-get install -y python3 python3-pip

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY . /app

# Instala las dependencias de tu aplicación
RUN pip3 install -r requirements.txt

# Expone el puerto en el que la aplicación va a correr
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python3", "app.py"]
