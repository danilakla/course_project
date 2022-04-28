//add class for menu(make the burger)
function toggleMenu() {
  const menu = document.querySelector('.menuIcon');
  const navbar = document.getElementById('navbar');
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
}