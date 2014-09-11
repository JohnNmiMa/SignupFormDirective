var app = angular.module('signupApp', [])

.controller('SignupCtrl', function($scope) {
    $scope.data = {};
    $scope.init = function() {
        $scope.data.firstName = "";
        $scope.data.lastName = "";
        $('.firstName').focus();
    }
    $scope.submit = function() {
        if($scope.signupForm.$valid) {
            console.log('Valid Form Submitted: ', $scope.data);
        } else {
            $scope.submitted = false;
            console.log('The Form "myForm" is invalid');
        }
    }
    $scope.init();
})

.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'app-template.html',
        replace: false
    }
})

.directive('customAttr', function() {
    return {
        link: function($scope, element, attrs) {
            console.log($scope);
            console.log(element);
            console.log(attrs);
        }
    }
});
