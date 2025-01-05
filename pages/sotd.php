<head>
    <title>Song Of The Day</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/sotd.css">
    <link rel="stylesheet" href="/css/wip.css">
</head>
<body>
    <div class="main">
        <?php include "../backend/wip.php" ?> 
        <h1 class="centre">Song Of The Day</h1>
        <br>
        <div class="sotd">
            <div class="title">
                <h1 id="title" class="test">Song Title</h1>
            </div>
            <a id="link" href="#" target="_blank">Listen Here</a>
            <img id="albumCover" src="" alt="Album Cover" />
        </div>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
    <script src="/js/sotd.js"></script>
</body>
</html>

