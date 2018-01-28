'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Bird = require('./Bird');

var _Bird2 = _interopRequireDefault(_Bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/River_Home/Documents/startup/beakninja/components/Game.js';


var tileSize = 30;
var gameWidth = 24;
var gameHeight = 14;
var vb = [0, 0, gameWidth * tileSize, gameHeight * tileSize];

var tiles = [];
for (var i = 0; i < gameHeight; i++) {
  tiles[i] = [];
  for (var j = 0; j < gameWidth; j++) {
    tiles[i][j] = { x: j, y: i, img: '/static/tiles/tile1.PNG' };
  }
}

var Game = function (_Component) {
  (0, _inherits3.default)(Game, _Component);

  function Game(props) {
    (0, _classCallCheck3.default)(this, Game);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, props));

    _this.state = {};
    _this.state.bird = { x: 12, y: 6, dir: 'up' };
    return _this;
  }

  (0, _createClass3.default)(Game, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('svg', { viewBox: vb.join(' '), width: '100%', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('rect', { x: '0', y: '0', width: vb[2], height: vb[3], fill: 'darkgray', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), tiles.map(function (row, i) {
        return row.map(function (tile, j) {
          return _react2.default.createElement('image', { key: i + '-' + j, href: tile.img, x: tile.x * tileSize, y: tile.y * tileSize, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          });
        });
      }), _react2.default.createElement(_Bird2.default, { bird: this.state.bird, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this2 = this;

      var newDir = this.state.bird.dir == 'down' ? 'up' : 'down';
      this.setState({ bird: (0, _extends3.default)({}, this.state.bird, { dir: newDir }) });
      window.setTimeout(function () {
        _this2.animate();
      }, 5000);
    }
  }]);

  return Game;
}(_react.Component);

exports.default = Game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FtZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJCaXJkIiwidGlsZVNpemUiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0IiwidmIiLCJ0aWxlcyIsImkiLCJqIiwieCIsInkiLCJpbWciLCJHYW1lIiwicHJvcHMiLCJzdGF0ZSIsImJpcmQiLCJkaXIiLCJqb2luIiwibWFwIiwicm93IiwidGlsZSIsImFuaW1hdGUiLCJuZXdEaXIiLCJzZXRTdGF0ZSIsIndpbmRvdyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sYUFBTixBQUFtQjtBQUNuQixJQUFNLEtBQUssQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFHLFlBQVAsQUFBaUIsVUFBVSxhQUF0QyxBQUFXLEFBQXNDOztBQUVqRCxJQUFNLFFBQU4sQUFBYztBQUNkLEtBQUssSUFBSSxJQUFULEFBQVcsR0FBRyxJQUFkLEFBQWdCLFlBQWhCLEFBQTRCLEtBQUssQUFDL0I7UUFBQSxBQUFNLEtBQU4sQUFBVyxBQUNYO09BQUssSUFBSSxJQUFULEFBQVcsR0FBRyxJQUFkLEFBQWdCLFdBQWhCLEFBQTJCLEtBQUssQUFDOUI7VUFBQSxBQUFNLEdBQU4sQUFBUyxLQUFLLEVBQUMsR0FBRCxBQUFJLEdBQUcsR0FBUCxBQUFVLEdBQUcsS0FBM0IsQUFBYyxBQUFrQixBQUNqQztBQUNGOzs7SUFDSyxBO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1osQUFFTjs7VUFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO1VBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxFQUFDLEdBQUQsQUFBRyxJQUFJLEdBQVAsQUFBUyxHQUFHLEtBSlosQUFJbEIsQUFBa0IsQUFBaUI7V0FDcEM7Ozs7OzZCQUNTLEFBQ1I7NkJBQVEsY0FBQSxTQUFLLFNBQVMsR0FBQSxBQUFHLEtBQWpCLEFBQWMsQUFBUSxNQUFNLE9BQTVCLEFBQWtDO29CQUFsQztzQkFBQSxBQUNOO0FBRE07T0FBQSwwQ0FDQSxHQUFOLEFBQVEsS0FBSSxHQUFaLEFBQWMsS0FBSSxPQUFPLEdBQXpCLEFBQXlCLEFBQUcsSUFBSSxRQUFRLEdBQXhDLEFBQXdDLEFBQUcsSUFBSSxNQUEvQyxBQUFvRDtvQkFBcEQ7c0JBRE0sQUFDTixBQUNDO0FBREQ7Z0JBQ0MsQUFBTSxJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sR0FBSSxBQUNuQjttQkFBTyxBQUFJLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxHQUFJLEFBQ3hCOzBEQUFjLEtBQUssSUFBQSxBQUFFLE1BQWQsQUFBa0IsR0FBRyxNQUFNLEtBQTNCLEFBQWdDLEtBQUssR0FBRyxLQUFBLEFBQUssSUFBN0MsQUFBK0MsVUFBVSxHQUFHLEtBQUEsQUFBSyxJQUFqRSxBQUFtRTt3QkFBbkU7MEJBQVAsQUFBTyxBQUNSO0FBRFE7V0FBQTtBQURULEFBQU8sQUFHUixTQUhRO0FBSEgsQUFFTCxBQUtELDBCQUFBLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUI7b0JBQXZCO3NCQVBGLEFBQVEsQUFPTixBQUVIO0FBRkc7Ozs7O3dDQUdpQixBQUNuQjtXQUFBLEFBQUssQUFDTjs7Ozs4QkFDVTttQkFDVDs7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixPQUFoQixBQUF1QixTQUF2QixBQUFnQyxPQUEvQyxBQUFzRCxBQUN0RDtXQUFBLEFBQUssU0FBUyxFQUFDLGlDQUFVLEtBQUEsQUFBSyxNQUFmLEFBQXFCLFFBQU0sS0FBMUMsQUFBYyxBQUFDLEFBQWdDLEFBQy9DO2FBQUEsQUFBTyxXQUFXLFlBQUksQUFBQztlQUFBLEFBQUssQUFBVTtBQUF0QyxTQUFBLEFBQXdDLEFBQ3pDOzs7OztBQXpCZ0IsQSxBQTRCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUml2ZXJfSG9tZS9Eb2N1bWVudHMvc3RhcnR1cC9iZWFrbmluamEifQ==