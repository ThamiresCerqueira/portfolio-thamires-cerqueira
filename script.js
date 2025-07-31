// Menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Scroll suave para "confira"
scrollLink.addEventListener('click', (e) => {
  e.preventDefault();
  const targetId = scrollLink.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

// Filtro da galeria
const filterButtons = document.querySelectorAll('.filter-menu button');
const galleryItems = document.querySelectorAll('.gallery .item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach((item) => {
      const category = item.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});