document.addEventListener('DOMContentLoaded', function() {
    const pageTitle = document.title;

    // Function to setup song containers
    function setupSongContainer(container) {
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
    }

    // Find all song containers and set them up
    document.querySelectorAll('.song-container').forEach(container => {
        if (container.querySelector('p') && !container.querySelector('.lyrics-button')) {
            setupSongContainer(container);
        }
    });

    fetch('/backend/songlist.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            const currentAlbum = data.albums.find(album => album.albumTitle === pageTitle);
            
            if (!currentAlbum) {
                console.error('Album not found:', pageTitle);
                return;
            }

            document.querySelectorAll('.song-container').forEach(container => {
                const songTitle = container.querySelector('p').textContent.split('. ')[1];
                const button = container.querySelector('.lyrics-button');
                const lyricsBox = container.querySelector('.lyrics-box');
                
                button.addEventListener('click', () => {
                    const song = currentAlbum.songs.find(song => song.title === songTitle);
                    if (song) {
                        lyricsBox.innerHTML = song.lyrics.replace(/\/n/g, '<br>');
                        lyricsBox.style.display = 'block';
                        
                        // Create close button
                        const closeButton = document.createElement('button');
                        closeButton.textContent = 'Close';
                        closeButton.classList.add('close-button');
                        lyricsBox.appendChild(closeButton);
                        
                        closeButton.addEventListener('click', () => {
                            lyricsBox.style.display = 'none';
                            button.textContent = 'Show Lyrics';
                        });
                    }
                });
            });
        })
        .catch(error => console.error('Error loading lyrics:', error));
});

// Global lyric close

function closeLyrics() {
    document.querySelectorAll(".lyrics").forEach(element => {
      element.style.display = "none";
    });
  }
  