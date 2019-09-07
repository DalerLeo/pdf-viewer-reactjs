import React from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "\n\nbutton {\n    border: none;\n    background: transparent;\n    cursor: pointer;\n    outline: none;\n}\n\n.rounded {\n    border-radius: 0.25rem !important;\n}\n\n.container {\n    min-width: 992px !important;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n@media (min-width: 576px) {\n    .container {\n        max-width: 540px;\n    }\n}\n\n@media (min-width: 768px) {\n    .container {\n        max-width: 720px;\n    }\n}\n\n@media (min-width: 992px) {\n    .container {\n        max-width: 960px;\n    }\n}\n\n@media (min-width: 1200px) {\n    .container {\n        max-width: 1140px;\n    }\n}\n\n.bg-dark {\n    background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n    background-color: #1d2124 !important;\n}\n\n\n.text-white {\n    color: #fff !important;\n}\n\n.row {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n.col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n\n.text-center {\n    text-align: center !important;\n}\n\n";
styleInject(css);

var verticalAlign = 'middle';

var SvgIcon = function SvgIcon(_ref) {
  var style = _ref.style,
      props = _objectWithoutProperties(_ref, ["style"]);

  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: '#fff',
    style: _objectSpread2({
      verticalAlign: verticalAlign
    }, style)
  }, props));
};

var Next = function Next(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var NextPageButton = function NextPageButton(_ref) {
  var css = _ref.css,
      page = _ref.page,
      pages = _ref.pages,
      handleNextClick = _ref.handleNextClick;
  var nextClass = "\n    ".concat(css ? css : 'btn btn-sm btn-link text-white pl-2', "\n    ").concat(page === pages ? ' disabled' : '', "\n  ");
  return React.createElement("button", {
    className: nextClass,
    onClick: handleNextClick
  }, React.createElement(Next, null));
};

NextPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired
};

var PagesIndicator = function PagesIndicator(_ref) {
  var css = _ref.css,
      page = _ref.page,
      pages = _ref.pages;
  var pagesClass = css ? css : 'small pt-2';
  return React.createElement("div", {
    className: pagesClass
  }, "Page ".concat(page, " / ").concat(pages));
};

PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};

var Prev = function Prev(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var PreviousPageButton = function PreviousPageButton(_ref) {
  var css = _ref.css,
      page = _ref.page,
      handlePrevClick = _ref.handlePrevClick;
  var prevClass = "\n    ".concat(css ? css : 'btn btn-sm btn-link text-white pr-2', "\n    ").concat(page === 1 ? ' disabled' : '', "\n  ");
  return React.createElement("button", {
    className: prevClass,
    onClick: handlePrevClick
  }, React.createElement(Prev, null));
};

PreviousPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

var ZoomIn = function ZoomIn(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
  }));
};

var ZoomIn$1 = function ZoomIn$1(_ref) {
  var scale = _ref.scale,
      maxScale = _ref.maxScale,
      css = _ref.css,
      handleZoomIn = _ref.handleZoomIn;
  var zoomInClass = "".concat(css ? css : 'btn btn-sm btn-link text-white pl-2').concat(scale === maxScale ? ' disabled' : '');
  return React.createElement("button", {
    type: "button",
    className: zoomInClass,
    onClick: handleZoomIn
  }, React.createElement(ZoomIn, null));
};

ZoomIn$1.propTypes = {
  css: PropTypes.string,
  handleZoomIn: PropTypes.func.isRequired
};

var ZoomOut = function ZoomOut(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"
  }));
};

var ZoomOut$1 = function ZoomOut$1(_ref) {
  var scale = _ref.scale,
      css = _ref.css,
      handleZoomOut = _ref.handleZoomOut;
  var zoomOutClass = "".concat(css ? css : 'btn btn-sm btn-link text-white pr-2').concat(scale === 1 ? ' disabled' : '');
  return React.createElement("button", {
    type: "button",
    className: zoomOutClass,
    onClick: handleZoomOut
  }, React.createElement(ZoomOut, null));
};

ZoomOut$1.propTypes = {
  css: PropTypes.string,
  handleZoomOut: PropTypes.func.isRequired
};

