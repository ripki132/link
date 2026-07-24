// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// Orb parallax effect
const orb1 = document.getElementById('orb1');
const orb2 = document.getElementById('orb2');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  if (orb1) {
    orb1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  }
  if (orb2) {
    orb2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
  }
});

// Typewriter effect
const textToType = "haii saya menggunakan WhatsApp";
const typewriterElement = document.getElementById('typewriter');
let isDeleting = false;
let typingDelay = 100;

function type() {
  if (!typewriterElement) return;

  const currentText = typewriterElement.textContent || "";

  if (!isDeleting && currentText === textToType) {
    typingDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    typingDelay = 500;
    isDeleting = false;
  } else {
    typingDelay = isDeleting ? 50 : 100;
    typewriterElement.textContent = textToType.substring(0, currentText.length + (isDeleting ? -1 : 1));
  }

  setTimeout(type, typingDelay);
}

// Start typing effect
setTimeout(type, 1000);
