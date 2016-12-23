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

        Answer.query(function (result) {
            vm.answers = [];
            vm.searchQuery = null;

            for (var i = 0; i < result.length; i++) {
                var answer = result[i];
                if (answer.question.id == vm.question.id) {
                    vm.answers.push(answer);
                }
            }
        })
    }
})();
