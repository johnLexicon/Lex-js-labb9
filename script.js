const navbarToggler = document.querySelector('.navbar-toggler');
const navbarContainer = document.querySelector('#navbarContainer');
const navItemsContainer = document.querySelector('#navItemsContainer');
const navLinks = document.querySelectorAll('.nav-link');

/*------------- Toggle navbar-nav -----------*/

navbarToggler.addEventListener('click', (e) => {
  navItemsContainer.classList.toggle('navbar-collapse');
});

window.onresize = () => {
  if (window.innerWidth >= 992) {
    navItemsContainer.classList.remove('navbar-collapse');
  }
};

/*------------ Active link ----------------*/

navLinks.forEach((item) => {
  item.addEventListener('click', function () {
    removeActiveLinks();
    this.classList.add('active');
  });
});

function removeActiveLinks() {
  navLinks.forEach((item) => {
    item.classList.remove('active');
  });
}
