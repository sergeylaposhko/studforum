(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('AnswerDetailController', AnswerDetailController);

    AnswerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Answer', 'Question', 'UserProfile'];

    function AnswerDetailController($scope, $rootScope, $stateParams, previousState, entity, Answer, Question, UserProfile) {
        var vm = this;

        vm.answer = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('studForumApp:answerUpdate', function(event, result) {
            vm.answer = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
