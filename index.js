var React = require('react');

function objIsNode(prop) {
  if (prop instanceof Array) return true;
  return React.isValidElement(prop);
}

function isNode(prop) {
  switch (typeof prop) {
    case 'number': return true
    case 'string': return true
    case 'boolean': return !prop
    case 'object': return objIsNode(prop)
    default: return false
  }
}

function component(el, argsObj) {
  var args = Array.prototype.slice.call(argsObj);
  var props = args[0] || {};
  var children = args.slice(1, args.length);

  if (isNode(props)) {
    children = args;
    props = {};
  }

  if (children.length > 1) {
    props.children = children;
  } else if (children.length === 1) {
    props.children = children[0];
  }

  return React.createElement(el, props);
}

function dom(el) {
  return function() {
    return component(el, arguments);
  }
}

Object.keys(React.DOM).forEach(function(k) {
  dom[k] = dom(k);
});

module.exports = dom;
