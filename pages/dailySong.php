<head>
    <title>Song Of The Day</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/sotd.css">
</head>
<body>
    <div class="main">
      <h1 class="centre">Song Of The Day</h1>
      <br>
      <div class="sotd">
        <div class="title">
          <h1 id="title">Song Title</h1>
          <div id="explicitWarning" class="explicit">
            <img src="\assets\images\sotd_icons\explicit.png">
          </div>
        </div>

        <img id="albumCover" src="" alt="Album Cover" />

        <div class="links" id="link">
          <a id="spotifyLink" href="" target="_blank">
            <img src="/assets/sotd_icons/spotify.png" alt="Spotify Link" />
          </a>
          <a id="youtubeLink" href="" target="_blank">
            <img src="/assets/sotd_icons/youtube.png" alt="YouTube Link" />
          </a>
          <a id="fileDownloadLink" href="x" download>
            <img src="/assets/sotd_icons/folder.png" alt="Download File" />
          </a>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
    <script src="/js/sotd.js"></script>

</body>
</html>

