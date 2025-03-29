async function loadSongs() {
    try {
        const response = await fetch('/backend/songlist.csv');
        const csvText = await response.text();
        const rows = csvText.split('\n');
        
        // CSV structure: id,album_id,title,spotify_link,youtube_link,file_path,lyrics,explicit,volume
        const data = processCSVData(rows);
        
        const pageTitle = document.title.trim();
        const container = document.querySelector('.songs');
        container.innerHTML = "";

        // Find the album that matches the page title
        const album = data.albums.find(a => a.albumTitle === pageTitle);

        if (album) {
            const albumTitle = document.createElement("h3");
            albumTitle.textContent = album.albumTitle;
            container.appendChild(albumTitle);

            album.songs.forEach((song, index) => {
                const songDiv = document.createElement("div");
                songDiv.classList.add("song-container");
                
                // Create song title container
                const titleContainer = document.createElement("div");
                titleContainer.classList.add("song-title-container");
                
                // Add song title and links if available
                const songTitle = document.createElement("p");
                songTitle.textContent = `${index + 1}. ${song.title}`;
                titleContainer.appendChild(songTitle);

                // Add links container
                const linksContainer = document.createElement("div");
                linksContainer.classList.add("song-links");

                if (song.spotify_link) {
                    const spotifyLink = document.createElement("a");
                    spotifyLink.href = song.spotify_link;
                    spotifyLink.target = "_blank";
                    spotifyLink.innerHTML = '<img src="/assets/sotd_icons/spotify.png" alt="Spotify">';
                    linksContainer.appendChild(spotifyLink);
                }

                if (song.youtube_link) {
                    const youtubeLink = document.createElement("a");
                    youtubeLink.href = song.youtube_link;
                    youtubeLink.target = "_blank";
                    youtubeLink.innerHTML = '<img src="/assets/sotd_icons/youtube.png" alt="YouTube">';
                    linksContainer.appendChild(youtubeLink);
                }
                
                // Check for explicit tag and add image if present
                if (song.explicit) {
                    const explicitImg = document.createElement("img");
                    explicitImg.src = "/assets/sotd_icons/explicit.png";
                    explicitImg.alt = "Explicit";
                    explicitImg.classList.add("explicit-icon");
                    titleContainer.appendChild(explicitImg);
                }
                
                // Check for volume tag and add image if present
                if (song.volume) {
                    const volumeImg = document.createElement("img");
                    volumeImg.src = "/assets/sotd_icons/volume.png";
                    volumeImg.alt = "High Volume";
                    volumeImg.classList.add("volume-icon");
                    titleContainer.appendChild(volumeImg);
                }
                
                songDiv.appendChild(titleContainer);
                songDiv.appendChild(linksContainer);
                container.appendChild(songDiv);
            });

            // After adding all songs, set up the lyrics functionality
            setupLyrics(data);
        } else {
            container.innerHTML = "<p>No songs found for this album.</p>";
        }
    } catch (error) {
        console.error("Error loading songs:", error);
    }
}

function parseCSVLine(line) {
    const result = [];
    let cell = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
            continue;
        }
        
        if (char === ',' && !inQuotes) {
            result.push(cell.trim());
            cell = '';
            continue;
        }
        
        cell += char;
    }
    
    // Push the last cell
    result.push(cell.trim());
    return result;
}

function processCSVData(rows) {
    // Skip header row
    const dataRows = rows.slice(1);
    const albums = new Map();

    dataRows.forEach(row => {
        if (typeof row === 'string') {
            row = parseCSVLine(row);
        }
        
        if (row.length < 9) return;
        
        const [id, album_id, title, spotify_link, youtube_link, file_path, explicit, volume, lyrics] = row;
        
        if (!album_id || !title) return;
        
        if (!albums.has(album_id)) {
            albums.set(album_id, {
                albumTitle: album_id,
                songs: []
            });
        }

        // Update boolean conversion logic
        const explicitValue = explicit?.trim().toUpperCase() === 'TRUE';
        const volumeValue = volume?.trim().toUpperCase() === 'TRUE';

        albums.get(album_id).songs.push({
            id,
            title,
            spotify_link,
            youtube_link,
            file_path,
            explicit: explicitValue,
            volume: volumeValue,
            lyrics
        });
    });

    return {
        albums: Array.from(albums.values())
    };
}

loadSongs();