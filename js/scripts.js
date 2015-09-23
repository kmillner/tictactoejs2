var player1 = 'x';
var player2 = 'o';
var turn = 0;

var boardCheck;
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var checkWin;
var xWin = false;
var oWin = false;
var winAlert;

var newGame;
var clearBoard;

var newGame = function () {
    $('td').one('click', function (event) {
        if (turn == 0) {
            $(this).text(player1);
            boardCheck();
            checkWin();
            turn = 1;
        } else {
            $(this).text(player2);
            boardCheck();
            checkWin();
            turn = 0;
        }
    });
};

$(document).ready(function () {
    newGame();
});

boardCheck = function () {
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
};

checkWin = function () {
    if ((a1 == a2 && a1 == a3 && (a1 == "x")) || //first row
    (b1 == b2 && b1 == b3 && (b1 == "x")) || //second row
    (c1 == c2 && c1 == c3 && (c1 == "x")) || //third row
    (a1 == b1 && a1 == c1 && (a1 == "x")) || //first column
    (a2 == b2 && a2 == c2 && (a2 == "x")) || //second column
    (a3 == b3 && a3 == c3 && (a3 == "x")) || //third column
    (a1 == b2 && a1 == c3 && (a1 == "x")) || //diagonal 1
    (a3 == b2 && a3 == c1 && (a3 == "x")) //diagonal 2
    ) {
        xWin = true;
        winAlert();

    } else {
        if ((a1 == a2 && a1 == a3 && (a1 == "o")) || //first row
        (b1 == b2 && b1 == b3 && (b1 == "o")) || //second row
        (c1 == c2 && c1 == c3 && (c1 == "o")) || //third row
        (a1 == b1 && a1 == c1 && (a1 == "o")) || //first column
        (a2 == b2 && a2 == c2 && (a2 == "o")) || //second column
        (a3 == b3 && a3 == c3 && (a3 == "o")) || //third column
        (a1 == b2 && a1 == c3 && (a1 == "o")) || //diagonal 1
        (a3 == b2 && a3 == c1 && (a3 == "o")) //diagonal 2
        ) {
            oWin = true;
            winAlert();

        } else {
            if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
                alert("It's a tie!");
                location.reload();
            }
        }
    }
};

var winAlert = function () {
    if (xWin == true) {
        alert("X Wins!");
        location.reload();
    } else {
        if (oWin == true) {
            alert("O Wins!");
            location.reload();
        }
    }
};
