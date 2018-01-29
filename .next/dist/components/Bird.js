'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

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
    } else if (dir == 'left') {
        y = -20;
    } else if (dir == 'right') {
        y = -20;
        x = -20;
    }
    var transform = 'translate(' + x + ',' + y + ')';
    return _react2.default.createElement('image', { x: props.bird.x * tileSize, y: props.bird.y * tileSize, href: '/static/bird/' + dir + (props.bird.frame || 1) + '.PNG', transform: transform, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmlyZC5qcyJdLCJuYW1lcyI6WyJ0aWxlU2l6ZSIsInByb3BzIiwiZGlyIiwiYmlyZCIsIngiLCJ5IiwidHJhbnNmb3JtIiwiZnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxXQUFOLEFBQWlCLEFBQ2pCOztrQkFBZSxVQUFBLEFBQUMsT0FBVSxBQUN0QjtRQUFNLE1BQU0sTUFBQSxBQUFNLEtBQU4sQUFBVyxPQUF2QixBQUE4QixBQUM5QjtRQUFJLElBQUosQUFBUSxBQUNSO1FBQUksSUFBSixBQUFRLEFBQ1I7UUFBSSxPQUFKLEFBQVcsTUFBTSxBQUNiO1lBQUUsQ0FBRixBQUFHLEFBQ047QUFGRCxlQUVXLE9BQUosQUFBVyxRQUFRLEFBQ3RCO1lBQUUsQ0FBRixBQUFHLEFBQ0g7WUFBRSxDQUFGLEFBQUcsQUFDTjtBQUhNLEtBQUEsVUFHSSxPQUFKLEFBQVcsUUFBUSxBQUN0QjtZQUFFLENBQUYsQUFBRyxBQUNOO0FBRk0sS0FBQSxNQUVBLElBQUksT0FBSixBQUFXLFNBQVMsQUFDdkI7WUFBRSxDQUFGLEFBQUcsQUFDSDtZQUFFLENBQUYsQUFBRyxBQUNOO0FBQ0Q7UUFBTSwyQkFBQSxBQUF5QixVQUF6QixBQUE4QixJQUFwQyxBQUNBO29EQUFjLEdBQUcsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUFyQixBQUF1QixVQUFVLEdBQUcsTUFBQSxBQUFNLEtBQU4sQUFBVyxJQUEvQyxBQUFpRCxVQUFVLHdCQUFBLEFBQXNCLE9BQU0sTUFBQSxBQUFNLEtBQU4sQUFBVyxTQUF2QyxBQUFnRCxLQUEzRyxRQUFvSCxXQUFwSCxBQUErSDtzQkFBL0g7d0JBQVAsQUFBTyxBQUNWO0FBRFU7S0FBQTtBQWhCWCIsImZpbGUiOiJCaXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9SaXZlcl9Ib21lL0RvY3VtZW50cy9zdGFydHVwL2JlYWtuaW5qYSJ9