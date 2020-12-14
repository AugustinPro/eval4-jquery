/* --------------------------------------------------------------------------

Votre code ici

-------------------------------------------------------------------------- */
function GameButton() {
    $(".custom-control-input").click(function (e) { 
        e.preventDefault();
        if($("div").hasClass("is-active") == true){
            $(".redsquare-app").removeClass("is-active");
            $('button').prop('disabled', true);
        }
        else{
            $(".redsquare-app").addClass("is-active");
            $("button").removeAttr("disabled");
        }
    });
}

function SizeChange() {
    let size = 50;
    $("#scaleUp").click(function (e) { 
        e.preventDefault();
        //let sizeUp = $("square").width();
        //console.log(sizeUp);
        if($("div").hasClass("is-active") == true){
            size = size + 20;
            $(".square").stop().animate({"width": size, "height": size});
        }
    });
    $("#scaleDown").click(function (e) { 
        e.preventDefault();
        if($("div").hasClass("is-active") == true && size > 50){
            size = size - 20;
            $(".square").stop().animate({"width": size, "height": size});
        }
    });
}






$(function () {
    GameButton();
    SizeChange();
});