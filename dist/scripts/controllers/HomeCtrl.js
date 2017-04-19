(function() {
    function HomeCtrl(Room,$uibModal) {
      this.rooms = Room.all
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
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal',HomeCtrl]);
})();
