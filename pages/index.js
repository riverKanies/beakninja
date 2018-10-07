import Link from 'next/link'
import Head from 'next/head'
import Game from '../components/Game'

const Index = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
            
            <meta name='apple-mobile-web-app-title' content='BeakNinja' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <link rel='apple-touch-icon' href='/static/appIcon.PNG' />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="mobile-web-app-capable" content="yes" />

            <link rel='stylesheet' href='/static/src/addtohome.css' type="text/css" />
            <script src='/static/src/addtohome.js' />

        </Head>

        <Game />

        <style jsx global>{`
            html {
                position: fixed;
            }
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