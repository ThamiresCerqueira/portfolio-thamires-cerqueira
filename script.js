// Filtro da galeria
const filterButtons = document.querySelectorAll('.filter-menu button');
const galleryItems = document.querySelectorAll('.gallery .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    galleryItems.forEach(item => {
      const category = item.dataset.category;

      if (filter === 'all' || category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
