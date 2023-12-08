#import os
from moviepy.editor import ImageSequenceClip, ImageClip, concatenate_videoclips

clips = []
clip1 = ImageClip('images/Image1.jpg').set_duration(2)
clip2 = ImageClip('images/Image2.jpg').set_duration(3)
clip3 = ImageClip('images/Image3.jpg').set_duration(1)
clips.append(clip1)
clips.append(clip2)
clips.append(clip3)
video_clip =  concatenate_videoclips(clips, method="compose")
video_clip.write_videofile('video.mp4', fps=24, remove_temp=True, codec="libx264", audio_codec="aac")