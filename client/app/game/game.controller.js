angular
  .module('app')
  .controller('GameController',function(){
    const vm = this;

    vm.$onInit = function(){
      console.log('hey');
      //  vm.currentNavItem = 'page1';
    }

  })