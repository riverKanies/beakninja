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

const levelString = [["ee","t2","ee","t1","b2","b2","bL","ee","ee","ee","ee","ee","t2","bL","ee","ee","ee","bR","b2","b2","t2","bR","t2","ee"],["ee","t1","bR","t1","b2","b2","b2","b2","bL","bR","b2","b2","t1","b2","bL","bR","b2","b2","b2","b2","t1","ee","t2","ee"],["bR","t2","ee","t2","wu","d2","ee","ee","ee","ee","ee","ee","d2","ee","d2","ee","ee","ee","ee","ee","t1","bL","t1","bL"],["ee","t1","bR","t2","ee","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","t1","ee","t1","ee"],["ee","t1","bL","t1","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","wd","ee","ee","ee","ee","t2","bR","t1","ee"],["bR","t1","ee","t1","d2","ee","ee","ee","ee","ee","d2","wl","ee","ee","ee","d2","ee","ee","ee","d2","t1","bL","t2","ee"],["ee","t1","ee","t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","d2","t2","ee","t1","bL"],["ee","t1","bR","t2","ee","wr","d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","t1","ee","t2","ee"],["ee","t2","ee","t2","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","ee","t1","bR","t1","ee"],["bR","t1","bL","t1","ee","ee","ee","ee","ee","ee","ee","ee","d2","wl","wr","d2","d2","ee","ee","ee","t2","ee","t1","ee"],["ee","t2","ee","t1","ee","ee","d2","ee","wd","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","t1","ee","t1","ee"],["ee","t1","ee","t1","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","d2","ee","wd","ee","t1","ee","t1","ee"],["d1","d1","d1","d1","d2","d1","d2","d1","d2","d2","d1","d1","d2","d1","d1","d1","d2","d2","d1","d2","d1","d1","d1","d1"],["d1","d1","d2","d2","d2","d1","d1","d1","d1","d1","d1","d2","d1","d2","d1","d2","d1","d1","d1","d2","d2","d1","d2","d1"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 6, y: 11},
    wormCount: 8,
})