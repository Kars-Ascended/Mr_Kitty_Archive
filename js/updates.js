const files = {
  "/backend/updates/subreddit.txt": "updates-subreddit",
  "/backend/updates/website.txt": "updates-website",
  "/backend/updates/mr-kitty.txt": "updates-mr-kitty"
};

Object.entries(files).forEach(([file, containerId]) => {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      // Instead of splitting by newlines first, look for complete update patterns
      const updateRegex = /\*\*\*(.*?)\*\*\* \*\*(.*?)\*\* \$\$([\s\S]*?)\$\$(?: !!(.*?)!!)?/g;
      const updates = [];
      let match;
      
      while ((match = updateRegex.exec(data)) !== null) {
        updates.push({
          title: match[1],
          date: match[2],
          message: match[3],
          image: match[4] || null
        });
      }

      const container = document.getElementById(containerId);
      updates.forEach(update => {
        const updateDiv = document.createElement("div");
        updateDiv.classList.add("update");

        const titleDateDiv = document.createElement("div");
        titleDateDiv.classList.add("title-date");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = update.title;

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = update.date;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = update.message.replace(/\n/g, '<br>');

        titleDateDiv.appendChild(titleDiv);
        titleDateDiv.appendChild(dateDiv);
        updateDiv.appendChild(titleDateDiv);
        updateDiv.appendChild(messageDiv);

        if (update.image) {
          const img = document.createElement("img");
          img.src = update.image.startsWith("http") ? update.image : `/backend/updates/mr-kitty/${update.image}`;
          img.classList.add("update-image");
          updateDiv.appendChild(img);
        }

        container.appendChild(updateDiv);
      });
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-button");
  const divs = document.querySelectorAll(".toggle-div");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        divs.forEach(div => div.style.display = "none");
        if (divs[index].id === "updates-mr-kitty") {
            divs[index].style.display = "flex";
            divs[index].style.flexWrap = "wrap";
            divs[index].style.gap = "10px";
        } else {
            divs[index].style.display = "block";
        }
    });
  });
});
