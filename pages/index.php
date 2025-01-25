<head>
    <title>Home</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/meta.css">
    <link rel="stylesheet" href="/css/home.css">
    
    <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>✨Mr.Kitty Archive✨</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  
</head>
<body>
  <!-- Header Section -->
  <header class="header">
    <div class="container">
      <h1 class="logo">✨Mr.Kitty Archive✨</h1>
      <nav class="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#songs">Songs</a></li>
          <li><a href="#demos">Demos</a></li>
          <li><a href="#lyrics">Lyrics</a></li>
          <li><a href="#updates">Updates</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container">
      <h2>Welcome to the ✨Mr.Kitty Archive✨</h2>
      <p>Your ultimate source for all things Mr.Kitty - demos, lyrics, updates, and more!</p>
      <div class="search-bar">
        <input type="text" placeholder="Search for anything...">
        <button>&rarr;</button>
      </div>
    </div>
    <div class="background">
      <!-- Animated Crosses -->
      <div class="cross" style="top: 10%; left: 20%; animation-duration: 8s;"><span>&#10013;</span></div>
      <div class="cross" style="top: 30%; left: 50%; animation-duration: 6s;"><span>&#10013;</span></div>
      <div class="cross" style="top: 70%; left: 80%; animation-duration: 12s;"><span>&#10013;</span></div>
      <div class="cross" style="top: 50%; left: 10%; animation-duration: 10s;"><span>&#10013;</span></div>
      <div class="cross" style="top: 80%; left: 40%; animation-duration: 7s;"><span>&#10013;</span></div>
    </div>
  </section>

  <!-- Songs Section -->
  <section id="songs" class="section">
    <div class="container">
      <h2>Songs</h2>
      <p>Explore Mr.Kitty's music catalog. Here are two tracks to enjoy:</p>

      <!-- Song 1 -->
      <div class="audio-player">
        <p><strong>After Dark</strong></p>
        <audio controls>
          <source src="https://example.com/audio/after-dark.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>

      <!-- Song 2 -->
      <div class="audio-player">
        <p><strong>Destroy Me</strong></p>
        <audio controls>
          <source src="https://example.com/audio/destroy-me.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>

    </div>
  </section>

  <!-- Demos Section -->
  <section id="demos" class="section">
    <div class="container">
      <h2>Demos</h2>
      <p>Discover rare and unreleased demos. (Placeholders for now!)</p>
      <div class="grid">
        <div class="placeholder-card">Demo Placeholder 1</div>
        <div class="placeholder-card">Demo Placeholder 2</div>
        <div class="placeholder-card">Demo Placeholder 3</div>
      </div>
    </div>
  </section>

  <!-- Lyrics Section -->
  <section id="lyrics" class="section">
    <div class="container">
      <h2>Lyrics</h2>
      <p>Search for lyrics or browse through albums. (Placeholders for now!)</p>
      <div class="grid">
        <div class="placeholder-card">Lyrics Placeholder 1</div>
        <div class="placeholder-card">Lyrics Placeholder 2</div>
        <div class="placeholder-card">Lyrics Placeholder 3</div>
      </div>
    </div>
  </section>

  <!-- Updates Section -->
  <section id="updates" class="section">
    <div class="container">
      <h2>Updates</h2>
      <p>Stay up-to-date with the latest news about Mr.Kitty.</p>
      <ul class="updates-list">
        <li>Update 1: Placeholder update for now!</li>
        <li>Update 2: Placeholder update for now!</li>
        <li>Update 3: Placeholder update for now!</li>
      </ul>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <div class="container">
      <h2>About</h2>
      <p>Learn more about Mr.Kitty and the archive.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci ut neque luctus malesuada.</p>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 ✨Mr.Kitty Archive✨ | All Rights Reserved</p>
    </div>
  </footer>
</body>
</html>

</body>
</html>