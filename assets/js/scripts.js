const gameLogos = document.querySelectorAll('.gameCover');

gameLogos.forEach((gameLogo) => {
    gameLogo.addEventListener('click', () => {
        gameLogoAccordeon = gameLogo.nextElementSibling;

        if (gameLogoAccordeon.classList.contains('hidden')) {
            gameLogoAccordeon.classList.remove('hidden');
        } else {
            gameLogoAccordeon.classList.add('hidden');
        }
    })

})