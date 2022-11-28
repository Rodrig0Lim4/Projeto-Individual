    const carrosselIndex = 1;
    Todos_Slides(carrosselIndex);

    //Fazer os slides irem para frente e para trás
    function plusSlides(n) {
        Todos_Slides(carrosselIndex += n);
    }

    //Controle de Thumbnail das imagens
    function currentSlide(n) {
        Todos_Slides(carrosselIndex = n);
    }

    function Todos_Slides(n) {
        var contador;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { carrosselIndex = 1 }
        if (n < 1) { carrosselIndex = slides.length }
        for (contador = 0; contador < slides.length; contador++) {
            slides[contador].style.display = "none";
        }
        if (carrosselIndex > slides.length) {
            carrosselIndex = 1
        }
        for (contador = 0; contador < dots.length; contador++) {
            dots[contador].className = dots[contador].className.replace("active", "");
        }
        slides[carrosselIndex - 1].style.display = "block";
        dots[carrosselIndex - 1].className += " active";
    }