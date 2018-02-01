import React, { Component } from 'react';
import Leaf from './Leaf'
import leaves from './leaves'

const gradientId = 'gradient-BackGround'

export default class BackGround extends Component {
    constructor(props) {
        super(props)
        const vb = this.props.vb

        this.state={}
        this.state.leaves = leaves
    }
    render() {
        const vb = this.props.vb
        return (<g>
            <defs>
                <linearGradient id={gradientId} cx={.8} cy={.3} x1="0" x2=".3" y1="0" y2="1">
                    <stop offset="0%" stopColor={`hsl(60,80%,50%)`}/>
                    <stop offset="300%" stopColor={`hsl(120,60%,20%)`}/>
                </linearGradient>
            </defs>
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={`url(#${gradientId})`} />
            {this.state.leaves.map((leaf, i)=>{
                const {x,y,a} = leaf
                return <Leaf key={i} transform={`translate(${x},${y}),rotate(${a}),scale(3)`}/>
            })}
        </g>);
    }
}