import React, { useState, useEffect } from 'react';

const InstagramWidget = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://graph.instagram.com/theblueskiesacademy/media?fields=id,media_type,media_url,thumbnail_url&access_token=${process.env.ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(data => setPhotos(data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="instagram-widget">
      {photos.map(photo => (
        <a href={`https://www.instagram.com/theblueskiesacademy/${photo.id}`} key={photo.id} target="_blank" rel="noopener noreferrer">
          <img src={photo.thumbnail_url} alt={`Instagram post ${photo.id}`} />
        </a>
      ))}
    </div>
  );
};

export default InstagramWidget;
