import os
from GetAndRemoveFiles import Get_elements_from_directory, Remove_elements_from_the_directory
from ImageResizer import resizor
from VideoGenerator import create_video

if __name__ == '__main__':
    # Obtén la ruta absoluta del directorio actual del script
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Construye las rutas absolutas a partir del directorio actual
    input_images_directory = os.path.join(current_directory, 'assets/images/Input/')
    resized_images_directory = os.path.join(current_directory, 'assets/images/Resized/')
    music_directory = os.path.join(current_directory, 'assets/sound/')
    extra_video_directory = os.path.join(current_directory, 'assets/videos/Input/')
    output_directory = os.path.join(current_directory, 'assets/videos/output/')

    # Redimensionar imágenes
    list_of_images = Get_elements_from_directory(input_images_directory)
    resizor(list_of_images)
    list_of_resized_images = Get_elements_from_directory(resized_images_directory)
    music = Get_elements_from_directory(music_directory)[0]
    extra_video = Get_elements_from_directory(extra_video_directory)
    if len(extra_video) > 0:
        extra_video = extra_video[0]
    else:
        extra_video = None
    # Llama a create_video usando una ruta absoluta para el archivo de salida
    output_path = os.path.abspath(os.path.join(output_directory, 'video.mp4'))
    create_video(
        audio_path=music,
        images=list_of_resized_images, 
        after_or_before='after', 
        extra_video=extra_video, 
        output_path=output_path
    )
    print(Remove_elements_from_the_directory(input_images_directory))
    print(Remove_elements_from_the_directory(resized_images_directory))
    print(Remove_elements_from_the_directory(music_directory))
    print(Remove_elements_from_the_directory(extra_video_directory))