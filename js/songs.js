async function loadSongs() {
    try {
        const response = await fetch('/backend/songlist.yaml');
        const yamlText = await response.text();
        const data = jsyaml.load(yamlText);

        const pageTitle = document.title.trim(); // Get current page title
        const container = document.querySelector('.songs'); // Adjust selector as needed
        container.innerHTML = ""; // Clear existing songs

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
                
                // Add song title
                const songTitle = document.createElement("p");
                songTitle.textContent = `${index + 1}. ${song.title}`;
                titleContainer.appendChild(songTitle);
                
                // Check for explicit tag and add image if present
                if (song.explicit) {
                    const explicitImg = document.createElement("img");
                    explicitImg.src = "/assets/sotd_icons/explicit.png";
                    explicitImg.alt = "Explicit";
                    explicitImg.classList.add("explicit-icon");
                    titleContainer.appendChild(explicitImg);
                }
                
                songDiv.appendChild(titleContainer);
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

loadSongs();
