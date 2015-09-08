var JC = JC || {};

JC.controller = (function(){
  var init= function(){
          JC.view.init();
          gameLoop();
        };

  // Interval to add new squares to the board.
  var gameLoop = function(){
              setInterval( gameTurn, 1000);
            };

  var gameTurn = function(){
    var square = JC.model.pickSquare();
    JC.view.lightUpSquare( square );
  };

  var scoreClick = function(x,y){
    JC.model.scoreClick(x,y);
    var score = JC.model.getScore();
    JC.view.updateScoreDisplay(score);
  };


  return {
    init: init,
    scoreClick: scoreClick
  };
})();
