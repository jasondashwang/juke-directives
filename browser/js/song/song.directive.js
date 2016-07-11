'use strict';

juke.directive('songList', function(PlayerFactory){
  return {
    restrict: 'E',
    scope: {
      songs: '='
    },
    templateUrl: '/js/song/templates/songlist.html',
    link: function(scope){
      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };

      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
    }
  }
})

juke.directive('doubleClick', function(PlayerFactory){
  return {
    restrict: 'A',
    scope: {
      action: '&doubleClick'
    },
    link: function(scope, element, attrs){

      element.on('dblclick', function(){
        scope.action();
      });

    }
  };

});
