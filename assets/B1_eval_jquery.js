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






$(function () {
    GameButton();
});