import os

def Get_images_from_directory(directory):
    images = []
    for file in os.listdir(directory):
        if file.endswith(".jpg"):
            images.append(directory + file)
    return images

def Remove_images_from_the_list(directory):
    list = Get_images_from_directory(directory)
    for file in list:
        os.remove(file)
    return f'All files from {directory} were removed.'