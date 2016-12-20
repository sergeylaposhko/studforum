'use strict';

describe('Controller Tests', function() {

    describe('Subject Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockSubject, MockActivity, MockQuestion, MockFeedback, MockUserProfile;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockSubject = jasmine.createSpy('MockSubject');
            MockActivity = jasmine.createSpy('MockActivity');
            MockQuestion = jasmine.createSpy('MockQuestion');
            MockFeedback = jasmine.createSpy('MockFeedback');
            MockUserProfile = jasmine.createSpy('MockUserProfile');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Subject': MockSubject,
                'Activity': MockActivity,
                'Question': MockQuestion,
                'Feedback': MockFeedback,
                'UserProfile': MockUserProfile
            };
            createController = function() {
                $injector.get('$controller')("SubjectDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'studForumApp:subjectUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
