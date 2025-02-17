<head>
    <title>Template</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
    <script defer src="/js/lyrics.js"></script>
    <?php include "../../../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/meta.css">
</head>
<body>
    <div class="main">
    <div class="main-container">
            <div class="element-box">
                1. Inhale, Exhale
                <audio controls></audio>
                <button class="btn" onclick="openLyricsInahle()">Lyrics</button>
                <div class="albumInfo lyrics" id="lyrics Inhale">
                    <h1>Lyrics</h1>
                    <button type="button" class="btn" onclick="closeLyrics()">Close</button>
                </div>
            </div>

            <div class="element-box">
                2. Someday
                <audio controls></audio>
                <button class="btn" onclick="openLyricsSome()">Lyrics</button>
                <div class="albumInfo lyrics" id="lyrics Someday">
                    <h1>Lyrics2</h1>
                    <button type="button" class="btn" onclick="closeLyrics()">Close</button>
                </div>
                
            </div>
            <div class="element-box">
                3. Neverending Nights
                <audio controls></audio>
            </div>
            <div class="element-box">
                4. Bleed black
                <audio controls></audio>
            </div>
            <button class="btn open-button" onclick="openInfo()">Open Info</button>

<div style="display: flex; justify-content: center; align-items: center;" width="100%">
<div class="albumInfo" id="myInfo">
    <h1>ALBUM INFO HERE</h1>
    <button type="button" class="btn cancel" onclick="closeInfo()">Close</button>
</div>
</div>

<script src="/js/albumInfo.js"></script>
   
</body>
</html>