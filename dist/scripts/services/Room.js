(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var addRoom = function(room){
      rooms.$add(room);
    };

    return {
      all: rooms,
      addRoom: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

/*
var list = $firebaseArray(ref);
list.$add({ foo: "bar" }).then(function(ref) {
  var id = ref.key;
  console.log("added record with id " + id);
  list.$indexFor(id); // returns location in the array
});
*/
