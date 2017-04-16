(function() {
    function ModalInstCtrl($uibModalInstance) {
      this.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    };
    angular
        .module('blocChat')
        .controller('ModalInstCtrl', ['$uibModalInstance',ModalInstCtrl]);
})();
