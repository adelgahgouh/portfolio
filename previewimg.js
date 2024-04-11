const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');
const imageLink = document.getElementById('image-link'); // Optional

function openModal(imageUrl) {
  modalImage.src = imageUrl; // Set the image source for the modal
  imageModal.classList.remove('hidden'); // Make the modal visible
}

function closeModal() {
  modalImage.src = ''; // Clear the image source
  imageModal.classList.add('hidden'); // Hide the modal
}

closeBtn.addEventListener('click', closeModal);

// Optional: Open modal on image link click
if (imageLink) {
  imageLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    openModal('your-image-path.jpg'); // Replace with your image path
  });
}

// Optional: Close modal on clicking outside the image
imageModal.addEventListener('click', function(event) {
  if (event.target === imageModal) {
    closeModal();
  }
})

