'use strict';

describe('Service: p24', function () {

  // load the service's module
  beforeEach(module('valencia24App'));

  // instantiate service
  var p24;
  beforeEach(inject(function (_p24_) {
    p24 = _p24_;
  }));

  it('should do something', function () {
    expect(!!p24).toBe(true);
  });

});
