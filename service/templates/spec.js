'use strict';

describe('Service: <%= camelName %>', function () {

  beforeEach(module('<%= appname %>'));

  var <%= camelName %>;

  beforeEach(inject(function (_<%= camelName %>_) {
    <%= camelName %> = _<%= camelName %>_;
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });

});
