<head>
    <title>Updates</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/meta.css">
    <link rel="stylesheet" href="/css/updates.css">
</head>
<body>
    <div class="main">

        <button class="toggle-button">Subreddit</button>
        <button class="toggle-button">Website</button>
        <button class="toggle-button">Other Projects</button>

        <div class="toggle-div" id="updates-subreddit"></div>
        <div class="toggle-div" id="updates-website"></div>

    </div>

<script src="/js/updates.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-button");
    const divs = document.querySelectorAll(".toggle-div");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            divs.forEach(div => div.style.display = "none");
            divs[index].style.display = "block";
        });
    });
});
</script>
</body>
</html>