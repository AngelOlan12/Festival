 // Initial modal functionality
    const initialModal = document.getElementById('initial-modal');
    const openInvitationButton = document.getElementById('open-invitation-button');
    const mainSlide = document.querySelector('.slide');

    openInvitationButton.addEventListener('click', () => {
        initialModal.style.display = 'none';
        music.play();
        mainSlide.classList.add('fadeIn');
    });
