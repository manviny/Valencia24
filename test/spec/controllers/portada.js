'use strict';

describe('Controller: PortadaCtrl', function () {

  // load the controller's module
  beforeEach(module('valencia24App'));

  var PortadaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortadaCtrl = $controller('PortadaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
