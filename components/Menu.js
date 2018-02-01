const space = 180
const levels = [1, 2, 3]
export default (props) => {
    const vb = props.vb
    return props.open ? (
        <g>
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={'white'} opacity={'.5'}/>
            {levels.map((num)=>{
                return <text key={num}
                    x={(vb[2]/2) - (space*(levels.length-1)/2) + (space*(num-1))}
                    y={vb[3]/2 + 30}
                    fill={'hsl(280,80%,40%)'}
                    stroke={'hsl(280,70%,60%)'}
                    textAnchor={'middle'}
                    fontSize={'150px'}
                    strokeWidth={2}
                    onMouseDown={props.startLevel(num)}>
                        {num}
                </text>
            })}
        </g>
    ) :''
}