const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".gallery-img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = galleryImages[index].src;
  captionText.innerHTML = galleryImages[index].alt;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  openModal(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  openModal(currentIndex);
}

// Event Listeners
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Close modal when clicking outside image
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
