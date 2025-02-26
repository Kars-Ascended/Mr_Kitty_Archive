// AlbumInfo

function openInfo() {
  document.getElementById("myInfo").style.display = "block";
}

function closeInfo() {
  document.getElementById("myInfo").style.display = "none";
}

// Lyrics

  // DEATH 

function openLyricsInahle() {
  document.getElementById("lyrics Inhale").style.display = "block";
}

function openLyricsSome() {
  document.getElementById("lyrics Someday").style.display = "block";
}


// Global lyric close

function closeLyrics() {
  document.querySelectorAll(".lyrics").forEach(element => {
    element.style.display = "none";
  });
}
