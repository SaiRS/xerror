用babel将es6中的error继承转换成es5代码时,
```
// es6
class CustomError extends Error {
}

// es5
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var CustomError = (function(_Error) {
  _inherits(CustomError, _Error);

  function CustomError() {
    _classCallCheck(this, CustomError);

    return _possibleConstructorReturn(
      this,
      (CustomError.__proto__ || Object.getPrototypeOf(CustomError)).apply(
        this,
        arguments
      )
    );
  }

  return CustomError;
})(Error);
```
我们可以看到在
```
    return _possibleConstructorReturn(
      this,
      (CustomError.__proto__ || Object.getPrototypeOf(CustomError)).apply(
        this,
        arguments
      )
    );
```
中`CustomError.__proto__`为`Error`,当我们对`Error.apply(this, arguments)`时，返回的是`Error`的实例而不是我们期望的`CustomError`的实例。这是因为`Error`被设计成可以通过`new Error('message')`，也可以通过`Error('message')`来实例化，而在我们的`new CustomError()`中，返回的是`Error`。
