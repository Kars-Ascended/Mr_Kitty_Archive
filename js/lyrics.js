async function loadLyrics(albumTitle, songTitle) {
    try {
        const response = await fetch('/backend/lyrics.yaml');
        const yamlText = await response.text();
        const yamlData = jsyaml.load(yamlText);

        // Find the album
        const album = yamlData.albums.find(a => a.albumTitle === albumTitle);
        if (!album) return console.error("Album not found:", albumTitle);

        // Find the song
        const song = album.songs.find(s => s.title === songTitle);
        if (!song) return console.error("Song not found:", songTitle);

        // Sanitize ID by removing non-alphanumeric characters
        const safeAlbum = albumTitle.replace(/[^a-zA-Z0-9]/g, '');
        const safeSong = songTitle.replace(/[^a-zA-Z0-9]/g, '');
        const lyricsBox = document.getElementById(`lyrics-${safeAlbum}-${safeSong}`);

        lyricsBox.innerHTML = `<h3>${song.title}</h3><p>${song.lyrics.replace(/\/n /g, '<br>')}</p>
                       <button onclick="closeLyrics('${albumTitle}', '${songTitle}')">Close</button>`;

        lyricsBox.style.display = 'block';
    } catch (error) {
        console.error("Error loading lyrics:", error);
    }
}

function closeLyrics(albumTitle, songTitle) {
    const safeAlbum = albumTitle.replace(/[^a-zA-Z0-9]/g, '');
    const safeSong = songTitle.replace(/[^a-zA-Z0-9]/g, '');
    document.getElementById(`lyrics-${safeAlbum}-${safeSong}`).style.display = 'none';
}