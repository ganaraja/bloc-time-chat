(function() {
    function usernameModalInstanceCtrl($uibModalInstance, $scope) {

        $scope.ok = function() {
               $uibModalInstance.close($scope.username);
        };
    }

    angular
        .module('blocChat')
        .controller('usernameModalInstanceCtrl', ['$uibModalInstance', '$scope', usernameModalInstanceCtrl]);
})();
