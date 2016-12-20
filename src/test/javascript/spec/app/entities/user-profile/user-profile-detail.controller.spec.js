'use strict';

describe('Controller Tests', function() {

    describe('UserProfile Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockUserProfile, MockSubject, MockFeedback, MockQuestion, MockAnswer;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockUserProfile = jasmine.createSpy('MockUserProfile');
            MockSubject = jasmine.createSpy('MockSubject');
            MockFeedback = jasmine.createSpy('MockFeedback');
            MockQuestion = jasmine.createSpy('MockQuestion');
            MockAnswer = jasmine.createSpy('MockAnswer');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'UserProfile': MockUserProfile,
                'Subject': MockSubject,
                'Feedback': MockFeedback,
                'Question': MockQuestion,
                'Answer': MockAnswer
            };
            createController = function() {
                $injector.get('$controller')("UserProfileDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'studForumApp:userProfileUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
