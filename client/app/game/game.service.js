angular
  .module('app')
  .service('GameService',function($http){
    this.name = '';
    this.postScore = function(name, score){
      return $http.post('http://localhost:5000/game',{name,score});
    };
  });
