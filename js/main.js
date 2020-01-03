const responsive = {
    768: {
        items: 2
    }
}
$(document).ready(function(){
    $nav = $(".navbar");
    $toggleCollapse = $(".toogle-collapse");

    //Click even for toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })

    //Owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        setTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
        responsive: responsive
    });

    //Scroll up
    $('.scroll-up i').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000)
    })
})