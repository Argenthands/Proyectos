from moviepy.editor import  ImageSequenceClip, ImageClip, AudioFileClip, concatenate_videoclips, vfx, TextClip, CompositeVideoClip, VideoFileClip

def crear_video(audio_path, images, output_path='video.mp4', fps=24, remove_temp=True, codec="libx264", audio_codec="aac", video_time=3, transition_time=1):
    clips = []

    #Manejo de excepciones:

    for image_path in images:
        clip = ImageClip(image_path).set_duration(video_time).fx(vfx.fadein, transition_time).fx(vfx.fadeout, transition_time)
        clips.append(clip)

    video_clip = concatenate_videoclips(clips, method="compose")

    audio = AudioFileClip(audio_path)
    audio = audio.set_duration(len(clips) * (video_time + transition_time))
    video_clip = video_clip.set_audio(audio)

    video_clip.write_videofile(output_path, fps=fps, remove_temp=remove_temp, codec=codec, audio_codec=audio_codec)
