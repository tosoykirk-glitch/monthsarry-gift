// Open Letter Modal with animations
function openLetter() {
    const modal = document.getElementById('letterModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Create heart effects when opening letter
    createHearts();
    
    // Create sparkles
    createSparkles();
}

// Close Letter Modal
function closeLetter() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Allow scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target == modal) {
        closeLetter();
    }
}

// Create sparkle effects
function createSparkles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = Math.random() * 1.5 + 1.5 + 'em';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '2001';
            sparkle.style.animation = 'sparkleAnimation 2.5s forwards';
            sparkle.textContent = '✨';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2500);
        }, i * 100);
    }
}

// Create heart effects when opening letter
function createHearts() {
    const hearts = ['💙', '💜', '❤️', '💖'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = Math.random() * 2 + 1.5 + 'em';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '2001';
            heart.style.animation = 'floatUp 3s forwards';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 60);
    }
}

// Continuous floating flowers in background
function createBackgroundFlowers() {
    const flowers = ['🌷', '🌼', '🤍'];
    const interval = setInterval(() => {
        if (document.querySelector('.modal.show')) {
            return; // Don't create background flowers when modal is open
        }
        
        const flower = document.createElement('div');
        flower.style.position = 'fixed';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = '-50px';
        flower.style.fontSize = '2.5em';
        flower.style.pointerEvents = 'none';
        flower.style.opacity = '0.15';
        flower.style.zIndex = '0';
        flower.style.animation = 'fallDown 10s linear forwards';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        document.body.appendChild(flower);
        
        setTimeout(() => flower.remove(), 10000);
    }, 3000);
}

// Add animations to the style
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-60px) scale(0) rotate(360deg);
        }
    }

    @keyframes floatUp {
        0% {
            opacity: 0;
            transform: translateY(0) scale(1) translateX(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) scale(0.3) translateX(random(-100, 100));
        }
    }

    @keyframes fallDown {
        0% {
            opacity: 0.15;
            transform: translateY(0) translateX(0);
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 0;
            transform: translateY(100vh) translateX(50px) rotate(360deg);
        }
    }

    @keyframes shimmer {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(animationStyles);

// Add button ripple effect
function addRippleEffect() {
    const button = document.querySelector('.love-button');
    if (button) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
}

// Smooth scroll for modal content
function smoothScroll() {
    const modal = document.querySelector('.modal-content');
    if (modal) {
        modal.addEventListener('wheel', (e) => {
            if (modal.scrollHeight > modal.clientHeight) {
                e.preventDefault();
                const scrollAmount = e.deltaY;
                modal.scrollBy({
                    top: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Page load animations
window.addEventListener('load', function() {
    console.log('💙 Anniversary Gift Loaded! 💙');
    
    // Start background flowers
    createBackgroundFlowers();
    
    // Add button effects
    addRippleEffect();
    
    // Add smooth scroll
    smoothScroll();
    
    // Create initial sparkles
    setTimeout(() => {
        createSparkles();
    }, 500);
});

// Add button click animation
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.love-button');
    if (button) {
        button.addEventListener('mouseenter', function() {
            // Add subtle animation
        });
    }
    
    // Prevent accidental scrolls on body when modal is open
    const modal = document.getElementById('letterModal');
    modal.addEventListener('touchmove', function(e) {
        if (this.classList.contains('show')) {
            const modalContent = this.querySelector('.modal-content');
            if (!modalContent.contains(e.target) && !modalContent.querySelector('.close').contains(e.target)) {
                e.preventDefault();
            }
        }
    }, false);
});