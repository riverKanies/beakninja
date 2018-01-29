import { Component } from 'react'
import Bird from './Bird'
import BackGround from './decor/BackGround'

const tileSize = 30
const gameWidth = 24
const gameHeight = 14
const vb = [0, 0, gameWidth*tileSize, gameHeight*tileSize]

const tiles = []
for (let i=0; i<gameHeight; i++) {
  tiles[i] = []
  for (let j=0; j<gameWidth; j++) {
    if (i<2 || i>11) tiles[i][j] = {x: j, y: i, img: '/static/tiles/tile1.PNG'}
    if (j<4 || j>19) tiles[i][j] = {x: j, y: i, img: '/static/tiles/tile1.PNG'}
  }
}
class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.bird = {x:12, y:6, dir: 'left', frame: 1}
  }
  componentDidMount () {
    document.body.addEventListener('keydown', ((e) => {
      //e.preventDefault()
      if (this.state.bird.moving) return
      const keyconverter = {38: 'up', 37: 'left', 40: 'down', 39: 'right'}
      const dir = keyconverter[e.keyCode]
      this.move(dir)
      }).bind(this))
    this.animate()
  }
  render () {
    return (<svg id='game' viewBox={vb.join(' ')} width='100%'>
      <BackGround vb={vb} />
      {tiles.map((row, i)=>{
        return row.map((tile, j)=>{
          return <image key={i+'-'+j} href={tile.img} x={tile.x*tileSize} y={tile.y*tileSize} />
        })
      })}
      <Bird bird={this.state.bird} />
    </svg>)
  }
  move (dir) {
    if (!dir) dir = this.state.bird.dir
    let dx = 0
    let dy = 0
    if (dir == 'up') dy = -1
    if (dir == 'down') dy = 1
    if (dir == 'left') dx = -1
    if (dir == 'right') dx = 1
    if (dx == 0 && dy == 0) return
    const {x,y} = this.state.bird
    const blocked = tiles[y+dy][x+dx]
    let moving = false
    if (blocked) {
      dx = 0
      dy = 0
    } else {
      setTimeout(this.move.bind(this), 50)
      moving = true
    }
    this.setState({bird: {...this.state.bird, x: x+dx, y: y+dy, dir, moving} })
  }
  animate () {
    const {frame} = this.state.bird
    const newFrame = frame < 2 ? frame + 1 : 1
    this.setState({bird: {...this.state.bird, frame: newFrame}})
    window.setTimeout(()=>{this.animate()}, 2000)
  }
}

export default Game