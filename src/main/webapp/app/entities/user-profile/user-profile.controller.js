(function() {
    'use strict';

    angular
        .module('studForumApp')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$scope', '$state', 'UserProfile'];

    function UserProfileController ($scope, $state, UserProfile) {
        var vm = this;

        vm.userProfiles = [];

        loadAll();

        function loadAll() {
            UserProfile.query(function(result) {
                vm.userProfiles = result;
                vm.searchQuery = null;
            });
        }
    }
})();
