import React, { useEffect, useRef } from 'react';

function InstaLive() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize the Instagram Graph API
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : 'your-app-id',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
      });
        
      // Initiate the Instagram Live stream
      window.FB.api(
        '/me/live_videos',
        'POST',
        {
          access_token: 'your-access-token',
          status: 'LIVE_NOW'
        },
        function(response) {
          if (!response || response.error) {
            console.log(response.error);
          } else {
            // Get the Instagram Live video URL and embed it in the video player
            const videoUrl = response.stream_url;
            const videoPlayer = videoRef.current;
            videoPlayer.src = videoUrl;
            videoPlayer.play();
          }
        }
      );
    };
      
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className=''>
      <video ref={videoRef} />
    </div>
  );
}

export default InstaLive;
