export default (props) => {
    const {frame, tileSize} = props
    const dir = props.dir || 'down'
    let wormFrame = frame || 1
    const wormImage = `/static/worm/${dir}${wormFrame}.PNG`
    return <img style={{marginLeft: props.x*tileSize+'px', marginTop: props.y*tileSize+'px', width: tileSize+'px', height: tileSize+'px'}} src={wormImage} />
}