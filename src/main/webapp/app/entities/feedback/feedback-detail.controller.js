(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('FeedbackDetailController', FeedbackDetailController);

    FeedbackDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Feedback', 'UserProfile', 'Subject'];

    function FeedbackDetailController($scope, $rootScope, $stateParams, previousState, entity, Feedback, UserProfile, Subject) {
        var vm = this;

        vm.feedback = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:feedbackUpdate', function(event, result) {
            vm.feedback = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
