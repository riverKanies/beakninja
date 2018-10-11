import level1 from './1'
import level2 from './2'
import level3 from './3'
import level4 from './4'
import level5 from './5'
import level6 from './6'
import level7 from './7'
import level8 from './8'
import level9 from './9'
import level10 from './10'

const levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
]

export const levelIndex = levels.map((l,i)=>(i+1))

export default levels