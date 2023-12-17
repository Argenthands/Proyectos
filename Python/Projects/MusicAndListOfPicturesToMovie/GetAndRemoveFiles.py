import os

def Get_elements_from_directory(directory):
    elements = []
    for file in os.listdir(directory):
        if file.endswith(".jpg") or file.endswith(".mp4") or file.endswith(".mp3"):
            elements.append(directory + file)
    return elements

def Remove_elements_from_the_directory(directory):
    list = Get_elements_from_directory(directory)
    for file in list:
        os.remove(file)
    return f'All files from {directory} were removed.'

