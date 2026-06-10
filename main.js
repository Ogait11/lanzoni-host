document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // DROPDOWN MENU (CLICK TOGGLE)
    // ========================================
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropdownBtn && dropdownMenu) {
        // Toggle ao clicar no botão
        dropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle da classe active
            const isActive = dropdownMenu.classList.contains('active');
            
            // Fecha todos os dropdowns primeiro
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
            });
            document.querySelectorAll('.dropdown-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Se não estava ativo, abre
            if (!isActive) {
                dropdownMenu.classList.add('active');
                dropdownBtn.classList.add('active');
            }
        });
        
        // Fecha ao clicar fora
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                dropdownMenu.classList.remove('active');
                dropdownBtn.classList.remove('active');
            }
        });
        
        // Fecha ao clicar em um link
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                dropdownMenu.classList.remove('active');
                dropdownBtn.classList.remove('active');
            });
        });
        
        // Fecha com tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdownMenu.classList.remove('active');
                dropdownBtn.classList.remove('active');
            }
        });
    }
    
    // ========================================
    // MENU MOBILE
    // ========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // ANIMAÇÕES AO ROLAR
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // CONNECT PERSONALIZADO (preview)
    // ========================================
    const connectInput = document.getElementById('connectName');
    const connectPreview = document.getElementById('connectPreview');
    
    if (connectInput && connectPreview) {
        connectInput.addEventListener('input', function() {
            const inputValue = this.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
            connectPreview.textContent = inputValue 
                ? `connect ${inputValue}.lanzonihost.com` 
                : 'connect suacidade.lanzonihost.com';
        });
    }
});