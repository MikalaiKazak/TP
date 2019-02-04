var screen = $('.screen');
var screenHeight = screen.height();
var screenWidth = screen.width();
$(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var newElement = getRandomSquare();
        screen.append(newElement);
    });
});

function getRandomSquare() {
    var randomColor = getRandomColor();
    var randomWidth = getRandomArbitrary(20, 100);
    var randomHeight = getRandomArbitrary(20, 100);
    var newElement = $("<div id='new' style='position:absolute;'></div>").css("background-color", randomColor).css("width", randomWidth + "px").css("height", randomHeight + "px").css("top", getRandomArbitrary(randomHeight, screenHeight - randomHeight) + "px").css("left", getRandomArbitrary(randomWidth, screenWidth - randomWidth) + "px");
    return newElement;
};
$(document).on("click", ".screen > div#new", function() {
    $('.clicked').removeClass('clicked');
    $(this).addClass('clicked');
});
$(document).keydown(function(e) {
    var thisElement = $('.clicked');
    var posX = thisElement.position().left;
    var posY = thisElement.position().top;
    if (posX > screenWidth - 15) {
        posX = 0;
    }
    if (posX < 0) {
        posX = screenWidth;
    }
    if (posY > screenHeight - 15) {
        posY = 0;
    }
    if (posY < 0) {
        posY = screenHeight;
    }
    switch (e.keyCode) {
        case 37:
            thisElement.css("left", posX = posX - 15);
            break;
        case 38:
            thisElement.css("top", posY = posY - 15);
            break;
        case 39:
            thisElement.css("left", posX = posX + 15);
            break;
        case 40:
            thisElement.css("top", posY = posY + 15);
            break;
    }
});

function getRandomArbitrary(min, max) {
    var randomValue = Math.random() * (max - min) + min;
    return randomValue;
}

function getRandomColor() {
    var max = 0xffffff;
    var randomValue = Math.round(Math.random() * max);
    var randomColor = '#' + randomValue.toString(16);
    return randomColor;
}