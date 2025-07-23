// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// Filtro da galeria
const buttons = document.querySelectorAll(".filter-menu button");
const items = document.querySelectorAll(".gallery .item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
