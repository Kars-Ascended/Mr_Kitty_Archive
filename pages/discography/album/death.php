<head>
    <title>Template</title>
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
            </div>
            <div class="element-box">
                2. Someday
                <audio controls></audio>
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

<script>
function openInfo() {
  document.getElementById("myInfo").style.display = "block";
}

function closeInfo() {
  document.getElementById("myInfo").style.display = "none";
}
</script>
</body>
</html>