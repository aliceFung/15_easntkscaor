var JC = JC || {};

JC.model = (function(){

  // Holds squares that are currently lit up on the board.

  var _activeSquares= [];
  var _score = 0;
  var _increaseBoardSize = false;

  // Randomly generates a pair of coordinates.

  var pickSquare= function(){
                var square = {
                      x: Math.floor(Math.random() * 4),
                      y: Math.floor(Math.random() * 4)
                    };
                _activeSquares.push( square );
                // JC.view.lightUpSquare( square );
                return square;
              };

  // Checks to see if a click was on an active square.
  var scoreClick= function(x, y){
                for( var i = 0; i < _activeSquares.length; i++ ){
                  var testSquare = _activeSquares[i];
                  if( testSquare.x === x && testSquare.y === y ) {
                    incrementUpScore();
                    _activeSquares.splice(i, 1);
                    break;
                  };
                  break;
                };
              };

  // Adds a random number between 5 and 15 to the score.
  var incrementUpScore= function(){
                      // var $scoreSpan = $( "#score" )
                      // score = parseInt( $scoreSpan.text() );
                      _score += ( Math.floor(Math.random() * 15) + 5);

                      // //bonus: increment board size
                      // if (_score % 100 >=1 && !_increaseBoardSize){
                      //   // JC.controller.increaseBoardSize();
                      // }

                    };

  var getScore = function(){
    return _score;
  };

  return {
    pickSquare: pickSquare,
    scoreClick: scoreClick,
    getScore: getScore
  };
})();
