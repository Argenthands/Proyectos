from moviepy.editor import AudioFileClip, concatenate_videoclips, VideoFileClip
from CreateVideoFromImages import create_video_from_images

def create_video(
        audio_path, 
        images,
        extra_video,
        after_or_before, 
        output_path='video.mp4', 
        fps=24, 
        remove_temp=True, 
        codec="libx264", 
        audio_codec="aac", 
        video_time=4, 
        transition_time=0.5
):
    
    clips = create_video_from_images(images=images, clip_time=video_time, transition_time=transition_time)
    video_clip = concatenate_videoclips(clips, method="compose")

    audio = AudioFileClip(audio_path)
    audio = audio.set_duration(len(clips) * (video_time - (transition_time * 2)))
    video_clip = video_clip.set_audio(audio)
    
    if extra_video is not None:
        extra_video = VideoFileClip(extra_video)
        extra_video = extra_video.set_duration(extra_video.duration)
        if after_or_before == 'before':
            video_clip = concatenate_videoclips([extra_video, video_clip], method="compose")
        elif after_or_before == 'after':
            video_clip = concatenate_videoclips([video_clip, extra_video], method="compose")
        else:
            print('there is no option for after_or_before')

    video_clip.write_videofile(output_path, fps=fps, remove_temp=remove_temp, codec=codec, audio_codec=audio_codec)
    audio.close()