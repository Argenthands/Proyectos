# Importar
from GetAndRemoveFiles import Get_images_from_directory, Remove_images_from_the_list
from ImageResizer import resizor
from VideoGenerator import crear_video

if __name__ == '__main__':
    # Redimensionar imágenes
    list_of_images = Get_images_from_directory('assets/images/')
    resizor(list_of_images)
    list_of_resized_images = ['assets/images/Image1_resized.jpg', 'assets/images/Image2_resized.jpg', 'assets/images/Image3_resized.jpg']
    music = 'assets/musics/music.mp3'
    crear_video(audio_path=music, images=list_of_resized_images)