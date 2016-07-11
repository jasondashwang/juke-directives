'use strict';

juke.directive('albumList', function(PlayerFactory){
  return {
    restrict: 'E',
    templateUrl: '/js/album/templates/albumlist.html',
    scope: {
      albums : '='
    }
  };
});
