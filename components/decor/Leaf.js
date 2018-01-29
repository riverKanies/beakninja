import React, { Component } from 'react';

const gradientId = "gradient-Leaf"

export default class Leaf extends Component {
    render() {
        return (<g>
            <defs>
                <radialGradient id={gradientId} cx={.8} cy={.3} r={1.3} fx={0} fy={.8}>
                    <stop offset="0%" stopColor={`hsl(120,50%,50%)`}/>
                    <stop offset="100%" stopColor={`hsl(120,50%,20%)`}/>
                </radialGradient>
            </defs>
             
            <path d={[
                    'M 0 0',
                    'C 0 -5 2 -6 7 -7',
                    'C 6 -2 5 0 0 0',
                    'z'
                ].join(' ')}
                fill={`url(#${gradientId})`}
                transform={this.props.transform}
            />
        </g>);
    }
}