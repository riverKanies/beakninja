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

const levelString = [["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"],["b1","b1","b1","b1","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1","b1","b1"],["b1","b1","b1","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","ee","ee","ee","ee","wu","b1","b1"],["b1","b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","wd","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","ee","wu","b1"],["b1","ee","ee","ee","ee","ee","ee","ee","b1","b1","b1","bird","b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","ee","ee","wu","ee","ee","b1","ee","wu","ee","ee","wu","ee","ee","ee","ee","ee","b1","ee","ee","ee","ee","ee","b1"],["b1","ee","ee","ee","ee","ee","b1","ee","ee","b1","b1","b1","b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","ee","ee","ee","ee","ee","ee","b1","wu","ee","ee","b1","ee","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","b1"],["b1","wu","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","wu","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","b1","b1"],["b1","b1","ee","ee","ee","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1","b1","b1"],["b1","b1","b1","wu","ee","ee","ee","ee","wu","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1","b1","b1","b1"],["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 11, y: 5},
    wormCount: 21,
})