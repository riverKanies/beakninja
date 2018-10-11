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

const levelString = [["t1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","b2","b1","bL"],["t1","wl","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d1","ee","ee","ee","wu","bR","t2"],["t2","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","d1","ee","ee","bR","b2","b2","t1"],["t1","b1","b2","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t1"],["t1","b1","bL","b1","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","bR","b2","t1"],["t1","wl","ee","d1","ee","ee","ee","ee","ee","ee","ee","bird","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","t1"],["t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d1","ee","t1","ee","ee","ee","ee","ee","bR","b2","b2","b2","t2"],["t2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","t1","ee","ee","d1","d1","ee","ee","ee","ee","ee","t1"],["t1","d1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t2","bL","ee","ee","wu","ee","ee","ee","ee","ee","t1"],["t1","ee","ee","wd","d1","ee","ee","ee","ee","ee","ee","ee","bR","t1","ee","ee","ee","ee","ee","ee","ee","ee","bR","t1"],["t1","ee","wd","d1","d1","ee","ee","ee","ee","ee","ee","ee","ee","t1","bL","ee","ee","ee","ee","ee","ee","ee","wr","t1"],["t1","wd","d1","d1","d1","ee","ee","ee","ee","ee","ee","ee","ee","t1","wd","ee","ee","ee","d1","ee","ee","ee","ee","t1"],["d1","d1","d1","d1","d2","d1","d2","d1","d2","d2","d1","d1","d2","d1","d1","d1","d2","d2","d1","d2","d1","d1","d1","d1"],["d1","d1","d2","d2","d2","d1","d1","d1","d1","d1","d1","d2","d1","d2","d1","d2","d1","d1","d1","d2","d2","d1","d2","d1"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 11, y: 5},
    wormCount: 12,
})