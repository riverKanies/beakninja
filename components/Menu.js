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
    }
    componentDidMount () {
        this.transitionIn()
    }
    render () {
        const vb = this.props.vb
        return <g>
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={'black'} opacity={'.2'}/>
            <rect x={vb[2]-50} y={0} width={50} height={50} fill={'white'} onMouseDown={this.startTransitionOut('next')}/>
            <rect x={vb[0]} y={vb[3]-50} width={50} height={50} fill={'white'} onMouseDown={this.startTransitionOut('prev')}/>
            <g transform={`translate(${-vb[2] + (vb[2]/steps)*this.state.transitionCount},0)`}>
                {levelIndex.map((i)=>{
                    if (i>9*this.props.page || i<=9*(this.props.page-1)) return ''
                    const div = Math.floor(i/9.000001)
                    const num = i-(9*div)
                    const levelSection = Math.floor((num-1)/3)
                    const x = space/2 - 7 + space*((num-1) % 3) + (levelSection * space/3)
                    const y = 25 + vb[3]/4 + (levelSection * 115)
                    return <g key={i}>
                        <Tree transform={`translate(${x},${y})`} />
                        <text key={i}
                            x={x}
                            y={y}
                            fill={'hsl(280,80%,40%)'}
                            stroke={'hsl(280,70%,60%)'}
                            textAnchor={'middle'}
                            fontSize={'100px'}
                            strokeWidth={1.3}
                            onTouchStartCapture={this.startTransitionOut(i)}
                            onMouseDown={this.startTransitionOut(i)}
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