webpackHotUpdate(5,{

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/River_Home/Documents/startup/beakninja/components/Bird.js';

var tileSize = 30;

exports.default = function (props) {
    var dir = props.bird.dir || 'down';
    var x = 0;
    var y = 0;
    if (dir == 'up') {
        x = -10;
    } else if (dir == 'down') {
        x = -10;
        y = -20;
    }
    var transform = 'translate(' + x + ',' + y + ')';
    return _react2.default.createElement('image', { x: props.bird.x * tileSize, y: props.bird.y * tileSize, href: '/static/bird/' + dir + '1.PNG', transform: transform, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmlyZC5qcyJdLCJuYW1lcyI6WyJ0aWxlU2l6ZSIsInByb3BzIiwiZGlyIiwiYmlyZCIsIngiLCJ5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sV0FBTixBQUFpQixBQUNqQjs7a0JBQWUsVUFBQSxBQUFDLE9BQVUsQUFDdEI7UUFBTSxNQUFNLE1BQUEsQUFBTSxLQUFOLEFBQVcsT0FBdkIsQUFBOEIsQUFDOUI7UUFBSSxJQUFKLEFBQVEsQUFDUjtRQUFJLElBQUosQUFBUSxBQUNSO1FBQUksT0FBSixBQUFXLE1BQU0sQUFDYjtZQUFFLENBQUYsQUFBRyxBQUNOO0FBRkQsV0FFTyxJQUFJLE9BQUosQUFBVyxRQUFRLEFBQ3RCO1lBQUUsQ0FBRixBQUFHLEFBQ0g7WUFBRSxDQUFGLEFBQUcsQUFDTjtBQUNEO1FBQU0sMkJBQUEsQUFBeUIsVUFBekIsQUFBOEIsSUFBcEMsQUFDQTtvREFBYyxHQUFHLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFBckIsQUFBdUIsVUFBVSxHQUFHLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFBL0MsQUFBaUQsVUFBVSx3QkFBQSxBQUFzQixNQUFqRixTQUE2RixXQUE3RixBQUF3RztzQkFBeEc7d0JBQVAsQUFBTyxBQUNWO0FBRFU7S0FBQTtBQVhYIiwiZmlsZSI6IkJpcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1JpdmVyX0hvbWUvRG9jdW1lbnRzL3N0YXJ0dXAvYmVha25pbmphIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/River_Home/Documents/startup/beakninja/components/Bird.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/River_Home/Documents/startup/beakninja/components/Bird.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMzA2YzM5ZTNlMjQwNjI5N2NkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CaXJkLmpzPzA3N2E0YmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGlsZVNpemUgPSAzMFxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZGlyID0gcHJvcHMuYmlyZC5kaXIgfHwgJ2Rvd24nXG4gICAgbGV0IHggPSAwXG4gICAgbGV0IHkgPSAwXG4gICAgaWYgKGRpciA9PSAndXAnKSB7XG4gICAgICAgIHg9LTEwXG4gICAgfSBlbHNlIGlmIChkaXIgPT0gJ2Rvd24nKSB7XG4gICAgICAgIHg9LTEwXG4gICAgICAgIHk9LTIwXG4gICAgfVxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fSwke3l9KWBcbiAgICByZXR1cm4gPGltYWdlIHg9e3Byb3BzLmJpcmQueCp0aWxlU2l6ZX0geT17cHJvcHMuYmlyZC55KnRpbGVTaXplfSBocmVmPXtgL3N0YXRpYy9iaXJkLyR7ZGlyfTEuUE5HYH0gdHJhbnNmb3JtPXt0cmFuc2Zvcm19Lz5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0JpcmQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWEE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==