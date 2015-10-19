var dom = require('./index');
var React = require('react');
var assert = require('chai').assert;

describe('wrapping dom components', function() {
  Object.keys(React.DOM).forEach(function(k) {
    describe(k, function() {
      it('should create a valid react element', function() {
        var el = dom(k)();
        assert.isTrue(React.isValidElement(el));
      });

      it('should ignore props if not passed', function() {
        var el = dom(k)('child a');
        assert.deepEqual(el.props.children, 'child a');
      });

      it('should allow passing children as arguments instead of array', function() {
        var el = dom(k)('child a', 'child b');
        assert.deepEqual(el.props.children, ['child a', 'child b']);
      });
    });
  });
});
