(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('QuestionDetailController', QuestionDetailController);

    QuestionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Question', 'Answer', 'Activity', 'Subject', 'UserProfile'];

    function QuestionDetailController($scope, $rootScope, $stateParams, previousState, entity, Question, Answer, Activity, Subject, UserProfile) {
        var vm = this;

        vm.question = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:questionUpdate', function(event, result) {
            vm.question = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
