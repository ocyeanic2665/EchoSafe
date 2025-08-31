document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a, .hero-button').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                if (this.getAttribute('href').startsWith('#')) {
                    event.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking
                    document.querySelector('nav ul').classList.remove('show');
                }
            });
        });
        
        // SOS Button functionality
        const sosButton = document.getElementById('sosButton');
        const sosModal = document.getElementById('sosModal');
        const confirmSos = document.getElementById('confirmSos');
        const cancelSos = document.getElementById('cancelSos');
        
        sosButton.addEventListener('click', function() {
            sosModal.style.display = 'flex';
        });
        
        confirmSos.addEventListener('click', function() {
            alert('EMERGENCY ALERT SENT! Help is on the way.');
            sosModal.style.display = 'none';
            
            // Here you would typically send the actual emergency alert
            // to your backend server or emergency contact system
        });
        
        cancelSos.addEventListener('click', function() {
            sosModal.style.display = 'none';
        });
        
        // Close modal if clicked outside
        window.addEventListener('click', function(event) {
            if (event.target === sosModal) {
                sosModal.style.display = 'none';
            }
        });
        
        // Animation for elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('notification')) {
                            entry.target.style.animationPlayState = 'running';
                        } else {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateY(0)';
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe notifications
            document.querySelectorAll('.notification').forEach(notification => {
                notification.style.animationPlayState = 'paused';
                observer.observe(notification);
            });
            
            // Observe feature cards
            document.querySelectorAll('.feature-card').forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
            
            // Observe steps
            document.querySelectorAll('.step').forEach(step => {
                step.style.opacity = 0;
                step.style.transform = 'translateY(20px)';
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(step);
            });
        });
