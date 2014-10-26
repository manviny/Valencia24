'use strict';

describe('Service: cordova', function () {

  // load the service's module
  beforeEach(module('valencia24App'));

  // instantiate service
  var cordova;
  beforeEach(inject(function (_cordova_) {
    cordova = _cordova_;
  }));

  it('should do something', function () {
    expect(!!cordova).toBe(true);
  });

});
