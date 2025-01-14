document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggleButton');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetDiv = document.getElementById(targetId);

      if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
        targetDiv.style.display = 'block';
        button.style.backgroundColor = 'green';  // Set the button color when the div is visible
    } else {
        targetDiv.style.display = 'none';
        button.style.backgroundColor = '';  // Reset the button color when the div is hidden
    }
    });
  });
});


