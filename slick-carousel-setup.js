$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 80, // Tempo entre cada slide (em milissegundos)
        arrows: false // Esconde as setas de navegação
    });
});
