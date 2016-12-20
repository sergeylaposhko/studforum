'use strict';

describe('Controller Tests', function() {

    describe('Feedback Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockFeedback, MockUserProfile, MockSubject;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockFeedback = jasmine.createSpy('MockFeedback');
            MockUserProfile = jasmine.createSpy('MockUserProfile');
            MockSubject = jasmine.createSpy('MockSubject');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Feedback': MockFeedback,
                'UserProfile': MockUserProfile,
                'Subject': MockSubject
            };
            createController = function() {
                $injector.get('$controller')("FeedbackDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'studForumApp:feedbackUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
