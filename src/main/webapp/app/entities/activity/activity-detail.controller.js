(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('ActivityDetailController', ActivityDetailController);

    ActivityDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Activity', 'Question', 'Subject'];

    function ActivityDetailController($scope, $rootScope, $stateParams, previousState, entity, Activity, Question, Subject) {
        var vm = this;

        vm.activity = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:activityUpdate', function(event, result) {
            vm.activity = result;
        });
        $scope.$on('$destroy', unsubscribe);

        Question.query(function (result) {
            vm.questions = [];
            vm.searchQuery = null;

            for (var i = 0; i < result.length; i++) {
                var question = result[i];
                if (question.activity.id == vm.activity.id) {
                    vm.questions.push(question);
                }
            }
        })


    }
})();
