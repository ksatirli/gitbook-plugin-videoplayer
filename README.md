# GitBook Plugin: Video Player

> This repository is a [GitBook](https://gitbook.com/) Plugin for adding `video.js` support to your GitBook. Protection resources.

## This project is no longer maintained

The _GitBook Plugin: Video Player_ is no longer actively maintained and is only made available here for reference. The project itself is still capable of providing `video.js` functionality for GitBook.

What follows is the original `README.md`:

---

## Table of Contents

- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Author Information](#author-information)
- [License](#license)

## Requirements

This plugin requires `gitbook` version `2.0.x` or newer.

## Dependencies

This plugin depends on assets from the [video.js](http://videojs.com) project.

## Usage

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

## Author Information

This module is currently maintained by the individuals listed below.

- [Kerim Satirli](https://github.com/ksatirli)

## License

Copyright 2015-2017 [Kerim Satirli](https://github.com/ksatirli)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at [apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an _"AS IS"_ basis, without WARRANTIES or conditions of any kind, either express or implied.

See the License for the specific language governing permissions and limitations under the License.
