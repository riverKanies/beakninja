import React, { Component } from 'react';

const gradientId = "gradient-Tree"
const gradientId2 = "gradient-Tree-2"

const r = 40

export default (props) => (<g transform='translate(0,-45)'>
    <defs>
        <radialGradient id={gradientId} cx={.2} cy={.3} r={1.5} fx={0} fy={.2}>
            <stop offset="0%" stopColor={`hsl(120,50%,50%)`}/>
            <stop offset="100%" stopColor={`hsl(120,50%,33%)`}/>
        </radialGradient>
    </defs>
    <linearGradient id={gradientId2} cx={.8} cy={.3} >
        <stop offset="0%" stopColor={`hsl(15,50%,32%)`}/>
        <stop offset="80%" stopColor={`hsl(15,50%,25%)`}/>
        <stop offset="100%" stopColor={`hsl(15,50%,20%)`}/>
    </linearGradient>
    
    
    <g transform={props.transform}>
        <rect x={-r/2} y={0} width={r} height={10*r} fill={`url(#${gradientId2})`} />
        <circle cx={-r} cy={r} r={r} fill={`url(#${gradientId})`} />  
        <circle cx={r} cy={r} r={r} fill={`url(#${gradientId})`} />
        <circle cx={-r} cy={0} r={r} fill={`url(#${gradientId})`} />
        <circle cx={0} cy={-r} r={r} fill={`url(#${gradientId})`} />
        <circle cx={r} cy={0} r={r} fill={`url(#${gradientId})`} />
        <circle cx={0} cy={r*1.5} r={r} fill={`url(#${gradientId})`} />
        <circle cx={0} cy={r/3} r={r*1.1} fill={`url(#${gradientId})`} />
    </g>
</g>)