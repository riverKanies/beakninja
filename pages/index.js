import Link from 'next/link'
import Header from '../components/Header'
import Game from '../components/Game'

const Index = () => (
    <div>
        <Game />
        <style jsx global>{`
          body {
              image-rendering: -moz-crisp-edges;
              image-rendering: -webkit-crisp-edges;
              image-rendering: pixelated;
              image-rendering: crisp-edges;
          
              background: darkgray;
              margin: 0 5%;
          }
      `}</style>
    </div>
)

export default Index