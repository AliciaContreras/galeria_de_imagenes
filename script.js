$(document).ready(function () {
    const gallery = $('.gallery-grid');
    const totalImages = 20;
    const imagePath = 'assets/img/';
    let currentIndex = 0;

    for (let i = 1; i <= totalImages; i++) {
        const imageUrl = `${imagePath}image${i}.jpg`;
        const thumbnailHTML = `
            <div class="gallery-item">
                <a href="${imageUrl}" data-index="${i - 1}">
                    <img src="${imageUrl}" alt="Gato ${i}">
                </a>
            </div>
        `;
        gallery.append(thumbnailHTML);
    }
    const galleryLinks = $('.gallery-grid a');

    const modal = $('#modal');
    const modalWrapper = $('.modal-wrapper');
    const modalImage = $('#modal-image');
    const closeButton = $('.close-button');
    const prevButton = $('.prev-button');
    const nextButton = $('.next-button');

    function showImage(index) {
        const imageToShow = galleryLinks.eq(index).attr('href');
        modalImage.attr('src', imageToShow);
        currentIndex = index;
    }

    galleryLinks.on('click', function (event) {
        event.preventDefault();
        const clickedIndex = parseInt($(this).data('index'));
        showImage(clickedIndex);
        modal.fadeIn();
    });

    nextButton.on('click', function () {
        let newIndex = currentIndex + 1;
        if (newIndex >= totalImages) {
            newIndex = 0;
        }
        showImage(newIndex);
    });

    prevButton.on('click', function () {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = totalImages - 1;
        }
        showImage(newIndex);
    });

    function closeModal() {
        modal.fadeOut();
    }

    closeButton.on('click', closeModal);

    modalWrapper.on('click', function (event) {
        if (event.target === this) {
            closeModal();
        }
    });
});