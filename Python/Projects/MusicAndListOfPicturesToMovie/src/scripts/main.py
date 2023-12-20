from GetAndRemoveFiles import Get_elements_from_directory, Remove_elements_from_the_directory
from ImageResizer import resizor
from VideoGenerator import create_video

if __name__ == '__main__':
    # Redimensionar imágenes
    list_of_images = Get_elements_from_directory('assets/images/Input/')
    resizor(list_of_images)
    list_of_resized_images = Get_elements_from_directory('assets/images/Resized/')
    music = Get_elements_from_directory('assets/sound/')[0]
    extra_video = Get_elements_from_directory('assets/videos/')
    if len(extra_video) > 0:
        extra_video = extra_video[0]
    else:
        extra_video = None
    create_video(audio_path=music, images=list_of_resized_images, after_or_before='after', extra_video=extra_video)
    print(Remove_elements_from_the_directory('assets/images/Resized/'))
    print(Remove_elements_from_the_directory('assets/images/Input/'))
    print(Remove_elements_from_the_directory('assets/videos/'))
    print(Remove_elements_from_the_directory('assets/sound/'))