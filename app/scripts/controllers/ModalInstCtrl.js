(function() {
    function ModalInstCtrl($uibModalInstance) {
      this.ok = function () {
        $uibModalInstance.close(this.newRoom);
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    };
    angular
        .module('blocChat')
        .controller('ModalInstCtrl', ['$uibModalInstance',ModalInstCtrl]);
})();
