(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('SubjectController', SubjectController);

    SubjectController.$inject = ['$scope', '$state', 'Subject'];

    function SubjectController ($scope, $state, Subject) {
        var vm = this;

        vm.subjects = [];

        loadAll();

        function loadAll() {
            Subject.query(function(result) {
                vm.subjects = result;
                vm.searchQuery = null;
            });
        }
    }
})();
