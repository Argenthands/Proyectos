from moviepy.editor import ImageClip, vfx


def create_video_from_images(images, clip_time, transition_time):
    clips = []
    for image_path in images:
        clip = ImageClip(image_path).set_duration(clip_time - (transition_time * 2)).fx(vfx.fadein, transition_time).fx(vfx.fadeout, transition_time)
        clips.append(clip)
    return clips
