<head>
    <title>Releases</title>
    <?php include "../../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/flex-songs.css">
    <link rel="stylesheet" href="/css/nav.css">
    <link rel="stylesheet" href="/css/wip.css">
    <link rel="stylesheet" href="/css/table.css">
</head>
<body>
    <div class="main">
        <?php include "../../backend/wip.php" ?> 
        <h1 class="centre">Releases</h1>
        
        <button class="toggleButton" data-target="div1">DEATH</button>
        <button class="toggleButton" data-target="div2">ETERNITY</button>
        <button class="toggleButton" data-target="div3">Life</button>
        <div id="div1" class="toggleDiv">This is Div 1.</div>
        <div id="div2" class="toggleDiv">This is Div 2.</div>
        <div id="div3" class="toggleDiv">This is Div 3.</div>
    </div>
        <script src="/js/flex-songs.js"></script>
</body>
</html>