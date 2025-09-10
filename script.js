// Filtro da galeria
const filterButtons = document.querySelectorAll('.filter-menu button');
const galleryItems = document.querySelectorAll('.gallery .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    galleryItems.forEach((item, index) => {
      const category = item.dataset.category;

      if (filter === 'all' || category === filter) {
        // Mostrar item: primeiro display, depois animação
        item.style.display = 'block';
        setTimeout(() => item.classList.remove('hide'), 20 + index * 100);
      } else {
        // Esconder item: animação primeiro, depois display:none
        item.classList.add('hide');
        setTimeout(() => {
          item.style.display = 'none';
        }, 400); // 400ms = duração da transição CSS
      }
    });
  });
});


// Rolagem suave para botões/links personalizados
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});