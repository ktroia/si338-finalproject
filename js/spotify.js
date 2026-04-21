   // https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api 
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('spotify-embed');
      const options = {
        width: '100%',
        uri: 'spotify:track:6UgJhdaU0kNZV1OJNXoREJ'
      };
      const callback = (EmbedController) => {
        document.querySelectorAll('.song').forEach(
          song => {
            song.addEventListener('click', () => {
              EmbedController.loadUri(song.dataset.spotifyId)
            });
          })
      };
      IFrameAPI.createController(element, options, callback);
    };