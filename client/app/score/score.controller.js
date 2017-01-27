angular
  .module('app')
  .controller('ScoreController',function($http){
    const vm = this;
    console.log('hasdasd');
    vm.BaseURL = 'http://localhost:5000/game';

    vm.$onInit = function(){
      $http.get(vm.BaseURL).then(function(response) {
          vm.scores = response.data
          console.log(vm.score)
        })
    };

})
