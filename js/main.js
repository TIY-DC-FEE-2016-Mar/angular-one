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
     this.all = [
       { species: "Buffalo", type: "Mammal", picture: "https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg" },
       { species: "Penguin", type: "Bird", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/800px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg" },
       { species: "Platypus", type: "Marsupial", picture: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Wild_Platypus_4.jpg" },
       { species: "Ostrich", type: "Bird", picture: "" },
       { species: "T-Rex", type: "Dinosaur", picture: "" },
       { species: "Bear", type: "Mammal", picture: "" },
       { species: "Baboon", type: "Mammal", picture: "" },
       { species: "Velociraptor", type: "Dinosaur", picture: "" }
     ];

     this.previewLimit = 10;

     this.isAnimalAwake = function isAnimalAwake(x) {
       var now = new Date();
       var isDay;

       if (now.getHours() >= 8 && now.getHours() <= 20) {
         isDay = true;
       } else {
         isDay = false;
       }

       if (x.type === 'Marsupial') {
         return !isDay;
       } else {
         return isDay;
       }
     }

     this.types = function animalTypes() {
       var uniqueTypes = [];
       this.all.forEach(function(animal) {
         if (uniqueTypes.indexOf(animal.type) === -1) {
           uniqueTypes.push(animal.type);
         }
       })
       return uniqueTypes;
     };
   }
})();
