export default (props) => {
    const { tileSize } = props
    const {moving, frame} = props.bird
    let dir = props.bird.dir || 'down'
    let birdFrame = frame || 1
    if (moving) birdFrame = 1
    if (props.finished && !moving) {
        dir = 'finish'
        birdFrame = 1
    }

    const pixelSize = tileSize/30
    let dx = 0
    let dy = 0
    if (dir == 'up') {
        dx=-10 * pixelSize
    } else if (dir == 'down' || dir == 'finish') {
        dx=-10 * pixelSize
        dy=-20 * pixelSize
    } else if (dir == 'left') {
        dy=-10 * pixelSize
        if (!moving) dy=-20 * pixelSize
    } else if (dir == 'right') {
        dy=-10 * pixelSize
        if (!moving) dy=-20 * pixelSize
        dx=-20 * pixelSize
    }
    const birdImage = `/static/bird/${(moving ? 'move-' : '')}${dir}${birdFrame}.PNG`
    return <img style={{marginLeft: props.bird.x*tileSize+dx +'px', marginTop: props.bird.y*tileSize+dy +'px', width: tileSize*5/3+'px', height: tileSize*5/3+'px'}} src={birdImage} />
}