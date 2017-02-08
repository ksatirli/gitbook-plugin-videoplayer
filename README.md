# Video Player for your GitBook

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["video-player"]
}
```

First, add the required scripts and stylesheet(s) to your page by adding:

```
{% videoplayerscripts %}{% endvideoplayerscripts %}
```

You can now add MP4 and WebM videos to your book using this tag:

```markdown
{% videoplayer id="myvideo" width="640" height="480" posterExt="png" %}https://s3.amazonaws.com/gitbooks/myvideo{% endvideoplayer %}
```

The player will automatically load the `myvideo.mp4` file for showing MP4-encoded videos. Likewise, it will default to `myvideo.webm` for WebM-encoded videos.