var Reset = function Reset(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var ResetZoom = function ResetZoom(_ref) {
  var css = _ref.css,
      handleResetZoom = _ref.handleResetZoom;
  var resetZoomClass = css ? css : 'btn btn-sm btn-link text-white px-2';
  return React.createElement("button", {
    type: "button",
    className: resetZoomClass,
    onClick: handleResetZoom
  }, React.createElement(Reset, null));
};

ResetZoom.propTypes = {
  css: PropTypes.string,
  handleResetZoom: PropTypes.func.isRequired
};

var RotateLeft = function RotateLeft(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"
  }));
};

var RotateLeft$1 = function RotateLeft$1(_ref) {
  var css = _ref.css,
      rotationAngle = _ref.rotationAngle,
      handleRotateLeft = _ref.handleRotateLeft;
  var rotateLeftClass = "\n    ".concat(css ? css : 'btn btn-sm btn-link text-white pr-2', "\n    ").concat(rotationAngle === -90 ? ' disabled' : '', "\n  ");
  return React.createElement("button", {
    type: "button",
    className: rotateLeftClass,
    onClick: handleRotateLeft
  }, React.createElement(RotateLeft, null));
};

RotateLeft$1.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleRotateLeft: PropTypes.func.isRequired
};

var ResetRotation = function ResetRotation(_ref) {
  var css = _ref.css,
      rotationAngle = _ref.rotationAngle,
      handleResetRotation = _ref.handleResetRotation;
  var resetRotationClass = "\n    ".concat(css ? css : 'btn btn-sm btn-link text-white px-2', "\n    ").concat(rotationAngle === 0 || rotationAngle === 360 ? ' disabled' : '', "\n  ");
  return React.createElement("button", {
    type: "button",
    className: resetRotationClass,
    onClick: handleResetRotation
  }, React.createElement(Reset, null));
};

ResetRotation.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleResetRotation: PropTypes.func.isRequired
};

var RotateRight = function RotateRight(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"
  }));
};

var RotateRight$1 = function RotateRight$1(_ref) {
  var css = _ref.css,
      rotationAngle = _ref.rotationAngle,
      handleRotateRight = _ref.handleRotateRight;
  var rotateRightClass = "\n    ".concat(css ? css : 'btn btn-sm btn-link text-white pl-2', "\n    ").concat(rotationAngle === 90 ? ' disabled' : '', "\n  ");
  return React.createElement("button", {
    type: "button",
    className: rotateRightClass,
    onClick: handleRotateRight
  }, React.createElement(RotateRight, null));
};

RotateRight$1.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleRotateRight: PropTypes.func.isRequired
};

var displayFlex = {
  display: 'flex',
  alignItems: 'center'
};

var displayFlexCenter = _objectSpread2({}, displayFlex, {
  justifyContent: 'center'
});

var displayFlexSpaceBetween = _objectSpread2({}, displayFlex, {
  justifyContent: 'space-between'
});

var Navigation = function Navigation(_ref) {
  var page = _ref.page,
      pages = _ref.pages,
      scale = _ref.scale,
      maxScale = _ref.maxScale,
      rotationAngle = _ref.rotationAngle,
      hideZoom = _ref.hideZoom,
      hideRotation = _ref.hideRotation,
      css = _ref.css,
      handlePrevClick = _ref.handlePrevClick,
      handleNextClick = _ref.handleNextClick,
      handleZoomIn = _ref.handleZoomIn,
      handleResetZoom = _ref.handleResetZoom,
      handleZoomOut = _ref.handleZoomOut,
      handleRotateLeft = _ref.handleRotateLeft,
      handleResetRotation = _ref.handleResetRotation,
      handleRotateRight = _ref.handleRotateRight;
  return React.createElement("div", {
    className: css.navbarWrapper ? css.navbarWrapper : 'container rounded bg-dark text-white'
  }, React.createElement("div", {
    style: displayFlexSpaceBetween
  }, !hideZoom && React.createElement("div", null, React.createElement(ZoomOut$1, {
    scale: scale,
    css: css.zoomOutBtn,
    handleZoomOut: handleZoomOut
  }), React.createElement(ResetZoom, {
    css: css.resetZoomBtn,
    handleResetZoom: handleResetZoom
  }), React.createElement(ZoomIn$1, {
    scale: scale,
    maxScale: maxScale,
    css: css.zoomInBtn,
    handleZoomIn: handleZoomIn
  })), React.createElement("div", null, React.createElement("div", {
    style: displayFlexCenter
  }, React.createElement(PreviousPageButton, {
    css: css.previousPageBtn,
    page: page,
    pages: pages,
    handlePrevClick: handlePrevClick
  }), React.createElement(PagesIndicator, {
    css: css.pageIndicator,
    page: page,
    pages: pages
  }), React.createElement(NextPageButton, {
    css: css.nextPageBtn,
    page: page,
    pages: pages,
    handleNextClick: handleNextClick
  }))), !hideRotation && React.createElement("div", null, React.createElement(RotateLeft$1, {
    css: css.rotateLeftBtn,
    rotationAngle: rotationAngle,
    handleRotateLeft: handleRotateLeft
  }), React.createElement(ResetRotation, {
    css: css.resetRotationBtn,
    rotationAngle: rotationAngle,
    handleResetRotation: handleResetRotation
  }), React.createElement(RotateRight$1, {
    css: css.rotateRightBtn,
    rotationAngle: rotationAngle,
    handleRotateRight: handleRotateRight
  }))));
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  css: PropTypes.shape({
    previousPageBtn: PropTypes.string,
    nextPageBtn: PropTypes.string,
    pages: PropTypes.string,
    wrapper: PropTypes.string
  }),
  elements: PropTypes.shape({
    previousPageBtn: PropTypes.any,
    nextPageBtn: PropTypes.any,
    pages: PropTypes.any
  }),
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
};
Navigation.defaultProps = {
  css: {},
  elements: {}
};

