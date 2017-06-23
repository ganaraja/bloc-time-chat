(function() {
    function HomeCtrl(Room,$uibModal,Message) {
      this.rooms = Room.all
      this.currentRoom = null;
      this.messages = null;
      this.open = function () {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstCtrl',
          controllerAs: 'modalCtrl',
          resolve: {
          }
        });

        modalInstance.result.then(function (room) {
          Room.addRoom(room);
        });
      };
      this.selectRoom = function(room){
        this.currentRoom = room;
        this.messages = Message.getByRoomId(this.currentRoom.$id);
        console.log(this.messages,this.currentRoom);
      };
      this.sendMessage = function () {
          console.log("In here")
          this.newMessage.roomId = this.currentRoom.$id;
          this.newMessage.username = this.currentUser;
          Message.send(this.newMessage);
      };
    };



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
