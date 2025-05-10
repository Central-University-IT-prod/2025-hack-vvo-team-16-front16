document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = event.target.email.value.trim();
  const name = event.target.name.value.trim();
  if (email === 'abc123@gmail.com' && name.toLowerCase() === '123') {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = 'admin_panel.html';
    }, 500);
  } else {
    alert('Неверные данные!');
  }
});
