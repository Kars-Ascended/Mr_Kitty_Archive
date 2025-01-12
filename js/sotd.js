fetch('/backend/songlist.yaml')
  .then(response => response.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText); // Parse YAML
    const songs = [];

    // Flatten songs and include albumCover
    data.albums.forEach(album => {
      album.songs.forEach(song => {
        songs.push({
          ...song,
          albumCover: album.albumCover
        });
      });
    });

    // Generate a consistent random index based on today's date
    const today = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
    const hash = Array.from(today).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const randomIndex = hash % songs.length;

    // Select the song
    const songOfTheDay = songs[randomIndex];

    // Update the page
    document.querySelector('#title').innerText = songOfTheDay.title;
    document.querySelector('#albumCover').src = songOfTheDay.albumCover;

    // Set Spotify and YouTube links
    if (songOfTheDay.spotifyLink) {
      document.querySelector('#spotifyLink').href = songOfTheDay.spotifyLink;
    } else {
      document.querySelector('#spotifyLink').style.display = 'none';
    }

    if (songOfTheDay.youtubeLink) {
      document.querySelector('#youtubeLink').href = songOfTheDay.youtubeLink;
    } else {
      document.querySelector('#youtubeLink').style.display = 'none';
    }
    
    // Set file download link
    if (songOfTheDay.filePath) {
      document.querySelector('#fileDownloadLink').href = songOfTheDay.filePath;
    } else {
      document.querySelector('#fileDownloadLink').style.display = 'none';
    }
  });
