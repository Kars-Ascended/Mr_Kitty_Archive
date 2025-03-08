document.addEventListener('DOMContentLoaded', function() {
    // Get current album title from the page title
    const pageTitle = document.title;

    fetch('/backend/songlist.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            // Find album based on page title
            const currentAlbum = data.albums.find(album => album.albumTitle === pageTitle);
            
            if (!currentAlbum) {
                console.error('Album not found:', pageTitle);
                return;
            }

            document.querySelectorAll('.song-container').forEach(container => {
                const songTitle = container.querySelector('p').textContent.split('. ')[1];
                const button = container.querySelector('.lyrics-button');
                const lyricsBox = container.querySelector('.lyrics-box');
                
                // Create close button
                const closeButton = document.createElement('button');
                closeButton.textContent = 'Close';
                closeButton.classList.add('close-button');
                lyricsBox.appendChild(closeButton);
                
                button.addEventListener('click', () => {
                    const song = currentAlbum.songs.find(song => song.title === songTitle);
                    if (song) {
                        lyricsBox.innerHTML = song.lyrics.replace(/\/n/g, '<br>');
                        lyricsBox.style.display = 'block';
                        
                        // Re-add close button after innerHTML change
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