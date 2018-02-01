const ee = null
const t1 = {img: '/static/tiles/tree1.PNG'}
const t2 = {img: '/static/tiles/tree2.PNG'}
const d1 = {img: '/static/tiles/dirt1.PNG'}
const d2 = {img: '/static/tiles/dirt2.PNG'}
const b1 = {img: '/static/tiles/branch1.PNG'}
const b2 = {img: '/static/tiles/branch2.PNG'}
const bR = {img: '/static/tiles/branchR.PNG'}
const bL = {img: '/static/tiles/branchL.PNG'}

const w1 = {dir: 'down'}
const w2 = {dir: 'up'}
const w3 = {dir: 'left'}
const w4 = {dir: 'right'}

export default ({
    level: [
        [t1, bL, t1, ee, t2, ee, ee, ee, ee, ee, bR, b2, b2, b2, b2, b2, b2, b2, b1, t1, ee, t1, ee, t1],
        [t1, ee, t2, ee, t1, bR, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b2, b1, t1, bL, t1, ee, t2],
        [t1, ee, t1, bR, t1, bL, ee, ee, ee, bR, bL, ee, ee, bR, bL, ee, ee, ee, bR, t1, ee, t1, bL, t1],
        [t2, ee, t1, ee, t2, ee, ee, ee, ee, ee, ee, ee, ee, w2, ee, ee, ee, ee, ee, t2, ee, t1, bR, t1],
        [t1, bR, t1, ee, t1, ee, ee, ee, w1, ee, ee, ee, ee, ee, ee, ee, w4, t2, ee, t1, ee, t2, ee, t2],
        [t1, ee, t1, ee, t1, ee, ee, ee, t2, ee, ee, ee, ee, ee, t2, ee, ee, ee, ee, t1, bR, t1, ee, t1],
        [t1, ee, t2, bL, t1, ee, ee, ee, ee, ee, w1, ee, ee, ee, ee, ee, ee, ee, ee, t1, ee, t1, bL, t1],
        [t1, bL, t1, ee, t2, ee, ee, ee, ee, ee, t2, ee, ee, ee, ee, ee, ee, ee, ee, t2, ee, t1, ee, t1],
        [t2, ee, t1, ee, t1, ee, t2, w3, ee, ee, w2, ee, ee, ee, w4, t2, ee, ee, ee, t1, bL, t1, bR, t1],
        [t1, bR, t1, ee, t1, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, t1, ee, t1, ee, t2],
        [t1, ee, t1, ee, t1, ee, ee, ee, ee, ee, ee, d1, d2, w1, ee, ee, ee, ee, ee, t1, ee, t1, ee, t1],
        [t1, d1, d1, d2, t1, d1, d1, d1, d2, d2, d1, d1, d1, d1, d2, d1, d1, d1, d2, t2, d2, d2, d1, t1],
        [d1, d2, d1, d1, d1, d2, d1, d1, d2, d1, d1, d1, d1, d1, d1, d1, d2, d2, d2, d1, d1, d1, d1, d1],
        [d1, d2, d1, d1, d1, d2, d1, d1, d2, d1, d1, d1, d1, d1, d1, d1, d2, d2, d2, d1, d1, d1, d1, d1],
    ],
    pos: {x: 10, y: 10},
    wormCount: 8,
})