var Styles = {
  canvas: {
    height: '1000px',
    maxHeight: '1000px',
    maxWidth: '1000px',
    overflow: 'auto'
  }
};

var PDFViewer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PDFViewer, _React$Component);

  function PDFViewer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PDFViewer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PDFViewer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: 0,
      page: 1,
      scale: 1,
      scaleStep: 1,
      maxScale: 3,
      rotationAngle: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentComplete", function (pages) {
      _this.setState({
        pages: pages
      });

      _this.props.onDocumentComplete && _this.props.onDocumentComplete(pages);
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentError", function (err) {
      _this.props.onDocumentError && _this.props.onDocumentError(err);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePrevClick", function () {
      var page = _this.state.page;
      var onPrevBtnClick = _this.props.onPrevBtnClick;
      if (page === 1) return;

      _this.setState({
        page: page - 1
      });

      onPrevBtnClick && onPrevBtnClick(page - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleNextClick", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          pages = _this$state.pages;
      var onNextBtnClick = _this.props.onNextBtnClick;
      if (page === pages) return;

      _this.setState({
        page: page + 1
      });

      onNextBtnClick && onNextBtnClick(page + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleZoomIn", function () {
      if (_this.state.scale < _this.state.maxScale) {
        _this.setState({
          scale: _this.state.scale + _this.state.scaleStep
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResetZoom", function () {
      _this.setState({
        scale: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleZoomOut", function () {
      if (_this.state.scale > 1) {
        _this.setState({
          scale: _this.state.scale - _this.state.scaleStep
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRotateLeft", function () {
      if (_this.state.rotationAngle !== -90) {
        _this.setState({
          rotationAngle: -90
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResetRotation", function () {
      if (_this.state.rotationAngle !== 0 || _this.state.rotationAngle !== 360) {
        _this.setState({
          rotationAngle: 360
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRotateRight", function () {
      if (_this.state.rotationAngle !== 90) {
        _this.setState({
          rotationAngle: 90
        });
      }
    });

    return _this;
  }

  _createClass(PDFViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        pages: null,
        page: this.props.page || this.state.page,
        scale: this.props.scale || this.state.scale,
        scaleStep: this.props.scaleStep || this.state.scaleStep,
        maxScale: this.props.maxScale || this.state.maxScale,
        rotationAngle: this.props.rotationAngle || this.state.rotationAngle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var source = this.props.document;
      var _this$props = this.props,
          loader = _this$props.loader,
          hideNavbar = _this$props.hideNavbar,
          hideZoom = _this$props.hideZoom,
          hideRotation = _this$props.hideRotation,
          navbarOnTop = _this$props.navbarOnTop,
          navigation = _this$props.navigation,
          css = _this$props.css,
          canvasCss = _this$props.canvasCss,
          onDocumentClick = _this$props.onDocumentClick;
      var _this$state2 = this.state,
          page = _this$state2.page,
          pages = _this$state2.pages,
          scale = _this$state2.scale,
          maxScale = _this$state2.maxScale,
          rotationAngle = _this$state2.rotationAngle;
      var NavigationElement = navigation;
      var pdf = React.createElement(PDF, {
        file: source.file || source.url,
        content: source.base64,
        binaryContent: source.binary,
        documentInitParameters: source.connection,
        loading: loader,
        page: page,
        scale: scale,
        rotate: rotationAngle,
        onDocumentError: this.onDocumentError,
        onDocumentComplete: this.onDocumentComplete
      });
      var nav = null;

      if (!hideNavbar && pages > 0) {
        nav = !navigation || navigation && _typeof(navigation) === 'object' ? React.createElement(Navigation, {
          page: page,
          pages: pages,
          scale: scale,
          maxScale: maxScale,
          rotationAngle: rotationAngle,
          hideZoom: hideZoom,
          hideRotation: hideRotation,
          css: navigation ? navigation.css : undefined,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick,
          handleZoomIn: this.handleZoomIn,
          handleResetZoom: this.handleResetZoom,
          handleZoomOut: this.handleZoomOut,
          handleRotateLeft: this.handleRotateLeft,
          handleResetRotation: this.handleResetRotation,
          handleRotateRight: this.handleRotateRight
        }) : React.createElement(NavigationElement, {
          page: page,
          pages: pages,
          scale: scale,
          maxScale: maxScale,
          rotationAngle: rotationAngle,
          hideZoom: hideZoom,
          hideRotation: hideRotation,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick,
          handleZoomIn: this.handleZoomIn,
          handleResetZoom: this.handleResetZoom,
          handleZoomOut: this.handleZoomOut,
          handleRotateLeft: this.handleRotateLeft,
          handleResetRotation: this.handleResetRotation,
          handleRotateRight: this.handleRotateRight
        });
      }

      return React.createElement("div", {
        className: css ? css : 'container text-center'
      }, navbarOnTop ? React.createElement("div", null, React.createElement("div", null, nav), React.createElement("div", {
        className: canvasCss ? canvasCss : '',
        style: canvasCss ? {} : Styles.canvas,
        onClick: onDocumentClick
      }, pdf)) : React.createElement("div", null, React.createElement("div", {
        className: canvasCss ? canvasCss : '',
        style: canvasCss ? {} : Styles.canvas,
        onClick: onDocumentClick
      }, pdf), React.createElement("div", null, nav)));
    }
  }]);

  return PDFViewer;
}(React.Component);

PDFViewer.propTypes = {
  document: PropTypes.shape({
    file: PropTypes.any,
    // File object,
    url: PropTypes.string,
    connection: PropTypes.shape({
      url: PropTypes.string.isRequired // URL to fetch the pdf

    }),
    base64: PropTypes.string,
    // PDF file encoded in base64
    binary: PropTypes.shape({
      // UInt8Array
      data: PropTypes.any
    })
  }).isRequired,
  loader: PropTypes.node,
  page: PropTypes.number,
  scale: PropTypes.number,
  scaleStep: PropTypes.number,
  maxScale: PropTypes.number,
  css: PropTypes.string,
  canvasCss: PropTypes.string,
  rotationAngle: PropTypes.number,
  onDocumentClick: PropTypes.func,
  onDocumentComplete: PropTypes.func,
  onDocumentError: PropTypes.func,
  onPrevBtnClick: PropTypes.func,
  onNextBtnClick: PropTypes.func,
  hideNavbar: PropTypes.bool,
  navbarOnTop: PropTypes.bool,
  hideZoom: PropTypes.bool,
  hideRotation: PropTypes.bool,
  navigation: PropTypes.oneOfType([// Can be an object with css classes or react elements to be rendered
  PropTypes.shape({
    css: PropTypes.shape({
      navbarWrapper: PropTypes.string,
      zoomOutBtn: PropTypes.string,
      resetZoomBtn: PropTypes.string,
      zoomInBtn: PropTypes.string,
      previousPageBtn: PropTypes.string,
      pageIndicator: PropTypes.string,
      nextPageBtn: PropTypes.string,
      rotateLeftBtn: PropTypes.string,
      resetRotationBtn: PropTypes.string,
      rotateRightBtn: PropTypes.string
    })
  }), // Or a full navigation component
  PropTypes.any])
};
PDFViewer.defaultProps = {
  hideNavbar: false,
  hideZoom: false,
  hideRotation: false,
  navbarOnTop: false
};

export default PDFViewer;
