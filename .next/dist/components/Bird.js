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
    }
    var transform = 'translate(' + x + ',' + y + ')';
    return _react2.default.createElement('image', { x: props.bird.x * tileSize, y: props.bird.y * tileSize, href: '/static/bird/' + dir + '1.PNG', transform: transform, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmlyZC5qcyJdLCJuYW1lcyI6WyJ0aWxlU2l6ZSIsInByb3BzIiwiZGlyIiwiYmlyZCIsIngiLCJ5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sV0FBTixBQUFpQixBQUNqQjs7a0JBQWUsVUFBQSxBQUFDLE9BQVUsQUFDdEI7UUFBTSxNQUFNLE1BQUEsQUFBTSxLQUFOLEFBQVcsT0FBdkIsQUFBOEIsQUFDOUI7UUFBSSxJQUFKLEFBQVEsQUFDUjtRQUFJLElBQUosQUFBUSxBQUNSO1FBQUksT0FBSixBQUFXLE1BQU0sQUFDYjtZQUFFLENBQUYsQUFBRyxBQUNOO0FBRkQsV0FFTyxJQUFJLE9BQUosQUFBVyxRQUFRLEFBQ3RCO1lBQUUsQ0FBRixBQUFHLEFBQ0g7WUFBRSxDQUFGLEFBQUcsQUFDTjtBQUNEO1FBQU0sMkJBQUEsQUFBeUIsVUFBekIsQUFBOEIsSUFBcEMsQUFDQTtvREFBYyxHQUFHLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFBckIsQUFBdUIsVUFBVSxHQUFHLE1BQUEsQUFBTSxLQUFOLEFBQVcsSUFBL0MsQUFBaUQsVUFBVSx3QkFBQSxBQUFzQixNQUFqRixTQUE2RixXQUE3RixBQUF3RztzQkFBeEc7d0JBQVAsQUFBTyxBQUNWO0FBRFU7S0FBQTtBQVhYIiwiZmlsZSI6IkJpcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1JpdmVyX0hvbWUvRG9jdW1lbnRzL3N0YXJ0dXAvYmVha25pbmphIn0=