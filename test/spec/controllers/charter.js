'use strict';

describe('Controller: CharterCtrl', function () {

  // load the controller's module
  beforeEach(module('worldWideApp'));

  var CharterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharterCtrl = $controller('CharterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CharterCtrl.awesomeThings.length).toBe(3);
  });
});
