var data;
// Initialize spotify track and query api
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='

// Initialize app
var myApp = angular.module('myApp', [])

// Initialize controller
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  
  // Gets track from spotify api
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items
      
    })
  }

  // Plays or pauses tracks
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

