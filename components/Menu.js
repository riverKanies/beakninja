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
            <g transform={`translate(${-vb[2] + (vb[2]/steps)*this.state.transitionCount},0)`}>
                {levelIndex.map((num)=>{
                    const levelSection = Math.floor((num-1)/3)
                    const x = space/2 - 7 + space*((num-1) % 3) + (levelSection * space/3)
                    const y = 25 + vb[3]/4 + (levelSection * 115)
                    return <g key={num}>
                        <Tree transform={`translate(${x},${y})`} />
                        <text key={num}
                            x={x}
                            y={y}
                            fill={'hsl(280,80%,40%)'}
                            stroke={'hsl(280,70%,60%)'}
                            textAnchor={'middle'}
                            fontSize={'100px'}
                            strokeWidth={1.3}
                            onTouchStartCapture={this.startTransitionOut(num)}
                            onMouseDown={this.startTransitionOut(num)}
                            >
                            {num}
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
                return this.props.startLevel(num)
            }
            this.setState({transitionCount: this.state.transitionCount+1})
            this.transitionOut(num)
        }, stepTime)
    }
}

export default Menu