var noticiasCarousel = new bootstrap.Carousel(document.getElementById("carouselNoticias"), {
    interval: 4000 // cada 4 segundos
  });
  
  var imagenesCarousel = new bootstrap.Carousel(document.getElementById("carouselImagenes"), {
    interval: 4000 
  });
  
    // manejo la navegación entre las noticias
    document.getElementById("prevNoticiaBtn").addEventListener("click", function () {
      noticiasCarousel.prev();
    });
  
    document.getElementById("nextNoticiaBtn").addEventListener("click", function () {
      noticiasCarousel.next();
    });
  
    //  manejo la navegación entre las imágenes
    document.getElementById("prevImagenBtn").addEventListener("click", function () {
      imagenesCarousel.prev();
    });
  
    document.getElementById("nextImagenBtn").addEventListener("click", function () {
      imagenesCarousel.next();
    });
  