angular
  .module('app')
  .controller('GameController',function($sce, $timeout, GameService){
    const vm = this;

    vm.$onInit = function(){
      vm.level=2;

      vm.score=0;
      vm.name = GameService.name;
    },
    vm.startGame= function(){
      vm.levelOne();
    },
    vm.levelOne=function(){
      vm.ap = `../../images/kitten.jpg`;
      vm.qp1 = $sce.trustAsHtml(`<img ng-click="$ctrl.loseGame()" src="../../images/watermellon.jpg">`);
      vm.qp2 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="../../images/kitten.jpg">`);
      $timeout(function(){
        vm.ap ='';
      }, 50);
      // vm.qp3 =
      // vm.qp4 =
    },
    vm.levelTwo=function(){
      console.log('yo');
      vm.ap = `../../images/crab.jpg`;
      vm.qp1 = $sce.trustAsHtml(`<img ng-click="$ctrl.loseGame()" src="../../images/banana.png">`);
      vm.qp2 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="../../images/crab.jpg">`);
      $timeout(function(){
        vm.ap ='';
      }, 50);
    },
    vm.levelThree=function(){
      vm.ap = `../../images/sloth.jpg`;
      vm.qp1 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="../../images/hulk.jpg">`);
      vm.qp2 = $sce.trustAsHtml(`<img ng-click="$ctrl.winGame()" src="../../images/sloth.jpg">`);
      $timeout(function(){
        vm.ap ='';
      }, 50);
    }
    vm.winGame=function(level){
      if (vm.level === 2) {
        vm.levelTwo();
        vm.level++
      } else if (vm.level === 3) {
        vm.levelThree();
        vm.level++
      } else if (vm.level === 4) {
        GameService.postScore(vm.name,vm.score)
        .then((data)=>{
          console.log(data);
        })
      }
      vm.score++;
      console.log('hi');
    },
    vm.loseGame=function(){
      console.log('asdasd');
    }

  })
