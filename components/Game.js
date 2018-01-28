import { Component } from 'react'
import Bird from './Bird'

const tileSize = 30
const gameWidth = 24
const gameHeight = 14
const vb = [0, 0, gameWidth*tileSize, gameHeight*tileSize]

const tiles = []
for (let i=0; i<gameHeight; i++) {
  tiles[i] = []
  for (let j=0; j<gameWidth; j++) {
    tiles[i][j] = {x: j, y: i, img: '/static/tiles/tile1.PNG'}
  }
}
class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.bird = {x:12, y:6, dir: 'up'}
  }
  render () {
    return (<svg viewBox={vb.join(' ')} width='100%'>
      <rect x='0' y='0' width={vb[2]} height={vb[3]} fill='darkgray'/>
      {tiles.map((row, i)=>{
        return row.map((tile, j)=>{
          return <image key={i+'-'+j} href={tile.img} x={tile.x*tileSize} y={tile.y*tileSize} />
        })
      })}
      <Bird bird={this.state.bird} />
    </svg>)
  }
  componentDidMount () {
    this.animate()
  }
  animate () {
    const newDir = this.state.bird.dir == 'down' ? 'up' : 'down'
    this.setState({bird: {...this.state.bird, dir: newDir}})
    window.setTimeout(()=>{this.animate()}, 5000)
  }
}

export default Game