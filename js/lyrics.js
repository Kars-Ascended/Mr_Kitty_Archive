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

            // Create lyrics content container
            const lyricsContent = document.createElement('div');
            lyricsContent.classList.add('lyrics-content');
            lyricsBox.appendChild(lyricsContent);

            // Append new elements
            container.appendChild(lyricsButton);
            container.appendChild(lyricsBox);

            const songTitle = container.querySelector('p').textContent.split('. ')[1];
            
            lyricsButton.addEventListener('click', () => {
                const song = currentAlbum.songs.find(song => song.title === songTitle);
                if (song) {
                    lyricsContent.innerHTML = song.lyrics ? song.lyrics.replace(/\n/g, '<br>') : 'Lyrics not available';
                    lyricsBox.style.display = 'block';
                    
                    // Create close button
                    const closeButton = document.createElement('button');
                    closeButton.textContent = 'Close';
                    closeButton.classList.add('close-button');
                    lyricsBox.appendChild(closeButton);

                    // Create download button and check if LRC file exists
                    const lrcPath = `/assets/lrc_files/${currentAlbum.albumTitle}/${song.title}.lrc`;
                    fetch(lrcPath)
                        .then(response => {
                            if (response.ok) {
                                const downloadButton = document.createElement('button');
                                downloadButton.textContent = 'Download LRC';
                                downloadButton.classList.add('download-button');
                                
                                downloadButton.onclick = async () => {
                                    try {
                                        const response = await fetch(lrcPath);
                                        const blob = await response.blob();
                                        const url = window.URL.createObjectURL(blob);
                                        const a = document.createElement('a');
                                        a.href = url;
                                        a.download = `${song.title}.lrc`;
                                        document.body.appendChild(a);
                                        a.click();
                                        window.URL.revokeObjectURL(url);
                                        document.body.removeChild(a);
                                    } catch (error) {
                                        console.error('Error downloading LRC file:', error);
                                    }
                                };
                                
                                lyricsBox.appendChild(downloadButton);
                            }
                        })
                        .catch(error => {
                            console.error('Error checking LRC file:', error);
                        });
                    
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
