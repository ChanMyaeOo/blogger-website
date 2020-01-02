$(document).ready(function(){
    $nav = $(".navbar");
    $toggleCollapse = $(".toogle-collapse");

    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })
})