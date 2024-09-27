// lict gallery load more

document.getElementById('loadMore').addEventListener('click', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        if (image.classList.contains('hidden')) {
            image.classList.remove('hidden');
        }
    });
    this.style.display = 'none';
});
