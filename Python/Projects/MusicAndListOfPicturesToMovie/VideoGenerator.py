from moviepy.editor import ImageSequenceClip, ImageClip, concatenate_videoclips

def crear_video(images, output_path='video.mp4', fps=24, remove_temp=True, codec="libx264", audio_codec="aac", video_time=1):
    clips = []

    for image_path in images:
        clip = ImageClip(image_path).set_duration(video_time)  # Puedes ajustar la duración según tus necesidades
        clips.append(clip)

    video_clip = concatenate_videoclips(clips, method="compose")
    video_clip.write_videofile(output_path, fps=fps, remove_temp=remove_temp, codec=codec, audio_codec=audio_codec)
