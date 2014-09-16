var app = angular.module('signupApp', []);

app.controller('SignupCtrl', function($scope) {
    $scope.data = {};
    $scope.init = function() {
        $scope.data.firstName = "";
        $scope.data.lastName = "";
        $('.firstName').focus();
    };
    $scope.submit = function() {
        if($scope.signupForm.$valid) {
            console.log('Valid Form Submitted: ', $scope.data);
        } else {
            $scope.submitted = false;
            console.log('The Form "myForm" is invalid');
        }
    };
    $scope.init();
});

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'opt-in.html',
        replace: false
    }
});
