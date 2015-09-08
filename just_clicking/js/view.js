var JC = JC || {};

JC.view = (function(){

  var init= function(){
          fillClickZone();
          attachListeners();
        };

  // These three function put the board on the page.

  var fillClickZone= function(){
                   for (var i = 0; i < 4; i++) {
                     addRowToClickZone(i);
                   }
                 };

  var addRowToClickZone= function( y ){
                       $row = $( "<div class='row'></div>" );
                       $( '#click-zone' ).append( $row );
                       for (var i = 0; i < 4; i++) {
                         addClickerToRow( $row, i, y );
                       }
                     };

  var addClickerToRow= function( row, x, y ){
                     row.append( "<div class='clicker' data-x='" + x + "' data-y='" + y + "'></div>" );
                   };

  // This sets up the click listener on each square.

  var attachListeners= function(){
                     $( ".clicker" ).click( function(){
                       var $square = $( this );
                       $square.removeClass( "lit" );
                       // JC.model.scoreClick($square.data().x, $square.data().y);
                       JC.controller.scoreClick($square.data().x, $square.data().y);
                   });};

  // This turns a square red.

  var lightUpSquare= function( square ){
                   var $square = $( ".clicker[data-x='" + square.x + "'][data-y='" + square.y + "']" );
                   $square.addClass( "lit" );
                 };

  var updateScoreDisplay= function(score){
                      var $scoreSpan = $( "#score" );
                      $scoreSpan.text( score );
                    };

  return {
    init: init,
    lightUpSquare: lightUpSquare,
    updateScoreDisplay: updateScoreDisplay
  };
})();
