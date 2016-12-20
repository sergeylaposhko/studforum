(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('SubjectDetailController', SubjectDetailController);

    SubjectDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Subject', 'Activity', 'Question', 'Feedback', 'UserProfile'];

    function SubjectDetailController($scope, $rootScope, $stateParams, previousState, entity, Subject, Activity, Question, Feedback, UserProfile) {
        var vm = this;

        vm.subject = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:subjectUpdate', function(event, result) {
            vm.subject = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
