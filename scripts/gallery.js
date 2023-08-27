document.addEventListener("DOMContentLoaded", function() {
    var images = [
        '../images/image1.jpg',
        '../images/image2.jpg',
        '../images/image3.jpg'
        // ... add more images as needed
    ];
    
    var currentIndex = 0;

    document.querySelector('button[onclick="openGallery()"]').addEventListener('click', openGallery);
    document.querySelector('#lightbox .close').addEventListener('click', closeGallery);
    document.querySelector('.prev').addEventListener('click', function() { changeImage(-1) });
    document.querySelector('.next').addEventListener('click', function() { changeImage(1) });

    function openGallery() {
        document.getElementById('lightbox').style.display = 'block';
        currentIndex = 0;
        showImage(currentIndex);
    }

    function closeGallery() {
        document.getElementById('lightbox').style.display = 'none';
    }

    function changeImage(n) {
        currentIndex += n;
        showImage(currentIndex);
    }

    function showImage(index) {
        var img = document.getElementById('lightbox-img');
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        }
        img.src = images[currentIndex];
    }
});
