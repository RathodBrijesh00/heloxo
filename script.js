// Smooth scroll to shop section
function scrollToShop() {
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
}

// Contact form alert
function showThanks(e) {
  e.preventDefault();
  alert("Thanks for reaching out! 💌 We'll get back to you soon.");
}

// Navbar active link effect (optional enhancement)
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Select all card images
const cardImages = document.querySelectorAll(".card img");
const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImg");
const caption = document.querySelector(".img-popup .caption");

// When any image is clicked
cardImages.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// Close popup when clicking X
function closeImage() {
  popup.style.display = "none";
}

// Optional: Close when clicking outside the image
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

const mapContainer = document.querySelector('.map-container');

window.addEventListener('scroll', () => {
  const rect = mapContainer.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    mapContainer.style.animationPlayState = 'running';
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.log("Service Worker registration failed:", err));
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const addBtn = document.createElement('button');
  addBtn.textContent = "Install HeloXO App";
  addBtn.className = "install-btn";
  document.body.appendChild(addBtn);

  addBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') console.log('App installed');
      addBtn.style.display = 'none';
    });
  });
});


document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you for choosing HeloXO Kids! Checkout coming soon.');
  });
});

document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});
