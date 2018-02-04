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
          
              background: black;
              margin: 0;
          }
          img {
              position: absolute;
          }
      `}</style>
    </div>
)

export default Index