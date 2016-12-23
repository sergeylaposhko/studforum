(function () {
    'use strict';

    angular
        .module('studForumApp')
        .controller('SubjectDetailController', SubjectDetailController);

    SubjectDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Subject', 'Activity', 'Question', 'Feedback', 'UserProfile'];

    function SubjectDetailController($scope, $rootScope, $stateParams, previousState, entity, Subject, Activity, Question, Feedback, UserProfile) {
        var vm = this;

        vm.feedbackFilter = function (feedback) {
            return feedback.subject.id == vm.subject.id;
        };

        vm.subject = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:subjectUpdate', function (event, result) {
            vm.subject = result;
        });
        $scope.$on('$destroy', unsubscribe);

        Feedback.query(function (result) {
            vm.feedbacks = [];
            vm.searchQuery = null;

            for (var i = 0; i < result.length; i++) {
                var feedback = result[i];
                console.log(feedback);
                console.log(vm.subject);
                if (feedback.subject.id == vm.subject.id) {
                    vm.feedbacks.push(feedback);
                }
            }
        })
    }
})();
