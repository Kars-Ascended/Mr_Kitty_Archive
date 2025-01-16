<head>
    <title>Releases</title>
    <?php include "../../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/audio.css">
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/flex-songs.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/meta.css">
</head>
<body>
    <div class="main">
        <?php include "../../backend/meta/wip.php" ?> 
        <h1 class="centre">Releases</h1>
        <div class="buttons">
        <button class="toggleButton button" data-target="div1">D E A T H</button>
        <button class="toggleButton button" data-target="div2">ETERNITY</button>
        <button class="toggleButton button" data-target="div3">Life</button>
        <button class="toggleButton button" data-target="div4">Time</button>
        <button class="toggleButton button" data-target="div5">Fragments</button>
        <button class="toggleButton button" data-target="div6">-+</button>
        <button class="toggleButton button" data-target="div7">A.I.</button>
        <button class="toggleButton button" data-target="div8">Ephemeral</button>
        <button class="toggleButton button" data-target="div9">Unreal</button>
        <button class="toggleButton button" data-target="div10">...</button>
        <div id="div1" class="toggleDiv">
            <div class="audio-player">
            <button onclick="audio.play()">Play</button>
            <button onclick="audio.pause()">Pause</button>
            <input type="range" id="progress" value="0" step="0.1" onchange="updateTime()">
            <span id="time">0:00</span>
            </div>
            <audio id="audio" src="https://drive.google.com/uc?id=14X-8emJKGpaUZ50J6A8FrN3hXyyUo-Ze&export=download"></audio>


        </div>
        <div id="div2" class="toggleDiv"></div>
        <div id="div3" class="toggleDiv"></div>
        <div id="div4" class="toggleDiv"></div>
        <div id="div5" class="toggleDiv"></div>
        <div id="div6" class="toggleDiv"></div>
        <div id="div7" class="toggleDiv"></div>
        <div id="div8" class="toggleDiv"></div>
        <div id="div9" class="toggleDiv"></div>
        <div id="div10" class="toggleDiv">???</div>
        </div>
    </div>
        <script src="/js/gd-audio.js"></script>
        <script src="/js/flex-songs.js"></script>
</body>
</html>