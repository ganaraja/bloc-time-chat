(function() {
    function usernameModalInstanceCtrl($uibModalInstance, $scope) {
        
        $scope.ok = function(isValid) {
            
            if (isValid) {
                $uibModalInstance.close($scope.username);
            }
            
        };
    }
    
    angular
        .module('blocChat')
        .controller('usernameModalInstanceCtrl', ['$uibModalInstance', '$scope', usernameModalInstanceCtrl]);
})();