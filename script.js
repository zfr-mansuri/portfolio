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


// document.getElementById("show-more-btn").addEventListener("click", function () {
//     const moreProjects = document.getElementById("more-projects");
//     const button = document.getElementById("show-more-btn");

//     if (moreProjects.style.display === "none") {
//       moreProjects.style.display = "flex";
//       button.textContent = "Show Less";
//     } else {
//       moreProjects.style.display = "none";
//       button.textContent = "Show More";
//     }
//   });


  let showState = 0; // 0 = show group 2, 1 = show group 3, 2 = collapse all

document.getElementById("show-more-btn").addEventListener("click", function () {
  const group2 = document.getElementById("projects-group-2");
  const group3 = document.getElementById("projects-group-3");
  const button = document.getElementById("show-more-btn");

  if (showState === 0) {
    group2.style.display = "flex";
    button.textContent = "Show More";
    showState = 1;
  } else if (showState === 1) {
    group3.style.display = "flex";
    button.textContent = "Show Less";
    showState = 2;
  } else {
    group2.style.display = "none";
    group3.style.display = "none";
    button.textContent = "Show More";
    showState = 0;
    // Optional: scroll back to top of projects
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
});
