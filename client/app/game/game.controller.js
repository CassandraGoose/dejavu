angular
  .module('app')
  .controller('GameController',function($sce){
    const vm = this;

    vm.$onInit = function(){

    },
    vm.startGame= function(){
      vm.levelOne();
    },
    vm.levelOne=function(){
      vm.ap = `https://my.vetmatrixbase.com/clients/12679/images/cats-animals-grass-kittens--800x960.jpg`;
      vm.qp1 = $sce.trustAsHtml(`<img ng-click="$ctrl.loseGame()" src="http://www.dreamdictionarynow.com/wp-content/uploads/2014/08/weird-facts-about-dreams.jpg">`);
      vm.qp2 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="https://my.vetmatrixbase.com/clients/12679/images/cats-animals-grass-kittens--800x960.jpg">`);
      // vm.qp3 =
      // vm.qp4 =
    },
    vm.levelTwo=function(){
      vm.ap = `http://img1.izismile.com/img/img3/20100725/640/dreadful_and_weird_640_15.jpg`;
      vm.qp1 = $sce.trustAsHtml(`<img ng-click="$ctrl.loseGame()" src="http://www.dreamdictionarynow.com/wp-content/uploads/2014/08/weird-facts-about-dreams.jpg">`);
      vm.qp2 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="http://img1.izismile.com/img/img3/20100725/640/dreadful_and_weird_640_15.jpg">`);
    }
    vm.winGame=function(){

      console.log('hi');
    },
    vm.loseGame=function(){
      console.log('asdasd');
    }

  })
