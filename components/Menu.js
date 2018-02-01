export default (props) => {
    const vb = props.vb
    return props.open ? (
        <g>
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={'white'} opacity={'.5'}/>
            <text x={vb[2]/2} y={vb[3]/2} fill={'black'} textAnchor={'middle'} fontSize={'50px'} onMouseDown={props.startLevel(1)}>Level 1</text>
        </g>
    ) :''
}