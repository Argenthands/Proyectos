from PIL import Image

def resize_image(input_image, output_path, size=(1920, 1080)):
    original_image = Image.open(input_image)
    original_image.resize(size).save(output_path)

def resizor(images):
    for image_path in images:
        image_output_path = image_path.replace('Input', 'Resized')
        resize_image(input_image=image_path, output_path=image_output_path)
