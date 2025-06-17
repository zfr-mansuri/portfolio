function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// image crousal
document.querySelectorAll('.image-container').forEach((container) => {
  let currentIndex = 0;
  const images = container.querySelectorAll('.image-slide');
  const totalImages = images.length;

  function changeImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('active');
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds
});


// auto live button Shake
const button1 = document.getElementById('live-btn1');
const button2 = document.getElementById('live-btn2');
const button3 = document.getElementById('live-btn3');
function startShaking() {
    button1.classList.add('auto-shake');
    button2.classList.add('auto-shake');
    button3.classList.add('auto-shake');
    setTimeout(() => {
        button1.classList.remove('auto-shake');
        button2.classList.remove('auto-shake');
        button3.classList.remove('auto-shake');
    }, 700); // Duration matches the CSS animation duration
}

// Shake the button every 3 seconds
setInterval(startShaking, 4000);