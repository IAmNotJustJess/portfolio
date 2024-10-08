state = 1;

$(document).ready(function(){
    $(".pl").hide();
    
    $(".switch-lang").click(function(){
        $(".en").toggle();
        $(".pl").toggle();
        if (state == 1) {
            document.title = "Stronka IAmNotJustJess";
            state = 0;
        } else {
            document.title = "IAmNotJustJess's Website";
            state = 1;
        }
    });

    
});