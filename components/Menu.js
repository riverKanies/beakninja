import { Component } from 'react'
import Tree from './decor/Tree'
import {levelIndex} from './levels/index'

const space = 200

const stepTime = 30 //milliseconds
const steps = 10

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.state.transitionCount = 0
        this.state.transitionedIn = false
        this.state.progress = 1
    }
    componentDidMount () {
        this.transitionIn()
        this.setState({progress: parseInt(localStorage.getItem('progress')) || 1})
    }
    render () {
        const vb = this.props.vb
        const progress = this.state.progress
        return <g>
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={'black'} opacity={'.2'}/>
            <rect x={vb[2]-50} y={0} width={50} height={50} fill={'gray'} stroke={'black'} />
            <text x={vb[2]-35} y={37} fill={'black'} fontSize={'50px'} onMouseDown={this.startTransitionOut('next')} onTouchStartCapture={this.startTransitionOut('next')}>></text>
            <rect x={vb[0]} y={vb[3]-50} width={50} height={50} fill={'gray'} stroke={'black'} />
            <text x={vb[0]+7} y={vb[3]-12} fill={'black'} fontSize={'50px'} onMouseDown={this.startTransitionOut('prev')} onTouchStartCapture={this.startTransitionOut('prev')}>{'<'}</text>
            <g transform={`translate(${-vb[2] + (vb[2]/steps)*this.state.transitionCount},0)`}>
                {levelIndex.map((i)=>{
                    if (i>9*this.props.page || i<=9*(this.props.page-1)) return ''
                    const div = Math.floor(i/9.000001)
                    const num = i-(9*div)
                    const levelSection = Math.floor((num-1)/3)
                    const x = space/2 - 7 + space*((num-1) % 3) + (levelSection * space/3)
                    const y = 25 + vb[3]/4 + (levelSection * 115)
                    //const indSymbol = progress > i ? '' : ''
                    let startLevel = this.startTransitionOut(i)
                    let indicator = <text x={x} y={y-90} fill={'yellow'} textAnchor={'middle'}>&#x2713;</text>
                    if (progress == i) indicator = <text x={x} y={y-90} fill={'yellow'} textAnchor={'middle'}>&#x2605;</text>
                    if (i > progress ) {
                        indicator = <text x={x} y={y-90} textAnchor={'middle'}>&#128274;</text>
                        startLevel = null
                    }
                    return <g key={i}>
                        <Tree transform={`translate(${x},${y})`} />
                        {indicator}
                        <text key={i}
                            x={x}
                            y={y}
                            fill={'hsl(280,80%,40%)'}
                            stroke={'hsl(280,70%,60%)'}
                            textAnchor={'middle'}
                            fontSize={'100px'}
                            strokeWidth={1.3}
                            onTouchStartCapture={startLevel}
                            onMouseDown={startLevel}
                            >
                            {i}
                        </text>
                    </g>
                })}
            </g>
        </g>
    }
    transitionIn() {
        setTimeout(()=>{
            if (this.state.transitionCount == steps) {
                return this.setState({transitionedIn: true})
            }
            this.setState({transitionCount: this.state.transitionCount+1})
            this.transitionIn()
        }, stepTime)
    }
    startTransitionOut (num) {
        return ()=>{
            this.transitionOut(num)
        }
    }
    transitionOut(num) {
        setTimeout(()=>{
            if (this.state.transitionCount >= 2*steps) {
                if (num == 'next') return this.props.nextPage()
                if (num == 'prev') return this.props.prevPage()
                return this.props.startLevel(num)
            }
            this.setState({transitionCount: this.state.transitionCount+1})
            this.transitionOut(num)
        }, stepTime)
    }
}

export default Menu