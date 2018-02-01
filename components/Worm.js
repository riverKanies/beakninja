const tileSize = 30
export default (props) => {
    const {frame} = props
    const dir = props.dir || 'down'
    let wormFrame = frame || 1
    const wormImage = `/static/worm/${dir}${wormFrame}.PNG`
    return <image x={props.x*tileSize} y={props.y*tileSize} href={wormImage} />
}