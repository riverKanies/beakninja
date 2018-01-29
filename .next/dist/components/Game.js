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
    if (i < 2 || i > 11) tiles[i][j] = { x: j, y: i, img: '/static/tiles/tile1.PNG' };
    if (j < 4 || j > 19) tiles[i][j] = { x: j, y: i, img: '/static/tiles/tile1.PNG' };
  }
}

var Game = function (_Component) {
  (0, _inherits3.default)(Game, _Component);

  function Game(props) {
    (0, _classCallCheck3.default)(this, Game);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || (0, _getPrototypeOf2.default)(Game)).call(this, props));

    _this.state = {};
    _this.state.bird = { x: 12, y: 6, dir: 'left', frame: 1 };

    return _this;
  }

  (0, _createClass3.default)(Game, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.body.addEventListener('keydown', function (e) {
        //e.preventDefault()
        if (_this2.state.bird.moving) return;
        var keyconverter = { 38: 'up', 37: 'left', 40: 'down', 39: 'right' };
        var dir = keyconverter[e.keyCode];
        _this2.move(dir);
      }.bind(this));
      this.animate();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('svg', { id: 'game', viewBox: vb.join(' '), width: '100%', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('rect', { x: '0', y: '0', width: vb[2], height: vb[3], fill: 'darkgray', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), tiles.map(function (row, i) {
        return row.map(function (tile, j) {
          return _react2.default.createElement('image', { key: i + '-' + j, href: tile.img, x: tile.x * tileSize, y: tile.y * tileSize, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          });
        });
      }), _react2.default.createElement(_Bird2.default, { bird: this.state.bird, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }, {
    key: 'move',
    value: function move(dir) {
      if (!dir) dir = this.state.bird.dir;
      var dx = 0;
      var dy = 0;
      if (dir == 'up') dy = -1;
      if (dir == 'down') dy = 1;
      if (dir == 'left') dx = -1;
      if (dir == 'right') dx = 1;
      if (dx == 0 && dy == 0) return;
      var _state$bird = this.state.bird,
          x = _state$bird.x,
          y = _state$bird.y;

      var blocked = tiles[y + dy][x + dx];
      var moving = false;
      if (blocked) {
        dx = 0;
        dy = 0;
      } else {
        setTimeout(this.move.bind(this), 50);
        moving = true;
      }
      this.setState({ bird: (0, _extends3.default)({}, this.state.bird, { x: x + dx, y: y + dy, dir: dir, moving: moving }) });
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this3 = this;

      var frame = this.state.bird.frame;

      var newFrame = frame < 2 ? frame + 1 : 1;
      this.setState({ bird: (0, _extends3.default)({}, this.state.bird, { frame: newFrame }) });
      window.setTimeout(function () {
        _this3.animate();
      }, 2000);
    }
  }]);

  return Game;
}(_react.Component);

exports.default = Game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FtZS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJCaXJkIiwidGlsZVNpemUiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0IiwidmIiLCJ0aWxlcyIsImkiLCJqIiwieCIsInkiLCJpbWciLCJHYW1lIiwicHJvcHMiLCJzdGF0ZSIsImJpcmQiLCJkaXIiLCJmcmFtZSIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibW92aW5nIiwia2V5Y29udmVydGVyIiwia2V5Q29kZSIsIm1vdmUiLCJiaW5kIiwiYW5pbWF0ZSIsImpvaW4iLCJtYXAiLCJyb3ciLCJ0aWxlIiwiZHgiLCJkeSIsImJsb2NrZWQiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJuZXdGcmFtZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFlBQU4sQUFBa0I7QUFDbEIsSUFBTSxhQUFOLEFBQW1CO0FBQ25CLElBQU0sS0FBSyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUcsWUFBUCxBQUFpQixVQUFVLGFBQXRDLEFBQVcsQUFBc0M7O0FBRWpELElBQU0sUUFBTixBQUFjO0FBQ2QsS0FBSyxJQUFJLElBQVQsQUFBVyxHQUFHLElBQWQsQUFBZ0IsWUFBaEIsQUFBNEIsS0FBSyxBQUMvQjtRQUFBLEFBQU0sS0FBTixBQUFXLEFBQ1g7T0FBSyxJQUFJLElBQVQsQUFBVyxHQUFHLElBQWQsQUFBZ0IsV0FBaEIsQUFBMkIsS0FBSyxBQUM5QjtRQUFJLElBQUEsQUFBRSxLQUFLLElBQVgsQUFBYSxJQUFJLE1BQUEsQUFBTSxHQUFOLEFBQVMsS0FBSyxFQUFDLEdBQUQsQUFBSSxHQUFHLEdBQVAsQUFBVSxHQUFHLEtBQTNCLEFBQWMsQUFBa0IsQUFDakQ7UUFBSSxJQUFBLEFBQUUs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ckIsQUFBVyxBQUFlLE9BQTFCLEFBQWlDLEFBQ2pDO2lCQUFBLEFBQVMsQUFDVjtBQUNEO1dBQUEsQUFBSyxTQUFTLEVBQUMsaUNBQVUsS0FBQSxBQUFLLE1BQWYsQUFBcUIsUUFBTSxHQUFHLElBQTlCLEFBQWdDLElBQUksR0FBRyxJQUF2QyxBQUF5QyxJQUFJLEtBQTdDLEtBQWtELFFBQWpFLEFBQWMsQUFBQyxBQUNoQjs7Ozs4QkFDVTttQkFBQTs7VUFBQSxBQUNGLFFBQVMsS0FBQSxBQUFLLE1BRFosQUFDa0IsS0FEbEIsQUFDRixBQUNQOztVQUFNLFdBQVcsUUFBQSxBQUFRLElBQUksUUFBWixBQUFvQixJQUFyQyxBQUF5QyxBQUN6QztXQUFBLEFBQUssU0FBUyxFQUFDLGlDQUFVLEtBQUEsQUFBSyxNQUFmLEFBQXFCLFFBQU0sT0FBMUMsQUFBYyxBQUFDLEFBQWtDLEFBQ2pEO2FBQUEsQUFBTyxXQUFXLFlBQUksQUFBQztlQUFBLEFBQUssQUFBVTtBQUF0QyxTQUFBLEFBQXdDLEFBQ3pDOzs7OztBQXZEZ0IsQSxBQTBEbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUml2ZXJfSG9tZS9Eb2N1bWVudHMvc3RhcnR1cC9iZWFrbmluamEifQ==