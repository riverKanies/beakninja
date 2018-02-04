import { Component } from 'react'

const space = 180
const levels = [1, 2, 3]

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
            <rect x={vb[0]} y={vb[1]} width={vb[2]} height={vb[3]} fill={'white'} opacity={'.5'}/>
            <g transform={`translate(${-vb[2] + (vb[2]/steps)*this.state.transitionCount},0)`}>
                {levels.map((num)=>{
                    return <text key={num}
                        x={(vb[2]/2) - (space*(levels.length-1)/2) + (space*(num-1))}
                        y={vb[3]/2 + 30}
                        fill={'hsl(280,80%,40%)'}
                        stroke={'hsl(280,70%,60%)'}
                        textAnchor={'middle'}
                        fontSize={'150px'}
                        strokeWidth={2}
                        onTouchStartCapture={this.startTransitionOut(num)}
                        onMouseDown={this.startTransitionOut(num)}
                    >
                        {num}
                    </text>
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