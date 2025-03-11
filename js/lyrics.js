document.addEventListener('DOMContentLoaded', function() {
    const pageTitle = document.title;

    fetch('/backend/songlist.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            setupLyrics(data);
        })
        .catch(error => console.error('Error loading lyrics:', error));
});

function setupLyrics(data) {
    const pageTitle = document.title;
    const currentAlbum = data.albums.find(album => album.albumTitle === pageTitle);
    
    if (!currentAlbum) {
        console.error('Album not found:', pageTitle);
        return;
    }

    // Setup song containers
    document.querySelectorAll('.song-container').forEach(container => {
        if (container.querySelector('p') && !container.querySelector('.lyrics-button')) {
            // Create button
            const lyricsButton = document.createElement('button');
            lyricsButton.textContent = 'Show Lyrics';
            lyricsButton.classList.add('lyrics-button');
            
            // Create lyrics box
            const lyricsBox = document.createElement('div');
            lyricsBox.classList.add('lyrics-box');
            lyricsBox.style.display = 'none';

            // Append new elements
            container.appendChild(lyricsButton);
            container.appendChild(lyricsBox);

            const songTitle = container.querySelector('p').textContent.split('. ')[1];
            
            lyricsButton.addEventListener('click', () => {
                const song = currentAlbum.songs.find(song => song.title === songTitle);
                if (song) {
                    lyricsBox.innerHTML = song.lyrics ? song.lyrics.replace(/\/n/g, '<br>') : 'Lyrics not available';
                    lyricsBox.style.display = 'block';
                    
                    // Create close button
                    const closeButton = document.createElement('button');
                    closeButton.textContent = 'Close';
                    closeButton.classList.add('close-button');
                    lyricsBox.appendChild(closeButton);
                    
                    closeButton.addEventListener('click', () => {
                        lyricsBox.style.display = 'none';
                    });
                }
            });
        }
    });
}

// Global lyric close

function closeLyrics() {
    document.querySelectorAll(".lyrics").forEach(element => {
      element.style.display = "none";
    });
  }
