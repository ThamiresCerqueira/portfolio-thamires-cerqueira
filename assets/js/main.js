/**
 * PORTFÓLIO THAMIRES CERQUEIRA - MAIN JAVASCRIPT
 * Lógica de Renderização Dinâmica, Filtros, Modal Interativo e Efeitos
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolio();
  initModal();
  initScrollAnimations();
  initCopyEmail();
});

/* ---------------- 1. NAVBAR & MENU MOBILE ---------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-menu-drawer');
  const navLinks = document.querySelectorAll('.nav-link');

  // Efeito de sombra/blur ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Toggle do menu mobile
  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.toggle('is-active');
      mobileDrawer.classList.toggle('is-open', isOpen);
    });

    // Fecha menu ao clicar em links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        mobileDrawer.classList.remove('is-open');
      });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        menuToggle.classList.remove('is-active');
        mobileDrawer.classList.remove('is-open');
      }
    });
  }

  // Atualiza link ativo baseado na posição da página
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }
}

/* ---------------- 2. PORTFÓLIO & FILTROS DINÂMICOS ---------------- */
let currentCategory = 'all';

function initPortfolio() {
  const grid = document.querySelector('#portfolioGrid');
  const filterButtons = document.querySelectorAll('.portfolio-filter-bar .filter-btn');

  if (!grid || !window.PORTFOLIO_PROJECTS) return;

  // Atualiza contadores dos botões de filtro
  updateFilterCounts();

  // Renderiza todos os projetos inicialmente
  renderProjects(currentCategory);

  // Eventos de clique nos filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      currentCategory = filter;
      renderProjects(filter);
    });
  });
}

