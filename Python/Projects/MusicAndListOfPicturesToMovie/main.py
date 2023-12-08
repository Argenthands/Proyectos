# Importar
from VideoGenerator import crear_video
from ImageResizer import resizor

if __name__ == '__main__':
    # Redimensionar imágenes
    list_of_images = ['images/Image1.jpg', 'images/Image2.jpg', 'images/Image3.jpg']
    resizor(list_of_images)
    list_of_resized_images = ['images/Image1_resized.jpg', 'images/Image2_resized.jpg', 'images/Image3_resized.jpg']
    crear_video(list_of_resized_images)