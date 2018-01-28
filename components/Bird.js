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
    }
    const transform = `translate(${x},${y})`
    return <image x={props.bird.x*tileSize} y={props.bird.y*tileSize} href={`/static/bird/${dir}1.PNG`} transform={transform}/>
}