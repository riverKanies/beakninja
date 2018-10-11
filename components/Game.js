import { Component } from 'react'
import Bird from './Bird'
import Worm from './Worm'
import BackGround from './decor/BackGround'
import Menu from './Menu'
import levels from './levels/index'

const getLevel = (num)=>{
  return levels[num-1]
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
  menuOpen: true,
  finished: false
}

class Game extends Component {
  constructor (props) {
    super(props)

    this.state = {...initialState}
    this.state.audio = {}
    this.state.wormFrame = 1
    this.state.offset = {x: 0, y: 0, tileSize: 30}
    this.state.lastSound = Date.now()
    this.state.page = 1
    this.state.levelNum = 1

    this.startLevel = this.startLevel.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }
  componentDidMount () {
    // audio
    this.state.audio.BaaThing = document.createElement('audio')
    this.state.audio.BaaThing.src = '/static/audio/BaaThing.m4a'
    this.state.audio.BaThiiing = document.createElement('audio')
    this.state.audio.BaThiiing.src = '/static/audio/BaThiiing.m4a'
    this.state.audio.EatWorm = document.createElement('audio')
    this.state.audio.EatWorm.src = '/static/audio/EatWorm.m4a'
    this.state.audio.GuThing = document.createElement('audio')
    this.state.audio.GuThing.src = '/static/audio/GuThing.m4a'
    
    // resize
    this.resize()
    window.addEventListener('resize', ()=>{
        this.resize()
    }, false)

    // load hammer and set swipe listeners
    const script = document.createElement('script');
    script.onload = ()=>{
      const hammertime = new Hammer(document.body);
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      hammertime.on('swipe', (ev)=>{
        this.resize()
        const keyconverter = {2: 'left', 4: 'right', 8: 'up', 16: 'down'}
        const dir = keyconverter[ev.offsetDirection]
        this.input(dir)
      });
    };
    script.src = '/static/src/hammer.js';
    document.head.appendChild(script);

    // let arrow key listeners
    document.body.addEventListener('keydown', ((e) => {
      const keyconverter = {38: 'up', 37: 'left', 40: 'down', 39: 'right'}
      const dir = keyconverter[e.keyCode]
      this.input(dir)
    }).bind(this))
    document.body.addEventListener('touchstart', (()=>{
      console.log('touch')
      if (!this.state.tiles) return
      this.badThingSound()
    }).bind(this))

    //
    window.addToHomescreen.removeSession()
    window.addToHomescreen({modal: true})

    // start animations
    this.animate()
  }
  resize() {
    const aspectRatio = 12/7 // width/height
    const width = window.innerWidth
    const height = window.innerHeight
    if (width/height > aspectRatio) {
      // height 100%
      const canvasWidth = height * aspectRatio
      this.setState({offset: {x: ( width - canvasWidth ) / 2, y: 0, tileSize: height/14} })
    } else {
      const canvasHeight = width / aspectRatio
      this.setState({offset: {x: 0, y: (height - canvasHeight)/2, tileSize: width/24} })
    }
  }
  input (dir) {
    if (this.state.menuOpen) return
    if (this.state.bird.moving) return
    this.move(dir)
    if (dir) {
      this.badThingSound()
    }
  }
  badThingSound() {
    const now = Date.now()
    if ( (now-this.state.lastSound) < 1000) return
    const sound = Math.random() < .5 ? 'BaaThing' : 'BaThiiing'
    const noise = Math.random() < .8 ? this.state.audio[sound] : null
    if (noise) noise.play()
    this.setState({lastSound: now})
  }
  nextPage() {
    this.setState({page: this.state.page+1})
  }
  prevPage() {
    this.setState({page: this.state.page-1})
  }
  render () {
    const { x, y, tileSize } = this.state.offset
    const {page} = this.state
    return (<div style={{marginLeft: `${x}px`, marginTop: `${y}px`, width: `${tileSize*24}px`, height: `${tileSize*14}px`}}>
      {this.renderLevel()}
      <svg viewBox={vb.join(' ')} width='100%'>
        <BackGround vb={vb} />
        {this.state.menuOpen ? <Menu key={page} vb={vb} startLevel={this.startLevel} page={page} nextPage={this.nextPage} prevPage={this.prevPage}/> : ''}
      </svg>
    </div>)
  }
  renderLevel() {
    const tileSize = this.state.offset.tileSize
    const tiles = this.state.tiles
    if (!tiles) return '' // || !tiles[0] || !tiles[0][0]
    let level = (
      this.state.tiles.map((row, i)=>{
        return row.map((tile, j)=>{
          if (!tile) return ''
          const x = j
          const y = i
          const key = i+'-'+j
          if (!tile.img) return <Worm key={key} {...{...tile, x, y, frame: this.state.wormFrame, tileSize}} />
          return <img key={key} src={tile.img} style={{marginLeft: x*tileSize+'px', marginTop: y*tileSize+'px', width: tileSize+'px', height: tileSize+'px'}} />
        })
      })
    )
    level.push(<Bird key={-1} bird={this.state.bird} finished={this.state.finished} tileSize={this.state.offset.tileSize} />)
    return level
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
      if (this.state.finished) {
        setTimeout(()=>{
          //save progress
          localStorage.setItem('progress', this.state.levelNum+1)
          this.setState(initialState)
          this.resize()
        }, 2300)
        this.state.audio.GuThing.play()
      }
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
      if (this.state.wormCount == 1) this.setState({finished: true})
      this.state.wormCount -= 1
      this.state.tiles[y][x] = null //setState
      this.state.audio.EatWorm.play()
    }
  }
  startLevel(num) {
    const tiles = getTiles(num)
    const level = getLevel(num)

    const {x, y} = level.pos
    const newState = {
      ...this.state,
      ...initialState,
      levelNum: num,
      tiles,
      menuOpen: !this.state.menuOpen,
      bird: {...initialState.bird, x, y},
      wormCount: level.wormCount
    }
    this.setState(newState)
    this.resize()
  }
}

export default Game