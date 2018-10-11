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

const levelString = [["d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2"],["d2","d2","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","d2","d2"],["d2","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","d2"],["d2","ee","ee","ee","wr","ee","ee","ee","ee","ee","ee","wr","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","wr","ee","ee","ee","ee","ee","ee","ee","wr","t1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2"],["d2","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","d2","ee","ee","ee","ee","ee","ee","ee","ee","ee","wr","d2"],["d2","d2","wr","ee","ee","ee","ee","ee","ee","wr","d2","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","bird","d2","d2"],["d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2","d2"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 21, y: 12},
    wormCount: 13,
})