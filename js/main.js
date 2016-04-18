(function() {
  'use strict';

  var animals = [
    { species: "Buffalo", type: "Mammal", picture: "https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg" },
    { species: "Penguin", type: "Bird", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/800px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg" },
    { species: "Platypus", type: "???", picture: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Wild_Platypus_4.jpg" }
  ];

  // WelcomeController
  angular
    .module('zoo-thing', [])
    .controller('WelcomeController', WelcomeController)
    .controller('AnimalsController', AnimalsController);

  function WelcomeController() {
    this.name = 'World';
    this.now = new Date();
  }

   // AnimalsController
   function AnimalsController() {
     var animal = animals[0];

     this.name = animal.species;
     this.type = animal.type;
     this.picture = animal.picture;
   }
})();
