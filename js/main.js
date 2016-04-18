(function() {
  'use strict';

  angular
    .module('zoo-thing', [])
    .controller('WelcomeController', WelcomeController);

  function WelcomeController() {
    this.name = 'World';
    this.now = new Date();
  }

})();