function updateFilterCounts() {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const counts = {
    all: projects.length,
    estrategia: 0,
    campanhas: 0,
    artigos: 0
  };

  projects.forEach(p => {
    if (counts[p.category] !== undefined) {
      counts[p.category]++;
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filter = btn.dataset.filter;
    const countSpan = btn.querySelector('.filter-count');
    if (countSpan && counts[filter] !== undefined) {
      countSpan.textContent = counts[filter];
    }
  });
}

function renderProjects(filter) {
  const grid = document.querySelector('#portfolioGrid');
  if (!grid) return;

  const allProjects = window.PORTFOLIO_PROJECTS || [];
  const filtered = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  // Efeito de saída suave
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';

  setTimeout(() => {
    grid.innerHTML = '';

    filtered.forEach((project, index) => {
      const isFeatured = project.id === 'bancou';
      const card = document.createElement('article');
      card.className = `project-card ${isFeatured ? 'featured-card' : ''} reveal-on-scroll is-revealed`;
      card.dataset.id = project.id;

      const tagsHtml = project.tags.slice(0, 3).map(tag => 
        `<span class="project-tag">${tag}</span>`
      ).join('');

      card.innerHTML = `
        <div class="project-thumb-wrap">
          <span class="project-badge ${isFeatured ? 'featured-badge' : ''}">${project.badge || project.categoryLabel}</span>
          <img src="${project.coverImage}" alt="${project.title}" class="project-thumb" loading="lazy">
        </div>
        <div class="project-content">
          <span class="project-client-meta">${project.client} • ${project.categoryLabel}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-card-footer">
            <span class="btn-open-modal">Ver case completo <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(project.id);
      });

      grid.appendChild(card);
    });

    // Efeito de entrada suave
    grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';
  }, 180);
}

/* ---------------- 3. MODAL DE PROJETOS COMPLETO ---------------- */
let currentModalProjectId = null;
let currentGalleryImageIndex = 0;

function initModal() {
  const backdrop = document.querySelector('#projectModalBackdrop');
  const closeBtn = document.querySelector('#modalCloseBtn');
  const prevProjectBtn = document.querySelector('#modalPrevProject');
  const nextProjectBtn = document.querySelector('#modalNextProject');

  if (!backdrop) return;

  // Fechar ao clicar no X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Fechar ao clicar fora da janela do modal
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeProjectModal();
    }
  });

  // Fechar com ESC ou navegar com setas
  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
      navigateGallery(1);
    }
  });

  // Navegação entre projetos
  if (prevProjectBtn) {
    prevProjectBtn.addEventListener('click', () => navigateProject(-1));
  }
  if (nextProjectBtn) {
    nextProjectBtn.addEventListener('click', () => navigateProject(1));
  }
}

function openProjectModal(projectId) {
  const backdrop = document.querySelector('#projectModalBackdrop');
  const projects = window.PORTFOLIO_PROJECTS || [];
  const project = projects.find(p => p.id === projectId);

  if (!backdrop || !project) return;

  currentModalProjectId = projectId;
  currentGalleryImageIndex = 0;

  // Preenche dados do header
  document.querySelector('#modalBadge').textContent = project.badge || project.categoryLabel;
  document.querySelector('#modalClient').textContent = `${project.client} • ${project.categoryLabel}`;
  document.querySelector('#modalTitle').textContent = project.title;

  // Preenche Desafio
  document.querySelector('#modalChallenge').textContent = project.challenge;

  // Preenche Estratégia
  document.querySelector('#modalStrategy').textContent = project.strategy;

  // Preenche Entregáveis
  const deliverablesList = document.querySelector('#modalDeliverables');
  deliverablesList.innerHTML = '';
  if (project.deliverables && project.deliverables.length) {
    project.deliverables.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${item}</span>`;
      deliverablesList.appendChild(li);
    });
  }

  // Preenche Resultados
  const resultsBox = document.querySelector('#modalResultsBox');
  const resultsText = document.querySelector('#modalResults');
  if (project.results) {
    resultsBox.style.display = 'block';
    resultsText.textContent = project.results;
  } else {
    resultsBox.style.display = 'none';
  }

  // Preenche Tags
  const tagsBox = document.querySelector('#modalTags');
  tagsBox.innerHTML = '';
  if (project.tags) {
    project.tags.forEach(t => {
      const span = document.createElement('span');
      span.textContent = t;
      tagsBox.appendChild(span);
    });
  }

  // Preenche Link Externo
  const linkBtn = document.querySelector('#modalLinkBtn');
  if (project.link) {
    linkBtn.style.display = 'inline-flex';
    linkBtn.href = project.link;
    linkBtn.innerHTML = `${project.linkText || 'Visitar Projeto'} <i class="fas fa-external-link-alt"></i>`;
  } else {
    linkBtn.style.display = 'none';
  }

  // Renderiza Galeria
  renderModalGallery(project);

  // Atualiza botões de navegação anterior/próximo
  updateModalNavButtons();

  // Abre modal e bloqueia scroll da página
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Rola o corpo do modal pro topo
  const scrollable = document.querySelector('.modal-body-scrollable');
  if (scrollable) scrollable.scrollTop = 0;
}

function renderModalGallery(project) {
  const mainImg = document.querySelector('#modalGalleryImg');
  const caption = document.querySelector('#modalGalleryCaption');
  const thumbsContainer = document.querySelector('#modalGalleryThumbs');
  const galleryNav = document.querySelector('.modal-gallery-nav');

  const gallery = project.gallery && project.gallery.length ? project.gallery : [{ src: project.coverImage, title: project.title, caption: '' }];

  // Imagem principal
  const currentItem = gallery[currentGalleryImageIndex] || gallery[0];
  mainImg.src = currentItem.src;
  mainImg.alt = currentItem.title || project.title;
  caption.textContent = currentItem.caption || currentItem.title || '';

  // Exibe/Oculta botões de navegação se houver mais de 1 imagem
  if (gallery.length > 1) {
    galleryNav.style.display = 'flex';
  } else {
    galleryNav.style.display = 'none';
  }

  // Thumbnails
  thumbsContainer.innerHTML = '';
  if (gallery.length > 1) {
    thumbsContainer.style.display = 'flex';
    gallery.forEach((item, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.className = `modal-thumb-btn ${idx === currentGalleryImageIndex ? 'is-active' : ''}`;
      thumbBtn.innerHTML = `<img src="${item.src}" alt="Thumb ${idx + 1}">`;
      thumbBtn.addEventListener('click', () => {
        currentGalleryImageIndex = idx;
        renderModalGallery(project);
      });
      thumbsContainer.appendChild(thumbBtn);
    });
  } else {
    thumbsContainer.style.display = 'none';
  }

  // Eventos dos botões de anterior/próxima imagem na galeria
  const prevImgBtn = document.querySelector('#galleryPrevBtn');
  const nextImgBtn = document.querySelector('#galleryNextBtn');

  if (prevImgBtn) {
    prevImgBtn.onclick = (e) => {
      e.stopPropagation();
      navigateGallery(-1);
    };
  }
  if (nextImgBtn) {
    nextImgBtn.onclick = (e) => {
      e.stopPropagation();
      navigateGallery(1);
    };
  }
}

function navigateGallery(direction) {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const project = projects.find(p => p.id === currentModalProjectId);
  if (!project || !project.gallery || project.gallery.length <= 1) return;

  currentGalleryImageIndex = (currentGalleryImageIndex + direction + project.gallery.length) % project.gallery.length;
  renderModalGallery(project);
}

function updateModalNavButtons() {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const currentIndex = projects.findIndex(p => p.id === currentModalProjectId);
  const prevBtn = document.querySelector('#modalPrevProject');
  const nextBtn = document.querySelector('#modalNextProject');

  if (currentIndex > 0) {
    prevBtn.style.visibility = 'visible';
    prevBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${projects[currentIndex - 1].client}`;
  } else {
    prevBtn.style.visibility = 'hidden';
  }

  if (currentIndex < projects.length - 1) {
    nextBtn.style.visibility = 'visible';
    nextBtn.innerHTML = `${projects[currentIndex + 1].client} <i class="fas fa-arrow-right"></i>`;
  } else {
    nextBtn.style.visibility = 'hidden';
  }
}

function navigateProject(direction) {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const currentIndex = projects.findIndex(p => p.id === currentModalProjectId);
  const nextIndex = currentIndex + direction;

  if (nextIndex >= 0 && nextIndex < projects.length) {
    openProjectModal(projects[nextIndex].id);
  }
}

function closeProjectModal() {
  const backdrop = document.querySelector('#projectModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

/* ---------------- 4. ANIMAÇÕES DE SCROLL ---------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ---------------- 5. COPIAR E-MAIL COM TOAST ---------------- */
function initCopyEmail() {
  const copyBtn = document.querySelector('#btnCopyEmail');
  const toast = document.querySelector('#toastNotice');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'thamires.szcerqueira@gmail.com';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showToast);
    } else {
      // Fallback
      const input = document.createElement('input');
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast();
    }
  });

  function showToast() {
    if (!toast) return;
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }
}
