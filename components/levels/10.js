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

const levelString = [["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"],["b1","wr","t1","t1","t1","t1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","t1","t1","t1","t1","b1"],["b1","ee","t1","t1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t1","b1"],["b1","ee","t1","t1","ee","ee","t1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","ee","t1","wr","ee","ee","bird","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","ee","t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t2","b1"],["b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","t1","t1","ee","ee","ee","t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1"],["b1","wr","ee","ee","ee","ee","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","b1"],["b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t2","b1"],["b1","t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t1","t1","b1"],["b1","t1","t1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","t1","t1","t1","t1","b1"],["b1","t1","t1","t1","wr","t1","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t1","t1","t1","t1","t1","b1"],["b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1","b1"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 6, y: 4},
    wormCount: 13,
})