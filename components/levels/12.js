const tileKey = {
    ee:null,
    t1: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/tree1.PNG'},
    t2: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/tree2.PNG'},
    d1: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/dirt1.PNG'},
    d2: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/dirt2.PNG'},
    b1: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/branch1.PNG'},
    b2: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/branch2.PNG'},
    bR: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/branchR.PNG'},
    bL: {img: 'https://s3-us-west-2.amazonaws.com/beakninja/tiles/branchL.PNG'},
    wd: {dir: 'down'},
    wu: {dir: 'up'},
    wl: {dir: 'left'},
    wr: {dir: 'right'},
}

const levelString = [["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","b1","wl","ee","ee","ee","ee","ee","ee","ee","ee","wd","b1","b1","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","wl","ee","ee","ee","ee","ee","wu","ee","ee","ee","ee","wd","b1","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","wl","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wd","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","wl","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","wu","ee","ee","wd","b1","b1","b1","b1"],["b1","b1","b1","wl","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wd","b1","b1","b1"],["b1","wr","wl","ee","ee","ee","ee","ee","ee","ee","ee","ee","bird","ee","ee","ee","ee","ee","ee","ee","ee","wd","b1","b1"],["b1","wl","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1"],["b1","b1","b1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1","b1"],["b1","b1","b1","b1","wr","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1","b1","b1"],["b1","b1","b1","b1","b1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","wr","ee","ee","ee","ee","ee","ee","ee","ee","wu","ee","ee","wu","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","b1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 12, y: 6},
    wormCount: 32,
})