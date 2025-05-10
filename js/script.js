document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.body.classList.add('fade-out');
  setTimeout(function() {
    window.location.href = 'rooms.html';
  }, 500);
});