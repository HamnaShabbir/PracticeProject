
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

// Select all products and add event listeners
document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    let name = product.getAttribute('data-name');
    previewContainer.style.display = 'flex';

    // Reset all preview boxes first
    previewBox.forEach(preview => preview.classList.remove('active'));

    // Find and activate the correct preview box
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      }
    });
  };
});

// Add event listeners for the close button
previewBox.forEach(preview => {
  let closeButton = preview.querySelector('.fa-times');
  closeButton.onclick = () => {
    preview.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});





// animation

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-slide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        } else {
          entry.target.classList.remove('animate-visible');
        }
      });
    }, { threshold: 0.1 }); 

    elements.forEach(el => observer.observe(el));
  });




  