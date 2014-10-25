'use strict';

describe('Controller: LitCtrl', function () {

  // load the controller's module
  beforeEach(module('valencia24App'));

  var LitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LitCtrl = $controller('LitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
