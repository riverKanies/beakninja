import { Component } from 'react'
import Bird from './Bird'
import BackGround from './decor/BackGround'
import tiles from './levels/1'

const tileSize = 30
const gameWidth = 24
const gameHeight = 14
const vb = [0, 0, gameWidth*tileSize, gameHeight*tileSize]

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.bird = {x:12, y:6, dir: 'down', frame: 1, moving: false}
    this.state.audio = {}
  }
  componentDidMount () {
    this.state.audio.BaaThing = document.createElement('audio')
    this.state.audio.BaaThing.src = '/static/audio/BaaThing.m4a'
    this.state.audio.BaThiiing = document.createElement('audio')
    this.state.audio.BaThiiing.src = '/static/audio/BaThiiing.m4a'
    document.body.addEventListener('keydown', ((e) => {
      //e.preventDefault()
      if (this.state.bird.moving) return
      const keyconverter = {38: 'up', 37: 'left', 40: 'down', 39: 'right'}
      const dir = keyconverter[e.keyCode]
      this.move(dir)
      const sound = Math.random() < .5 ? 'BaaThing' : 'BaThiiing'
      const noise = this.state.audio[sound]
      noise.play()  
      }).bind(this))
    this.animate()
    this.move()
  }
  render () {
    return (<svg id='game' viewBox={vb.join(' ')} width='100%'>
      <BackGround vb={vb} />
      {tiles.map((row, i)=>{
        return row.map((tile, j)=>{
          if (!tile) return ''
          return <image key={i+'-'+j} href={tile.img} x={j*tileSize} y={i*tileSize} />
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