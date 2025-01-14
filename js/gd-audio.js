const audio = document.getElementById('audio');
        const progress = document.getElementById('progress');
        const time = document.getElementById('time');

        // Update progress bar as audio plays
        audio.addEventListener('timeupdate', () => {
            progress.value = audio.currentTime / audio.duration;
            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
            time.textContent = `${minutes}:${seconds}`;
        });

        // Update audio time when progress bar is adjusted
        function updateTime() {
            audio.currentTime = progress.value * audio.duration;
        }