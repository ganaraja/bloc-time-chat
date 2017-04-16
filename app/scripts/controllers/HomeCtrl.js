(function() {
    function HomeCtrl(Room,$uibModal) {
      this.rooms = Room.all
      this.open = function () {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modalCtrl',
          resolve: {
          }
        });

        modalInstance.result.then(function (room) {

        });
      };
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal',HomeCtrl]);
})();
