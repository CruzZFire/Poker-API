var main = function () {
  "use strict";
  
  var $create = $("<button>").text("Get a hand of cards");
  var $evaluate = $("<button>").text("Evaluate your hand");
  var $tryAgain = $("<button>").text("Try Again!");
  var cardSuit;
  var cardRank;
  
  $(".input").empty();
  $(".deck").empty();

  $(".input").append($create);
  
  $create.on("click", function () {
    var suits = ["spades", "hearts", "clubs", "diamonds"],
        ranks = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"],
        $cardSuit = new Array(),
        $cardRank = new Array(),
        $text,
        $randomsuit,
        $s,
        $randomrank,
        $r;
      
    for (var i = 0; i < 5; i = i + 1) {

      $randomsuit = Math.floor(Math.random() * (4));
      $randomrank = Math.floor(Math.random() * (13));
      $s = suits[$randomsuit];
      $r = ranks[$randomrank];
      
      $cardSuit.push($s);
      $cardRank.push($r);
      
      $text = $r + " of " + $s + "<br>";
      $(".deck").append($text);
    };
    
    console.log($cardSuit);
    console.log($cardRank);
    cardRank = $cardRank;
    cardSuit = $cardSuit;
    $(".input").empty();
    $(".input").append($evaluate);
  });
  
  $evaluate.on("click", function () {
    $(".input").empty();
    $(".deck").empty();
    var temp,
        equals = 0,
        unequals = 0,
        i,
        x,
        color = 0;
    
    for (i = 0; i < cardRank.length; i++) {
      for (x = i + 1; x < cardRank.length; x++) {
        if (cardRank[i] === cardRank[x]) {
          equals = equals +1;
        }
        else {
          unequals = unequals +1;
        };
      };
    };

    console.log(equals);
    console.log(unequals);
    
    if (unequals == 9) {
      $(".input").text("You have a pair!")
    }
    else if (unequals == 7) {
      $(".input").text("You have a trio!")
    }
    else if (unequals == 8) {
      $(".input").text("You have double pair!")
    }
    else if (unequals == 6) {
      $(".input").text("You a Full!!!")
    }
    else if (unequals == 4) {
      $(".input").text("You POKER!!!!")
    }
    else {    
      $(".input").text("You got absolutely nothing :(")
    };
     
    for (i = 0; i < cardSuit.length; i++) {
      for (x = i + 1; x < cardSuit.length; x++) {
        if (cardSuit[i] === cardSuit[x]) {
          color = color +1;
        };
      };
    };
    
    if (color == 10) {
      $(".input").text("You have Flush!!")
    };
    
    $(".deck").append($tryAgain);
    $tryAgain.on("click", main);
  });
};

$(document).ready(main);