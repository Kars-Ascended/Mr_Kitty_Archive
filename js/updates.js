const files = {
  "/backend/updates/subreddit.txt": "updates-subreddit",
  "/backend/updates/website.txt": "updates-website"
};

Object.entries(files).forEach(([file, containerId]) => {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      const updates = data.trim().split("\n").map(line => {
        const match = line.match(/\*\*\*(.*?)\*\*\* \*\*(.*?)\*\* \$\$(.*?)\$\$/);
        return match ? { title: match[1], date: match[2], message: match[3] } : null;
      }).filter(update => update);

      const container = document.getElementById(containerId);
      updates.forEach(update => {
        const updateDiv = document.createElement("div");
        updateDiv.classList.add("update");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = `Title: ${update.title}`;

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = `Date: ${update.date}`;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = `Message: ${update.message}`;

        updateDiv.appendChild(titleDiv);
        updateDiv.appendChild(dateDiv);
        updateDiv.appendChild(messageDiv);

        container.appendChild(updateDiv);
      });
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
});
