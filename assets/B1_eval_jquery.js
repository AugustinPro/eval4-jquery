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

function ShapeChange() {
    $("#shapeCircle").click(function (e) { 
        e.preventDefault();
        if($("div").hasClass("is-active") == true){
            $(".square").css("border-radius", "50%");
        }
    });
    $("#shapeSquare").click(function (e) { 
        e.preventDefault();
        if($("div").hasClass("is-active") == true){
            $(".square").css("border-radius", "0%");
        }
    });
}
/*
function Movement() {
    let playArea = document.getElementById('redsquare-app');
    playArea.addEventListener('keydown', (e) => {
        if (!e.repeat)
          
        else
          
      });
      
      playArea.addEventListener('beforeinput', (e) => {
        logMessage(`beforeinput event. you are about inputing "${e.data}"`);
      });
      
      playArea.addEventListener('input', (e) => {
        logMessage(`input event. you have just inputed "${e.data}"`);
      });
      
      playArea.addEventListener('keyup', (e) => {
        logMessage(`keyup event. key property value is "${e.key}"`);
      });
}
*/

$(function () {
    GameButton();
    SizeChange();
    ShapeChange();
});