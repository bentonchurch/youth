const audio = document.getElementById('bgm');
  
// Try autoplay immediately (may fail silently)
audio.play().catch(() => {
console.log("Autoplay blocked, waiting for user interaction.");
});

// Play when user clicks anywhere
document.body.addEventListener('click', () => {
audio.play();
}, { once: true });
