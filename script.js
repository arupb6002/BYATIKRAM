document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    
    // Toggle menu
    menuToggle.addEventListener('change', function() {
        if(this.checked) {
            document.body.style.overflow = 'hidden';
            navOverlay.classList.add('active');
            navLinks.classList.add('active');
        } else {
            document.body.style.overflow = '';
            navOverlay.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Close menu when clicking on overlay
    navOverlay.addEventListener('click', function() {
        menuToggle.checked = false;
        document.body.style.overflow = '';
        this.classList.remove('active');
        navLinks.classList.remove('active');
    });
    
    // Close menu when clicking on a link (for mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if(window.innerWidth < 768) {
                menuToggle.checked = false;
                document.body.style.overflow = '';
                navOverlay.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Responsive behavior
    window.addEventListener('resize', function() {
        if(window.innerWidth >= 768) {
            document.body.style.overflow = '';
            menuToggle.checked = false;
            navOverlay.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
