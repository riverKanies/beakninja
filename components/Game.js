import { Component } from 'react'
import Bird from './Bird'
import Worm from './Worm'
import BackGround from './decor/BackGround'
import Menu from './Menu'
import level1 from './levels/1'
import level2 from './levels/2'
import level3 from './levels/3'

const getLevel = (num)=>{
  const levels = [
    null,
    level1,
    level2,
    level3
  ]
  return levels[num]
}
const getTiles = (num)=>{
  const tiles = getLevel(num).level.map( (r,j)=>{
    return r.map( (c,i)=>{
      return c
    } )
  } )
  return tiles
}

const tileSize = 30
const gameWidth = 24
const gameHeight = 14
const vb = [0, 0, gameWidth*tileSize, gameHeight*tileSize]

const initialState = {
  bird: {x:0, y:0, dir: 'down', frame: 1, moving: false},
  tiles: null,
  wormCount: -1,
  menuOpen: true
}

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = initialState
    this.state.audio = {}
    this.state.wormFrame = 1

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
  }
  render () {
    return (<svg id='game' viewBox={vb.join(' ')} width='100%'>
      <BackGround vb={vb} />
      {this.renderLevel()}
      <Menu vb={vb} open={this.state.menuOpen} startLevel={this.startLevel} />
    </svg>)
  }
  renderLevel() {
    const tiles = this.state.tiles
    if (!tiles) return '' // || !tiles[0] || !tiles[0][0]
    return <g>
      {this.state.tiles.map((row, i)=>{
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
    if (!this.state.tiles) return
    if (!dir) dir = this.state.bird.dir
    let dx = 0
    let dy = 0
    if (dir == 'up') dy = -1
    if (dir == 'down') dy = 1
    if (dir == 'left') dx = -1
    if (dir == 'right') dx = 1
    if (dx == 0 && dy == 0) return
    const {x,y} = this.state.bird
    const tile = this.state.tiles[y+dy][x+dx]
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
    const tile = this.state.tiles[y][x]
    if (tile && !tile.img) {
      if (this.state.wormCount == 1) return this.finishLevel()
      this.state.wormCount -= 1
      this.state.tiles[y][x] = null //setState
      this.state.audio.EatWorm.play()
    }
  }
  startLevel(num) {
    return () => {
      const tiles = getTiles(num)
      const level = getLevel(num)

      const {x, y} = level.pos
      const newState = {
        ...initialState,
        tiles,
        menuOpen: !this.state.menuOpen,
        bird: {...initialState.bird, x, y},
        wormCount: level.wormCount
      }
      this.setState(newState)
    }
  }
  finishLevel(){
    this.setState(initialState)
  }
}

export default Game