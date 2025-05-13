document.addEventListener('DOMContentLoaded', function() {
  const menuMobile = document.querySelector('.menu-mobile');
  const menuPrincipal = document.querySelector('.menu-principal');
  
  if (menuMobile && menuPrincipal) {
    menuMobile.addEventListener('click', function() {
      menuPrincipal.classList.toggle('ativo');
    });
  }

  const perguntas = document.querySelectorAll('.pergunta-titulo');
  
  if (perguntas.length > 0) {
    perguntas.forEach(pergunta => {
      pergunta.addEventListener('click', function() {
        const perguntaItem = this.parentElement;
        perguntaItem.classList.toggle('ativa');
        
        perguntas.forEach(p => {
          if (p !== this) {
            p.parentElement.classList.remove('ativa');
          }
        });
      });
    });
  }

  const absenteismo = document.getElementById('absenteismo');
  
  if (absenteismo) {
    const target = 10; // Redução para 10%
    const duration = 2000; // 2 segundos
    const start = 20;
    const increment = (start - target) / (duration / 16);
    
    let current = start;
    const timer = setInterval(() => {
      current -= increment;
      if (current <= target) {
        clearInterval(timer);
        current = target;
      }
      absenteismo.textContent = Math.round(current) + '%';
    }, 16);
  }

  const linksInternos = document.querySelectorAll('a[href^="#"]');
  
  linksInternos.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  const cards = document.querySelectorAll('.beneficio, .membro, .card-resultado');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  const passos = document.querySelectorAll('.passo');
  
  if (passos.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    passos.forEach((passo, index) => {
      passo.style.opacity = 0;
      passo.style.transform = 'translateY(20px)';
      passo.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
      observer.observe(passo);
    });
  }
});