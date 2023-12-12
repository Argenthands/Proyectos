# Importar
from VideoGenerator import crear_video
from ImageResizer import resizor

if __name__ == '__main__':
    # Redimensionar imágenes
    list_of_images = ['assets/images/Image1.jpg', 'assets/images/Image2.jpg', 'assets/images/Image3.jpg']
    resizor(list_of_images)
    list_of_resized_images = ['assets/images/Image1_resized.jpg', 'assets/images/Image2_resized.jpg', 'assets/images/Image3_resized.jpg']
    music = 'assets/musics/music.mp3'
    crear_video(audio_path=music, images=list_of_resized_images)