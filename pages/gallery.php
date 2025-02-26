<head>
    <title>Gallery</title>
    <?php include "../backend/nav.php" ?> 
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/meta.css">
</head>




<body>
    <div class="main">
    <?php
        $directory = "../assets/gallery"; // Change this to your folder
        $files = scandir($directory);
        $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'webm'];

        echo '<input type="range" id="sizeSlider" min="50" max="300" value="150">';

        echo '<div id="gallery">';
        foreach ($files as $file) {
            $ext = pathinfo($file, PATHINFO_EXTENSION);
            if (in_array(strtolower($ext), $allowed_extensions)) {
                if (in_array($ext, ['mp4', 'webm'])) {
                    echo "<video controls width='200' class='media'><source src='$directory/$file' type='video/$ext'></video>";
                } else {
                    echo "<img src='$directory/$file' class='media' width='200'>";
                }
            }
        }
        echo '</div>';
    ?>

    </div>
<script src="/js/gallery.js"></script>
</body>
</html>