'use strict';

describe('Controller Tests', function() {

    describe('Question Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockQuestion, MockAnswer, MockActivity, MockSubject, MockUserProfile;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockQuestion = jasmine.createSpy('MockQuestion');
            MockAnswer = jasmine.createSpy('MockAnswer');
            MockActivity = jasmine.createSpy('MockActivity');
            MockSubject = jasmine.createSpy('MockSubject');
            MockUserProfile = jasmine.createSpy('MockUserProfile');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Question': MockQuestion,
                'Answer': MockAnswer,
                'Activity': MockActivity,
                'Subject': MockSubject,
                'UserProfile': MockUserProfile
            };
            createController = function() {
                $injector.get('$controller')("QuestionDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'studForumApp:questionUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
