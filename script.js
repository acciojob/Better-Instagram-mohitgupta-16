const images = document.querySelectorAll('.image');

let draggedImage = null;

images.forEach(image => {
  image.addEventListener('dragstart', () => {
    draggedImage = image;
  });

  image.addEventListener('dragover', e => {
    e.preventDefault();
  });

  image.addEventListener('drop', () => {
    if (draggedImage !== image) {
      const temp = image.innerHTML;
      image.innerHTML = draggedImage.innerHTML;
      draggedImage.innerHTML = temp;
    }
  });
});
