<head>
    <title>D E A T H</title>
    <?php include "../../../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/discography.css">
    <link rel="stylesheet" href="/css/lyrics.css">
    <link rel="stylesheet" href="/css/meta.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
    <script src="/js/lyrics.js"></script>

</head>
<body>
    <div class="main">
        <div>
            <p>1. Inhale, Exhale</p>
            <button onclick="loadLyrics('D E A T H', 'Inhale, Exhale')">Lyrics</button>
            <div class="lyrics-box" id="lyrics-DEATH-InhaleExhale" style="display:none;"></div>
        </div>
        <div>
            <p>2. Someday</p>
            <button onclick="loadLyrics('D E A T H', 'Someday')">Lyrics</button>
            <div class="lyrics-box" id="lyrics-DEATH-Someday" style="display:none;"></div>
        </div>
        <div>
            <p>3. Example A</p>
            <button onclick="loadLyrics('ETERNITY', 'Example A')">Lyrics</button>
            <div class="lyrics-box" id="lyrics-ETERNITY-ExampleA" style="display:none;"></div>
        </div>
        <div>
            <p>4. Example B</p>
            <button onclick="loadLyrics('ETERNITY', 'Example B')">Lyrics</button>
            <div class="lyrics-box" id="lyrics-ETERNITY-ExampleB" style="display:none;"></div>
        </div>
    </div>

</body>
</html>