(function() {
    'use strict';

    angular
        .module('studForumApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('user-profile', {
            parent: 'entity',
            url: '/user-profile',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'studForumApp.userProfile.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-profile/user-profiles.html',
                    controller: 'UserProfileController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userProfile');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('user-profile-detail', {
            parent: 'entity',
            url: '/user-profile/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'studForumApp.userProfile.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-profile/user-profile-detail.html',
                    controller: 'UserProfileDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userProfile');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'UserProfile', function($stateParams, UserProfile) {
                    return UserProfile.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'user-profile',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('user-profile-detail.edit', {
            parent: 'user-profile-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-profile/user-profile-dialog.html',
                    controller: 'UserProfileDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['UserProfile', function(UserProfile) {
                            return UserProfile.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('user-profile.new', {
            parent: 'user-profile',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-profile/user-profile-dialog.html',
                    controller: 'UserProfileDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                email: null,
                                pass: null,
                                firstName: null,
                                lastName: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('user-profile', null, { reload: 'user-profile' });
                }, function() {
                    $state.go('user-profile');
                });
            }]
        })
        .state('user-profile.edit', {
            parent: 'user-profile',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-profile/user-profile-dialog.html',
                    controller: 'UserProfileDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['UserProfile', function(UserProfile) {
                            return UserProfile.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-profile', null, { reload: 'user-profile' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('user-profile.delete', {
            parent: 'user-profile',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-profile/user-profile-delete-dialog.html',
                    controller: 'UserProfileDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['UserProfile', function(UserProfile) {
                            return UserProfile.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-profile', null, { reload: 'user-profile' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
