<head>
    <title>Lyrics</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/meta.css">
</head>
<body>
    <div class="main">
        <p>test</p>
        <button class="btn" onclick="openLyricsInahle()">Lyrics</button>
        <div class="albumInfo lyrics" id="lyrics Inhale">
            <h1>Lyrics</h1>
            <button type="button" class="btn" onclick="closeLyrics()">Close</button>
        </div>
        <button class="btn" onclick="openLyricsSome()">Lyrics</button>
        <div class="albumInfo lyrics" id="lyrics Someday">
            <h1>Lyrics2</h1>
            <button type="button" class="btn" onclick="closeLyrics()">Close</button>
        </div>

    <script src="/js/albumInfo.js"></script>
</body>
</html>