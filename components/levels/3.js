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

export default (
    [
        [t1, bL, ee, bR, t2, bL, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, bR, t1, ee, ee, bR, t1],
        [t1, ee, ee, ee, t1, bL, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, bR, t2, bL, ee, ee, t1],
        [t1, b2, b2, b2, b2, bL, ee, ee, ee, ee, t1, t1, t2, t2, ee, ee, ee, ee, bR, b2, b2, b2, b1, t1],
        [t1, ee, ee, t1, ee, ee, ee, ee, w1, ee, ee, ee, ee, ee, ee, w1, ee, ee, ee, w2, t2, ee, ee, t1],
        [t1, ee, ee, ee, ee, ee, ee, ee, t1, t2, ee, ee, ee, ee, t1, t2, ee, ee, ee, ee, ee, ee, ee, t1],
        [t1, ee, ee, t1, w1, ee, ee, w1, ee, t1, ee, ee, ee, w4, t1, ee, w1, ee, ee, ee, t2, ee, ee, t1],
        [t1, ee, ee, t2, t1, ee, ee, t1, ee, ee, ee, ee, t1, ee, w1, ee, t1, ee, ee, t2, t1, ee, ee, t1],
        [t1, ee, ee, ee, ee, ee, ee, t1, t2, t2, w3, t2, t1, ee, t1, t2, t2, ee, ee, ee, ee, ee, ee, t1],
        [t1, ee, ee, t2, t2, ee, ee, t2, ee, w1, ee, t1, ee, ee, ee, ee, t1, ee, ee, t2, t1, ee, ee, t1],
        [t1, ee, ee, t1, ee, ee, ee, ee, ee, t1, ee, ee, ee, w4, t1, ee, w2, ee, ee, w4, t1, ee, ee, t1],
        [t1, ee, ee, ee, ee, ee, ee, ee, t2, t2, ee, ee, ee, ee, t2, t1, ee, ee, ee, ee, ee, ee, ee, t1],
        [t1, ee, ee, t2, ee, ee, ee, w1, ee, ee, ee, d2, d1, ee, ee, ee, ee, w1, ee, ee, d1, ee, ee, t1],
        [d1, d2, d1, d1, d1, d2, d1, d1, d2, d1, d1, d1, d1, d1, d1, d1, d2, d2, d2, d1, d1, d1, d1, d1],
        [d1, d2, d1, d1, d1, d2, d1, d1, d2, d1, d1, d1, d1, d1, d1, d1, d2, d2, d2, d1, d1, d1, d1, d1],
    ]
)
export const pos3 = {x: 5, y: 11}