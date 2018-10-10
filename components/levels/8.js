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

const levelString = [["bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL"],["bL","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wu","bL","wl","ee","ee","ee","bL","wl","bL"],["bL","wu","ee","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wl","wu","ee","ee","ee","ee","wl","bL","ee","bL"],["bL","ee","ee","ee","ee","ee","ee","ee","ee","wl","ee","ee","ee","ee","ee","bL","ee","ee","ee","bL","ee","ee","ee","bL"],["bL","ee","ee","wl","ee","b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1","ee","ee","ee","ee","ee","ee","wl","bL"],["bL","ee","b1","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wl","ee","ee","ee","ee","ee","bL","ee","ee","bL"],["bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","bL"],["bL","ee","ee","ee","ee","wl","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","bL"],["bL","ee","ee","wr","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","bL"],["bL","ee","b1","ee","ee","wd","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","wd","ee","ee","bL"],["bL","ee","bL","bL","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","bL","ee","ee","ee","ee","ee","ee","ee","ee","bL"],["bL","wu","bL","bird","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","wl","ee","ee","ee","ee","ee","ee","ee","ee","bL"],["bL","ee","ee","wu","bL","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","ee","b1","wl","ee","ee","ee","ee","wl","bL"],["b1","b1","b1","b1","b1","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL","bL"]]
const level = levelString.map((r)=>{
    return r.map((c)=>{
        return tileKey[c]
    })
})
export default ({
    level,
    pos: {x: 3, y: 11},
    wormCount: 20,
})