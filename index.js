document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um contador de cliques para as imagens da galeria
    var galleryImages = document.querySelectorAll('.gallery__img');
    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var clicks = parseInt(image.getAttribute('data-clicks')) || 0;
            clicks++;
            console.log('Imagem clicada ' + clicks + ' vezes.');
            image.setAttribute('data-clicks', clicks);
        });
    });

    // Adiciona um botão "Voltar ao Topo" 
    var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Adiciona animações ao rolar a página
    window.addEventListener("scroll", function() {
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
        if (scrollToTopBtn) {
            if (scrollPos > 300) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        }
    });
});