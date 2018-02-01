import { Component } from 'react'
import Bird from './Bird'
import Worm from './Worm'
import BackGround from './decor/BackGround'
import Menu from './Menu'
import level1, {pos1} from './levels/1'
import level2,  {pos2} from './levels/2'
import level3, {pos3} from './levels/3'

const levels = [
  null,
  level1,
  level2,
  level3
]
const positions = [
  null,
  pos1,
  pos2,
  pos3
]

const tileSize = 30
const gameWidth = 24
const gameHeight = 14
const vb = [0, 0, gameWidth*tileSize, gameHeight*tileSize]

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.bird = {x:0, y:0, dir: 'down', frame: 1, moving: false}
    this.state.audio = {}
    this.state.level = levels[0]
    this.state.wormFrame = 1
    this.state.menuOpen = true

    this.startLevel = this.startLevel.bind(this)
  }
  componentDidMount () {
    this.state.audio.BaaThing = document.createElement('audio')
    this.state.audio.BaaThing.src = '/static/audio/BaaThing.m4a'
    this.state.audio.BaThiiing = document.createElement('audio')
    this.state.audio.BaThiiing.src = '/static/audio/BaThiiing.m4a'
    this.state.audio.EatWorm = document.createElement('audio')
    this.state.audio.EatWorm.src = '/static/audio/EatWorm.m4a'

    document.body.addEventListener('keydown', ((e) => {
      if (this.state.menuOpen) return
      //e.preventDefault()
      if (this.state.bird.moving) return
      const keyconverter = {38: 'up', 37: 'left', 40: 'down', 39: 'right'}
      const dir = keyconverter[e.keyCode]
      this.move(dir)
      if (dir) {
        const sound = Math.random() < .5 ? 'BaaThing' : 'BaThiiing'
        const noise = Math.random() < .7 ? this.state.audio[sound] : null
        if (noise) noise.play()
      }
      }).bind(this))
    this.animate()
    //this.move()
  }
  render () {
    return (<svg id='game' viewBox={vb.join(' ')} width='100%'>
      <BackGround vb={vb} />
      {this.renderLevel()}
      <Menu vb={vb} open={this.state.menuOpen} startLevel={this.startLevel} />
    </svg>)
  }
  renderLevel() {
    if (!this.state.level) return ''
    return <g>
      {this.state.level.map((row, i)=>{
        return row.map((tile, j)=>{
          if (!tile) return ''
          const x = j
          const y = i
          const key = i+'-'+j
          if (!tile.img) return <Worm key={key} {...{...tile, x, y, frame: this.state.wormFrame}} />
          return <image key={key} href={tile.img} x={x*tileSize} y={y*tileSize} />
        })
      })}
      <Bird bird={this.state.bird} />
    </g>
  }
  move (dir) {
    if (!this.state.level) return
    if (!dir) dir = this.state.bird.dir
    let dx = 0
    let dy = 0
    if (dir == 'up') dy = -1
    if (dir == 'down') dy = 1
    if (dir == 'left') dx = -1
    if (dir == 'right') dx = 1
    if (dx == 0 && dy == 0) return
    const {x,y} = this.state.bird
    const tile = this.state.level[y+dy][x+dx]
    const blocked = tile && tile.img
    let moving = false
    if (blocked) {
      dx = 0
      dy = 0
    } else {
      this.eatWorm(x+dx, y+dy)
      setTimeout(this.move.bind(this), 50)
      moving = true
    }
    this.setState({bird: {...this.state.bird, x: x+dx, y: y+dy, dir, moving} })
  }
  animate () {
    const {frame} = this.state.bird
    let newFrame = frame
    if (Math.random() > .7) newFrame = frame < 2 ? frame + 1 : 1
    const wormFrame = this.state.wormFrame < 2 ? this.state.wormFrame + 1 : 1
    this.setState({wormFrame, bird: {...this.state.bird, frame: newFrame}})
    window.setTimeout(()=>{this.animate()}, 500)
  }
  eatWorm(x,y) {
    const tile = this.state.level[y][x]
    if (tile && !tile.img) {
      this.state.level[y][x] = '' //setState
      this.state.audio.EatWorm.play()
    }
  }
  startLevel(num) {
    return () => {
      const {x, y} = positions[num]
      this.setState({
        level: levels[num],
        menuOpen: !this.state.menuOpen,
        bird: {...this.state.bird, x, y}
      })
    }
  }
}

export default Game