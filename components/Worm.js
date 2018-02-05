export default (props) => {
    const {frame, tileSize} = props
    const dir = props.dir || 'down'
    let wormFrame = frame || 1
    const wormImage = `https://s3-us-west-2.amazonaws.com/beakninja/worm/${dir}${wormFrame}.PNG`
    return <img style={{marginLeft: props.x*tileSize+'px', marginTop: props.y*tileSize+'px', width: tileSize+'px', height: tileSize+'px'}} src={wormImage} />
}