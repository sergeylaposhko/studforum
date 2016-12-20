(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('UserProfileDetailController', UserProfileDetailController);

    UserProfileDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'UserProfile', 'Subject', 'Feedback', 'Question', 'Answer'];

    function UserProfileDetailController($scope, $rootScope, $stateParams, previousState, entity, UserProfile, Subject, Feedback, Question, Answer) {
        var vm = this;

        vm.userProfile = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:userProfileUpdate', function(event, result) {
            vm.userProfile = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
