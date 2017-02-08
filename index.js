'use strict';

module.exports = {
  blocks: {
    videoplayerScripts: {
      process: function() {
        return '<link href="https://vjs.zencdn.net/5.15.1/video-js.css"' +
        'rel="stylesheet"><script src="https://vjs.zencdn.net/5.15.1/video.js"' +
        '></script>';
      }
    },

    videoplayer: {
      process: function(block) {

        return '<video id="' + block.kwargs.posterExt + '" class="video-js"' +
          'controls preload="auto" width="' + block.kwargs.width +
          '"height="' + block.kwargs.height + '" poster="' + block.body + '.' +
          block.kwargs.posterExt + '" data-setup="{}">' +
          '<source src="' + block.body + '.mp4" type="video/mp4">' +
          '<source src="' + block.body + '.webm" type="video/webm">' +
          '</video>';
      }
    }
  }
};
