document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggleButton');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetDiv = document.getElementById(targetId);

      if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
        targetDiv.style.display = 'block';
        button.textContent = `Hide ${targetDiv.id}`;
      } else {
        targetDiv.style.display = 'none';
        button.textContent = `Show ${targetDiv.id}`;
      }
    });
  });
});


