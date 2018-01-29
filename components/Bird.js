const tileSize = 30
export default (props) => {
    const dir = props.bird.dir || 'down'
    let x = 0
    let y = 0
    if (dir == 'up') {
        x=-10
    } else if (dir == 'down') {
        x=-10
        y=-20
    } else if (dir == 'left') {
        y=-20
    } else if (dir == 'right') {
        y=-20
        x=-20
    }
    const transform = `translate(${x},${y})`
    let birdFrame = props.bird.frame || 1
    if (props.bird.moving) birdFrame = 1
    const birdImage = `/static/bird/${(props.bird.moving ? 'move-' : '')}${dir}${birdFrame}.PNG`
    return <image x={props.bird.x*tileSize} y={props.bird.y*tileSize} href={birdImage} transform={transform}/>
}